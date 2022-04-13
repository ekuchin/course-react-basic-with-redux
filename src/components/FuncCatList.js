import FuncCat from "./FuncCat"
import catData from '../data/catsData';
import { useState } from "react";

function FuncCatList (props){
    const [cats, setCats] = useState(catData)
    
    const catArray = cats.map((cat) => <FuncCat key={cat.id} cat={cat}/>)

    return(
        <div>
            <h1>Это список функциональных котов</h1>
            {catArray}
        </div>
    )
}
export default FuncCatList;