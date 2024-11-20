import './App.css'
import Counter from './components/ContextApiCounter/Counter'
import { CounterContextProvider } from './context/CounterContextProvider'

function App() {

  return (
    <div>
      <CounterContextProvider>
        <Counter/>
      </CounterContextProvider>
    </div>
  )
}

export default App
