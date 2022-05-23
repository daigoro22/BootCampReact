import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import classnames from "classnames"

function App() {
  const [count, setCount] = useState(0) // js の分割代入の書き方。現在の state と state を更新する関数をペアにして返す

  const countClassNames = {
    "btn": true,
    "btn-outline-success": count < 10,
    "btn-outline-warning": count > 9 && count < 20,
    "btn-outline-danger": count > 19,
    "disabled": count > 29
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className={classnames(countClassNames)} onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </header>
    </div>
  )
}

export default App
