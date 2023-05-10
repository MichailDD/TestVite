import s from "./Header.module.css"
import propTypes from "prop-types"

const Header = (props) => {
    return ( 
        <div className={s.item}>
            <div>
                <div className={s.data}>
                    <div>{props.date.toLocaleString("ru-RU")}</div>
                    <div>year</div>
                    <div>day</div>
                </div>
            </div>
            <div className={s.blok}>
                <h2 className={s.title}>{props.descr}</h2>
                <div className={s.price} >${props.price}</div>
            </div>
        </div>
     );
}
Header.propTypes ={
    data:propTypes.any,
    descr:propTypes.string,
    price:propTypes.number,
    

}
 
export default Header; 