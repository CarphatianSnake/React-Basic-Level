import EmployeesListItem from '../empolyees-list-item/empolyees-list-item';
import './employees-list.css';

const EmpolyeesList = ({data, onDelete, onToggleProp, onSalaryChange}) => {
  
  const elements = data.map(item => {
    const {...itemProps} = item;
    return (
      <EmployeesListItem
        key={item.id}
        {...itemProps}
        onDelete={() => onDelete(item.id)}
        onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
        onSalaryChange={onSalaryChange}
        />
    )
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmpolyeesList;