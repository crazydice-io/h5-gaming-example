import React from 'react'
import { CrazyDiceSDKConfig, CrazyDiceSDK } from 'crazydice-sdk'
import './App.css'

function App() {
  const config: CrazyDiceSDKConfig = {
    appId: BigInt(1000000),
    name: 'Heart of the Brave',
    logo: '',
    gameLink: '',
    version: '1.0.0',
    env: 'development',
  }
  let sdk = new CrazyDiceSDK(config)

  // 打开启钱包连接信息页面
  const connect = async () => {
    const resp = await sdk.openLogin()
    console.log('connect', resp)
  }
  // 获取账户信息
  const getAccount = async () => {
    const resp = await sdk.getAccount()
    console.log('getAccount', resp)
  }
  // 获取余额
  const getBalance = async () => {
    const resp = await sdk.getBalance()
    console.log('getBalance', resp)
  }
  return (
    <div className="App">
      <ul>
        <li>
          <button onClick={connect}>连接钱包/Connect Wallet</button>
        </li>
        <li>
          <button onClick={getAccount}>获取账户信息/GetAccount</button>
        </li>
        <li>
          <button onClick={getBalance}>获取余额</button>
        </li>
      </ul>
    </div>
  )
}

export default App
