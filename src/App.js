import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Counter from './Counter';
import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Counter Application</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
