import JSBI from 'jsbi'

import { SolidityType, ChainId } from '../constants'
import { validateSolidityTypeInstance, isBSC } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  public static getETHER(chainId: ChainId){
    if(isBSC(chainId)){
      return new Currency(18, 'BNB', 'Binance')
    }
    return  new Currency(18, 'ETH', 'Ether')
  }
  



}

const GET_ETHER = Currency.getETHER;
export {  GET_ETHER }
