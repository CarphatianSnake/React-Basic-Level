import EmployeesListItem from '../empolyees-list-item/empolyees-list-item';
import './employees-list.css';

const EmpolyeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem/>
      <EmployeesListItem/>
      <EmployeesListItem/>
    </ul>
  )
}

export default EmpolyeesList;