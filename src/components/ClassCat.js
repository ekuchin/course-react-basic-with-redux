import React from "react";
import {connect} from "react-redux"
import {remove} from "../store/store.js"

class ClassCat extends React.Component{
    constructor(){
        super()
        this.state={ likeCount: 0}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {   
        this.setState(prevState => ({
            likeCount: prevState.likeCount + 1
        }));  }
    
    render(){   
        const cat = this.props.cat       

        const catStyle = {
            color: 'white',
            backgroundColor:'green'
        }

        return(
            <div>
                 <h1 style={catStyle}>Кот {cat.name}</h1>
                <p>Порода: {cat.breed}</p>
                <p>Вес: {cat.weight}кг.</p>
                <p>Состояние: {cat.isAngry ? "Сердит" :"Дружелюбен"}</p>
                {!cat.isAngry && <p>Классовый кот желает счастья Вам :)</p>}
                <p>Кот поглажен {this.state.likeCount} раз</p>
                <button 
                    className="btn btn-primary"
                    onClick={this.handleClick}
                >Погладь кота
                </button>
                <br/><br/>
                <button 
                    className="btn btn-cancel"
                    onClick={()=>this.props.remove(cat.id)}
                >Удалить кота
                </button>
            </div>
        )
    }

}
export default connect(state => ({}), {remove})(ClassCat) 