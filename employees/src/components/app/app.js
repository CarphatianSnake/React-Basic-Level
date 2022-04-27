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
      ],
      term: '',
      action: 'all'
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

  searchEmp = (items, term) => {
    const action = this.state.action;
    const filteredItems = items.filter(item => {
      if (action === 'toPromotion' && item.rise) return item
      if (action === 'salaryOver1000' && item.salary > 1000) return item
      if (action === 'all') return item
      return null;
    })

    if (term.length === 0) {
      return filteredItems;
    }
    return filteredItems.filter(item => {
      return item.name.toLowerCase().indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({
      term: term
    })
  }

  onFilter = (action) => {
    this.setState({
      action: action
    })
  }

  render() {
    const {data, term} = this.state;
    const employees = this.state.data.length,
          increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.searchEmp(data, term);
    return (
      <div className="app">
        <AppInfo
              employees={employees}
              increased={increased}
        />
  
        <div className="search-panel">
          <SearchPanel
              onUpdateSearch={this.onUpdateSearch}
          />
          <AppFilter
              onFilter={this.onFilter}
          />
        </div>
  
        <EmpolyeesList
              data={visibleData}
              onDelete={this.deleteItem}
              onToggleProp={this.onToggleProp}
              />
        <EmployeesAddForm
              onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;