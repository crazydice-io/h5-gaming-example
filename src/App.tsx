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
  let login = async () => {
    const resp = await sdk.openLogin()
    console.log('login', resp)
  }
  return (
    <div className="App">
      <ul>
        <li>
          <button onClick={login}>打开登录页面</button>
        </li>
      </ul>
    </div>
  )
}

export default App
