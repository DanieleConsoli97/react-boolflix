import Header from "./components/Header"
import Main from "./components/Main"
import { ApiProvider } from "./contexts/ApiContexts"

function App() {

  return (
    <ApiProvider>
        <Header/>
        <Main />
    </ApiProvider>
  )
}

export default App
