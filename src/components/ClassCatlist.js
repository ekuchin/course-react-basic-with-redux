import React from "react";
import ClassCat from "./ClassCat"
import catData from "../data/catsData.js"

class ClassCatList extends React.Component{
    
    constructor(){
        super()
        this.state={ cats: catData}
        this.addCat = this.addCat.bind(this)
        this.removeCat = this.removeCat.bind(this)
    }
    
    addCat(){

        //Задаем кота константой
        const newCat =  {name:"Мурка", breed: "Беспородная", weight:4, isAngry:false}

        //Используем id последнего кота в списке
        this.setState(prevState => {           
            const newId=prevState.cats[prevState.cats.length-1].id+1
            const idCat = {...newCat, id:newId}
            const updatedCats = [...prevState.cats, idCat]
            return {cats:updatedCats}
        })
    }

    removeCat(id){
        this.setState(prevState => {          
            const updatedCats = prevState.cats.filter(cat => cat.id !== id)
            return {cats:updatedCats}
        })
    }
    
    render(){
        
        const catArray = this.state.cats.map((cat) => <ClassCat key={cat.id} cat={cat} removeCat={this.removeCat}/>)

        return(
            <div>
                <h1>Это список классовых котов</h1>
                {catArray}
                <br/>
                <button 
                    className="btn btn-primary"
                    onClick={this.addCat}
                >Добавить кота
                </button>
            </div>
        )
    }

}
export default ClassCatList; 