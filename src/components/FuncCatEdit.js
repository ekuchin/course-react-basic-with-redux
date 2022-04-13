import { useState } from "react"

function FuncCatEdit(props){

    const [newCat, setNewCat] = useState({name:"Эдуард", breed: "Британец", weight:5, isAngry:false}) 

    const handleSubmit = (event)=> {
        props.addCat(newCat)
        event.preventDefault();        
    }

    const handleChange = (event)=> {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setNewCat({...newCat, [name]: value});     
    }

    return(                                  
        <form onSubmit={handleSubmit}>
          <h3>Добавление кота</h3>
          <input 
            type="text"
            placeholder="Имя котика"
            name="name" 
            value={newCat.name} 
            onChange={handleChange} />
        <br/>
        <label>
                <input 
                    type="radio" 
                    name="breed"
                    value="Манул"
                    checked={newCat.breed === "Манул"}
                    onChange={handleChange}
                /> Манул
        </label>
        <label>
                <input 
                    type="radio" 
                    name="breed"
                    value="Сфинкс"
                    checked={newCat.breed === "Сфинкс"}
                    onChange={handleChange}
                /> Сфинкс
        </label>
        <label>
                <input 
                    type="radio" 
                    name="breed"
                    value="Британец"
                    checked={newCat.breed === "Британец"}
                    onChange={handleChange}
                /> Британец
        </label>            

        <br/>
        <label>Вес: </label>
            <select 
                value={newCat.weight}
                onChange={handleChange}
                name="weight"
            >
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="9">9</option>
            </select>
        <br/>
        <label>
                <input 
                    type="checkbox" 
                    name="isAngry"
                    checked={newCat.isAngry}
                    onChange={handleChange}
                /> Сердит
        </label>

        <br/><input className="btn btn-primary" type="submit" value="Добавить" />

      </form>
    )
}
export default FuncCatEdit 