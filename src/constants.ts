import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSCMAINNET = 56,
  BSCTESTNET = 97,
  MATICMAINNET = 137,  
  // Comment this for now
 // FUJI = 43113,
 // AVALANCHE = 43114
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const isBSC = (chainId: ChainId): boolean => {
  switch (chainId) {
    case ChainId.BSCMAINNET:
      return true;
    case ChainId.BSCTESTNET:
      return true; 
    default:
      return false
  }
}

export const isMATIC = (chainId: ChainId): boolean => {
  switch (chainId) {
    case ChainId.MATICMAINNET:
      return true;
    default:
      return false
  }
}

export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
// Pancakeswap v2
export const FACTORY_ADDRESS_BSC = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'

/*export const FACTORY_ADDRESS_AVAX: { [chainId: number]: string } = {
  [ChainId.FUJI]: '0xE4A575550C2b460d2307b82dCd7aFe84AD1484dd',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88'
}*/

export const GET_FACTORY_ADDRESS = (chainId: ChainId) => {
  if(isBSC(chainId)){
   return FACTORY_ADDRESS_BSC
  }else{
   return FACTORY_ADDRESS
  }
}

export const GET_INIT_CODE_HASH = (chainId: ChainId) => {
  if(isBSC(chainId)){
   return INIT_CODE_HASH_BSC
  }else{
   return  INIT_CODE_HASH 
  }
}


export const INIT_CODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'
// Pancakeswap v2
export const INIT_CODE_HASH_BSC = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'

export const INIT_CODE_AVAX = '0x40231f6b438bce0797c9ada29b718a87ea0a5cea3fe9a771abdd76bd41a3e545'


export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _998 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)


export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
