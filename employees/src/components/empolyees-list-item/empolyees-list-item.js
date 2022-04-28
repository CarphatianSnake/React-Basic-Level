import './empolyees-list-item.css';

const EmployeesListItem = (props) => {

  const {name, salary, onDelete, onToggleProp, increase, rise, id, onSalaryChange} = props;
    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) classNames += ' increase'
    if (rise) classNames += ' like'

    return (
      <li className={classNames}>
        <span onClick={onToggleProp} data-toggle="rise" className="list-group-item-label">{name}</span>
        <input 
                type="text"
                className="list-group-item-input"
                defaultValue={salary + '$'}
                onChange={(e) => {
                  onSalaryChange(id, +e.target.value.replace('$', ''))
                  }}
                />
        <div className="d-flex justify-content-center align-items-center">
          <button
                className="btn-cookie btn-sm"
                onClick={onToggleProp}
                data-toggle="increase"
                type="button">
            <i className="fas fa-cookie"></i>
          </button>
          <button
                className="btn-trash btn-sm"
                onClick={onDelete}
                type="button">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
}

export default EmployeesListItem;