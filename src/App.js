import './App.css'
import { CrazyDiceSDK } from 'crazydice-sdk'
function App() {
  const crazydice = 'http://localhost:3000'
  const initSDK = () => {
    window.crazyDiceSDK = new CrazyDiceSDK({
      appId: '1234567890',
      name: 'Heart of the Brave',
      logo: '',
      gameLink: '',
      version: '1.0.0',
    })
    console.log('init success! ', window.crazyDiceSDK)
  }
  // 在iframe中接收来自主页面的消息
  window.addEventListener('message', (event) => {
    if (event.origin !== crazydice) {
      return // 只接受来自可信源的消息
    }
    console.log('game Message from parent:', event.data)
  })
  const sendMsg = () => {
    window.parent.postMessage('game Hello from iframe', '*')
  }
  return (
    <div className="App">
      <ul>
        <li>
          <button onClick={initSDK}>初始化</button>
          <button onClick={sendMsg}>通信</button>
        </li>
      </ul>
    </div>
  )
}
export default App
