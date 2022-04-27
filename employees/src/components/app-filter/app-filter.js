import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'toPromotion', label: 'Сотрудники на повышениеи'},
    {name: 'salaryOver1000', label: 'З/П больше 1000%'},
    {name: 'premium', label: 'Сотрудники на премию'}
  ]

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilter(name)}>
          {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}

export default AppFilter;