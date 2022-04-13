import { useState } from "react"
import {connect} from "react-redux"
import {remove} from "../store/store.js"

function FuncCat (props){

    const cat = props.cat
    const [likeCount, setLikeCount] = useState(0);
    
    const catStyle = {
        color: 'blue',
        backgroundColor:'yellow'
    }

    return(
        <div>
                <h1 style={catStyle}>Кот {cat.name}</h1>
                <p>Порода: {cat.breed}</p>
                <p>Вес: {cat.weight}кг.</p>
                <p>Состояние: {cat.isAngry ? "Сердит" :"Дружелюбен"}</p>
                {!cat.isAngry && <p>Функциональный кот желает счастья Вам :)</p>}
                <p>Поглажен {likeCount} раз</p>

                <button 
                    className="btn btn-primary"
                    onClick={()=>setLikeCount(likeCount+1)}
                >Погладь кота
                </button>
                <br/><br/>
                <button 
                    className="btn btn-cancel"
                    onClick={()=>props.remove(cat.id)}
                >Удалить кота
                </button>
        </div>
    )
}
export default connect(state => ({}), {remove})(FuncCat) 