import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data,onDelete,toggleIncreaseItem,toggleRaiseItem}) => {
    let elements = data.map((item)=>{
        return(
            <EmployeesListItem {...item}
            key = {item.id}
            onDelete={()=>onDelete(item.id)}
            toggleIncreaseItem = {()=>toggleIncreaseItem(item.id)}
            toggleRaiseItem = {()=>toggleRaiseItem(item.id)}/>
        )
    })
    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployeesList;