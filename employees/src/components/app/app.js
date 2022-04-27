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
        {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
        {name: 'Alex S.', salary: 3000, increase: false, rise: false, id: 2},
        {name: 'Dmytro M.', salary: 5000, increase: true, rise: false, id: 3}
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
        rise: false,
        id: data.reduce((acc, item) => {
          return acc = acc < item.id ? item.id : acc
        }, 0) + 1
      })
      return {
        data: newArr
      }
    })  
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]};
        }
        return item;
      })
    }))
  }

  render() {
    const employees = this.state.data.length,
          increased = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
        <AppInfo
              employees={employees}
              increased={increased}
        />
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmpolyeesList
              data={this.state.data}
              onDelete={this.deleteItem}
              onToggleProp={this.onToggleProp}
              />
        <EmployeesAddForm onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;