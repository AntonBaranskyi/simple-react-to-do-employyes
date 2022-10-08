import './employees-list-item.css';

const  EmployeesListItem = (props)=> {

        const {name,salary,onDelete,toggleIncreaseItem,toggleRaiseItem,increase,raise} = props;
        let normalClass = 'list-group-item d-flex justify-content-between ';
        if(increase){
            normalClass += ' increase';      
        }
      if(raise){
        normalClass += ' like';
      }
    return (
        <li className={normalClass}>
            <span onClick={toggleRaiseItem} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={toggleIncreaseItem}
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

export default EmployeesListItem;