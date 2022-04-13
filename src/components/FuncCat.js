function FuncCat (){

    const cat = {name:"Мурзик", breed:"Манул", weight:10, isAngry:false}
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Manoel.jpg/275px-Manoel.jpg"

    const catStyle = {
        color: 'blue',
        backgroundColor:'yellow'
    }

    return(
        <div>
                <h1 style={catStyle}>Кот {cat.name}</h1>
                <img src={logo}/>
                <p>Порода: {cat.breed}</p>
                <p>Вес: {cat.weight}кг.</p>
                <p>Состояние: {cat.isAngry ? "Сердит" :"Дружелюбен"}</p>
                <button className="btn btn-primary">Погладь кота</button>
        </div>
    )
}
export default FuncCat; 