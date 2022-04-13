import React from "react";
import ClassCat from "./ClassCat"

class ClassCatList extends React.Component{

    render(){
        return(
            <div>
                <h1>Это список классовых котов</h1>
                <ClassCat/>
            </div>
        )
    }

}
export default ClassCatList; 