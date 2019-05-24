import React from 'react';
import { Route } from 'react-router-dom';
import connect from '../connect';
import Main from './Main';
import PersonPage from './PersonPage';

const mapStateToProps = (state) => {
  const { gettingDataState } = state;
  return { gettingDataState };
};

class App extends React.Component {
  render() {
    const { gettingDataState } = this.props;

    return (
      <div className='container pt-4'>
        { gettingDataState === 'finished' ?
          <>
            <Route exact path="/" component={Main}/>
            <Route path="/:id" component={PersonPage}/>
          </> :
          <p>
            Идет загрузка данных...
          </p>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
