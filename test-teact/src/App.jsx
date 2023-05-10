import Header from './components/CostItem/Header'
import costs from './components/componentsState'
import Item from "./components/Item/Item"

import './App.css'
import BurgerMenu from './components/Burger'

function App() {


  return (
    <>
     <div className='container'>
    <div className='item__blok'>
      <Item/>
    </div>
    <BurgerMenu/>
     </div>
    </>
  )
}


export default App
