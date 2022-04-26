import EmployeesListItem from '../empolyees-list-item/empolyees-list-item';
import './employees-list.css';

const EmpolyeesList = ({data, onDelete}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
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