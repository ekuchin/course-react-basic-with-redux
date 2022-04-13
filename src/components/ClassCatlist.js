import React from "react";
import ClassCat from "./ClassCat"

class ClassCatList extends React.Component{

    render(){
        
        const catArray = this.props.cats.map((cat) => <ClassCat key={cat.id} cat={cat}/>)

        return(
            <div>
                <h1>Это список классовых котов</h1>
                {catArray}
            </div>
        )
    }

}
export default ClassCatList; 