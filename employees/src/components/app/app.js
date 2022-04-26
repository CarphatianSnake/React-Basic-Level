import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmpolyeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import './app.css';

function App() {
  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmpolyeesList/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;