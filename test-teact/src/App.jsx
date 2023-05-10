import Header from './components/CostItem/Header'
import costs from './components/componentsState'
import './App.css'

function App() {


  return (
    <>
     <div className='container'>
    <div className='item__blok'>
    <Header date = {costs[0].date} descr = {costs[0].descr} price = {costs[0].price}/>
     <Header date = {costs[1].date}  descr = {costs[1].descr} price = {costs[1].price}/>
     <Header date = {costs[2].date}  descr = {costs[2].descr} price = {costs[2].price}/>
    </div>
     </div>
    </>
  )
}


export default App
