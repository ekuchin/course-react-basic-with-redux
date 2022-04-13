function FuncCat (props){

    const cat = props.cat

    const catStyle = {
        color: 'blue',
        backgroundColor:'yellow'
    }

    return(
        <div>
                <h1 style={catStyle}>Кот {cat.name}</h1>
                <p>Порода: {cat.breed}</p>
                <p>Вес: {cat.weight}кг.</p>
                <p>Состояние: {cat.isAngry ? "Сердит" :"Дружелюбен"}</p>
                <button className="btn btn-primary">Погладь кота</button>
        </div>
    )
}
export default FuncCat; 