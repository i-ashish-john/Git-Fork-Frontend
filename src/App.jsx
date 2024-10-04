import {useState} from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState(0)

  const handleClick = () => {
    fetch("http://localhost:5173")
      .then((response) => response.json())
      .then((result) => {
        setDisplay(result)
        console.log(result)
      })
      .catch((error) => console.error("Error fetching data:", error))
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Fetch Data</button>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        {display.map((number) => {
          return <p key={number}>{number}</p>
        })}
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
