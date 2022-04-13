import FuncCat from "./FuncCat"
import catData from '../data/catsData';
import { useEffect, useState } from "react";
import FuncCatEdit from "./FuncCatEdit";

function FuncCatList (props){
    const [cats, setCats] = useState(catData)
    const [isLoading, setLoading] = useState(true);
    
    const addCat = (newCat) =>{

        //Задаем кота константой
        //const newCat =  {name:"Мурка", breed: "Беспородная", weight:4, isAngry:false}

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
            <FuncCatEdit addCat={addCat}/>
        </div>
    )
}
export default FuncCatList;