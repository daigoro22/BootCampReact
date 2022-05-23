import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
{// import Button from 'react-bootstrap/Button'
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn btn-outline-danger" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </header>
    </div>
  )
}

export default App
