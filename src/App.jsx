import Bgchanger from "./Components/Bgchanger"
import Search from './Components/Search'
import Result from "./Components/Result"
import Tabs from "./Components/Tabs"

 function App() {
 
    return <>
    <div className="nav_element">
      <Search />
       <Bgchanger />
    </div>
    <Tabs />
    <Result />
    </> 
   
    
}

export default App
