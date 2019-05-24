import React from 'react';
import connect from '../connect';

const mapStateToProps = (state) => {
  const { byId: persons } = state.persons;
  return { persons };
};

class PersonPage extends React.Component {
  render  () {
    const { id } = this.props.match.params;
    const { persons } = this.props;
    const person = persons[id];

    return (
      <div className='container pt-4'>
        <h2 className="mb-4">{person.name}</h2>
        <p>{person.gender}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PersonPage);
