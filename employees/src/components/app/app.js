import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmpolyeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 800, increase: false, id: 1},
        {name: 'Alex S.', salary: 3000, increase: false, id: 2},
        {name: 'Dmytro M.', salary: 5000, increase: true, id: 3}
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  onAdd = ({name, salary}) => {
    this.setState(({data}) => {
      const newArr = data.map(item => item);
      newArr.push({
        name,
        salary,
        increase: false,
        id: data.reduce((acc, item) => {
          return acc = acc < item.id ? item.id : acc
        }, 0) + 1
      })
      return {
        data: newArr
      }
    })
    
  }

  render() {
    return (
      <div className="app">
        <AppInfo/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmpolyeesList
              data={this.state.data}
              onDelete={this.deleteItem}
              />
        <EmployeesAddForm onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;