import FuncCat from "./FuncCat"
import { useEffect, useState } from "react";
import FuncCatEdit from "./FuncCatEdit";

import {connect} from "react-redux"

function FuncCatList (props){
    //const [cats, setCats] = useState(catData)
    const cats=props.cats
    const [isLoading, setLoading] = useState(true);
    
    const catArray = cats.map((cat) => <FuncCat key={cat.id} cat={cat}/>)

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    },[])

    return(
        <div>
            <h1>Это список функциональных котов</h1>
            {isLoading 
                ? <h3>Подождите 1 сек, котики загружаются..</h3>
                : catArray
            }
            <br/>
            <FuncCatEdit/>
        </div>
    )
}
export default connect(state => ({cats: state}), {})(FuncCatList) 