import React from 'react';
import {connect} from "react-redux"
import {add} from "../store/store.js"

class ClassCatEdit extends React.Component{   
    constructor(props) {
        super(props);
        this.state = {name:"Эдуард", breed: "Британец", weight:5, isAngry:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        //const {name, value} = event.target
        const target = event.target;
        const name = target.name;
        // const value = target.value;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
          [name]: value
        });
    }

      handleSubmit(event) {
        this.props.add(this.state)
        event.preventDefault();
      }

        /**
         * Useful form elements:
         * 
         *  <input type="text" />
         *  <textarea /> element
         *  <input type="checkbox" />
         *  <input type="radio" />
         *  <select> and <option> elements
         */

      render() {
        return(                                  
            <form onSubmit={this.handleSubmit}>
              <h3>Добавление кота</h3>
              <input 
                type="text"
                placeholder="Имя котика"
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange} />
            <br/>
            <label>
                    <input 
                        type="radio" 
                        name="breed"
                        value="Манул"
                        checked={this.state.breed === "Манул"}
                        onChange={this.handleChange}
                    /> Манул
            </label>
            <label>
                    <input 
                        type="radio" 
                        name="breed"
                        value="Сфинкс"
                        checked={this.state.breed === "Сфинкс"}
                        onChange={this.handleChange}
                    /> Сфинкс
            </label>
            <label>
                    <input 
                        type="radio" 
                        name="breed"
                        value="Британец"
                        checked={this.state.breed === "Британец"}
                        onChange={this.handleChange}
                    /> Британец
            </label>            

            <br/>
            <label>Вес: </label>
                <select 
                    value={this.state.weight}
                    onChange={this.handleChange}
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
                        checked={this.state.isAngry}
                        onChange={this.handleChange}
                    /> Сердит
            </label>

            <br/><input className="btn btn-primary" type="submit" value="Добавить" />

          </form>
        )
    }
}
export default connect(state => ({}), {add})(ClassCatEdit) 