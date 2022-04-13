import React from "react";

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
                <p>Кот поглажен {this.state.likeCount} раз</p>
                <button 
                    className="btn btn-primary"
                    onClick={this.handleClick}
                >Погладь кота
                </button>
            </div>
        )
    }

}
export default ClassCat; 