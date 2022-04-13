import FuncCat from "./FuncCat"

function FuncCatList (props){

    const catArray = props.cats.map((cat) => <FuncCat key={cat.id} cat={cat}/>)

    return(
        <div>
            <h1>Это список функциональных котов</h1>
            {catArray}
        </div>
    )
}
export default FuncCatList;