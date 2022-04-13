import React from "react";
import ClassCat from "./ClassCat"
import catData from "../data/catsData.js"

class ClassCatList extends React.Component{
    
    constructor(){
        super()
        this.state={ cats: catData}
    }
    render(){
        
        const catArray = this.state.cats.map((cat) => <ClassCat key={cat.id} cat={cat}/>)

        return(
            <div>
                <h1>Это список классовых котов</h1>
                {catArray}
            </div>
        )
    }

}
export default ClassCatList; 