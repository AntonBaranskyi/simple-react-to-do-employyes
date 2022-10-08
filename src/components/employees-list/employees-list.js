import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data,onDelete}) => {
    let elements = data.map((item)=>{
        return(
            <EmployeesListItem name = {item.name} salary = {item.salary} key = {item.id} increase = {item.increase} 
            onDelete={()=>onDelete(item.id)}/>
        )
    })
    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployeesList;