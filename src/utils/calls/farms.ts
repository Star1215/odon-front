import BigNumber from 'bignumber.js'
import { BOOSTED_FARM_GAS_LIMIT, DEFAULT_TOKEN_DECIMAL } from 'config'
import getGasPrice from 'utils/getGasPrice'
import Cookies from 'universal-cookie';
import rot13 from 'utils/encode';
import { isAddress } from 'utils';

const options = {
  gasLimit: BOOSTED_FARM_GAS_LIMIT,
}

const cookies = new Cookies();

export const stakeFarm = async (masterChefContract, pid, amount) => {
  const gasPrice = getGasPrice()
  let ref
  if(cookies.get('ref')) {
    if(isAddress( rot13(cookies.get('ref')) )) {
      ref = rot13(cookies.get('ref'))
    }
  } else {
    ref = "0x0000000000000000000000000000000000000000"
  }

  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()

  return masterChefContract.deposit(pid, value, ref, { ...options, gasPrice })
}

export const unstakeFarm = async (masterChefContract, pid, amount) => {
  const gasPrice = getGasPrice()
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()

  return masterChefContract.withdraw(pid, value, { ...options, gasPrice })
}

export const harvestFarm = async (masterChefContract, pid) => {
  let ref
  if(cookies.get('ref')) {
    if(isAddress( rot13(cookies.get('ref')) )) {
      ref = rot13(cookies.get('ref'))
    }
  } else {
    ref = "0x0000000000000000000000000000000000000000"
  }

  const gasPrice = getGasPrice()

  return masterChefContract.deposit(pid, '0', ref, { ...options, gasPrice })
}
