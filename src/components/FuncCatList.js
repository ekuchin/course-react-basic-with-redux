import FuncCat from "./FuncCat"
import catData from '../data/catsData';
import { useState } from "react";

function FuncCatList (props){
    const [cats, setCats] = useState(catData)
    
    const addCat = () =>{

        //Задаем кота константой
        const newCat =  {name:"Мурка", breed: "Беспородная", weight:4, isAngry:false}

        //Используем id последнего кота в списке          
        const newId=cats[cats.length-1].id+1
        const idCat = {...newCat, id:newId}
        const updatedCats = [...cats, idCat]
        setCats(updatedCats)
    }

    const removeCat = (id)=>{

            const updatedCats = cats.filter(cat => cat.id !== id)
            setCats(updatedCats) 
    }
    const catArray = cats.map((cat) => <FuncCat key={cat.id} cat={cat} removeCat={removeCat}/>)

    return(
        <div>
            <h1>Это список функциональных котов</h1>
            {catArray}
            <br/>
            <button 
                className="btn btn-primary"
                onClick={addCat}
            >Добавить кота
            </button>
        </div>
    )
}
export default FuncCatList;