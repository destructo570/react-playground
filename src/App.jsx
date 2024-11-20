import { Provider } from 'react-redux'
import './App.css'
import Counter from './components/ContextApiCounter/Counter'
import ReduxCounter from './components/ReduxCounter/ReduxCounter'
import { CounterContextProvider } from './context/CounterContextProvider'
import store from './reduxStore/store'

function App() {

  return (
    <div>
      {/* <CounterContextProvider>
        <Counter/>
      </CounterContextProvider> */}
      <Provider store={store}>
        <ReduxCounter/>
      </Provider>
    </div>
  )
}

export default App
