import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       data : [
        {name:'Anton Baranskyi', salary:700, id: 1,increase:false},
        {name:'Kalaur Marina', salary:800, id: 2,increase:false},
        {name:'Tyler Joseph', salary:5000, id: 3,increase:false}
      ]
    }
    this.maxId = 4;
  }
  
  addItem = (name,salary)=>{
    const newElement = {
      name,
      salary,
      increase:false,
      id: this.maxId++
    }

    this.setState(({data})=>{
      const newArr = [...data,newElement];

      return{
        data:newArr
      }
    })
  }

  deleteItem = (id)=>{
    this.setState(({data})=>{
      const index = data.findIndex(elem=>elem.id === id) // знайшли індекс елементу на який клікнули
      //не можна змінювати state напряму

      const before = data.slice(0,index);
      const after = data.slice(index+1);
      const newArr = [...before, ...after];

      return{
        data:newArr
      }
    })
  }
  render(){
    
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={this.state.data}
        onDelete={this.deleteItem}/>
        <EmployeesAddForm onAdd = {this.addItem}/>
    </div>
  );
  }
}

export default App;

