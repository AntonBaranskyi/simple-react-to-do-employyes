import './employees-list-item.css';
import {Component} from 'react';

class EmployeesListItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            increase:false
        }
    }

    onChangeIncrease = ()=>{
        console.log('click')
        this.setState({
            increase: !this.state.increase
        })
    }
    render(){
        const {name,salary,onDelete} = this.props;
        const {increase} = this.state;
        let normalClass = 'list-group-item d-flex justify-content-between';
        if(increase){
            normalClass += ' increase'
        }

        
    return (
        <li className={normalClass}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={this.onChangeIncrease}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        onClick={onDelete}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
        }
}

export default EmployeesListItem;