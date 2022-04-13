import React from "react";

class ClassCat extends React.Component{

    render(){
        
        const cat = {name:"Рамзес", breed:"Сфинкс", weight:2, isAngry:true}       
        const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/GreekSphynxCat1.png/274px-GreekSphynxCat1.png"

        const catStyle = {
            color: 'white',
            backgroundColor:'green'
        }

        return(
            <div>
                 <h1 style={catStyle}>Кот {cat.name}</h1>
                <img src={logo}/>
                <p>Порода: {cat.breed}</p>
                <p>Вес: {cat.weight}кг.</p>
                <p>Состояние: {cat.isAngry ? "Сердит" :"Дружелюбен"}</p>
                <button className="btn btn-primary">Погладь кота</button>
            </div>
        )
    }

}
export default ClassCat; 