import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            salary:''
        }
    }

    onWriteNameChange= (e)=>{
        this.setState({
            name:e.target.value
        })
    }
    onWriteSalaryChange =(e)=>{
        this.setState({
            salary:e.target.value
        })
    }
    onSubmit = (e)=>{
        e.preventDefault();

       this.props.onAdd(this.state.name,this.state.salary);

       this.setState({
        name:'',
        salary:''
       })
    }
    render(){
        const {name,salary} = this.state;
    return (
        
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                onSubmit={this.onSubmit}
                className="add-form d-flex">
                <input type="text"
                    value={name}
                    onChange={this.onWriteNameChange}
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" />
                <input type="number"
                    value={salary}
                    onChange={this.onWriteSalaryChange}
                    className="form-control new-post-label"
                    placeholder="З/П в $?" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}
    }

export default EmployeesAddForm;