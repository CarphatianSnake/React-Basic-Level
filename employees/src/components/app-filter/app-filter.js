import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {

  btnChangeClass = (e) => {
    document.querySelectorAll('button').forEach(item => {
      item.classList.remove('btn-light');
      item.classList.add('btn-outline-light');
    })
    e.target.classList.remove('btn-outline-light');
    e.target.classList.add('btn-light');
  }

  render() {
    const {onFilter} = this.props;
    return (
      <div className="btn-group">
        <button
          className="btn btn-light"
          type="button"
          data-button="all"
          onClick={(e) => {this.btnChangeClass(e); onFilter(e.target.getAttribute('data-button'))}}>
            Все сотрудники
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          data-button="toPromotion"
          onClick={(e) => {this.btnChangeClass(e); onFilter(e.target.getAttribute('data-button'))}}>
            Сотрудники на повышение
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          data-button="salaryOver1000"
          onClick={(e) => {this.btnChangeClass(e); onFilter(e.target.getAttribute('data-button'))}}>
            З/П больше 1000%
        </button>
      </div>
    )
  }
}

export default AppFilter;