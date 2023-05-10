import Header from "../CostItem/Header";
import costs from "../componentsState";
import s from "./Item.module.css"
const Costs = () => {
    return (
        <div className={s.blok}>
            <Header date = {costs[0].date} descr = {costs[0].descr} price = {costs[0].price}/>
            <Header date = {costs[1].date}  descr = {costs[1].descr} price = {costs[1].price}/>
            <Header date = {costs[2].date}  descr = {costs[2].descr} price = {costs[2].price}/>
        </div>
      );
}
 
export default Costs;