import React from "react";
import ClassCat from "./ClassCat"
import ClassCatEdit from "./ClassCatEdit"

import {connect} from "react-redux"

class ClassCatList extends React.Component{
    
    constructor(){
        super()
        this.state={
            isLoading:true
        }
    }
       
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render(){       
        const catArray = this.props.cats.map((cat) => <ClassCat key={cat.id} cat={cat}/>)

        return(
            <div>
                <h1>Это список классовых котов</h1>
                {this.state.isLoading 
                    ? <h3>Подождите 1,5 сек, котики загружаются..</h3>
                    : catArray
                }
                <br/>
                <ClassCatEdit/>
            </div>
        )
    }

}
export default connect(state => ({cats: state}), {})(ClassCatList) 