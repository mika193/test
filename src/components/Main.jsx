import React from 'react';
import connect from '../connect';
import { uniqueId } from 'lodash';

const mapStateToProps = (state) => {
  const { filterValue } = state;
  const { byId, allIds } = state.persons;
  const persons = allIds.map(id => byId[id])
  const filteredPersons = persons.filter(({ name }) => name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
  return { filteredPersons, filterValue };
};

class Main extends React.Component {
  onPersonClick = (id) => (e) => {
    const { setCurentPersonId } = this.props;
    setCurentPersonId({ id });
  };

  onFilterChange = ({ target }) => {
    const { setFilterValue } = this.props;
    setFilterValue({ value: target.value });
  }

  render() {
    const { filteredPersons, filterValue } = this.props;
    return (
      <div className='container pt-4'>
        <form className="mb-4">
          <input
            type='text'
            name='filter'
            className='form-control'
            id='filter'
            placeholder='Введите имя персонажа'
            onChange={this.onFilterChange}
            value={filterValue}
          />
        </form>
        <ul className='list-group'>
          {filteredPersons.map(({ name, id }) => (
            <li className='list-group-item list-group-item-action' key={uniqueId()}>
              <a href={`#${id}`} onClick={this.onPersonClick(id)}>
                <h3>{name}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
