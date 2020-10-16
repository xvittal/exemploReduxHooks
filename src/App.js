import React from 'react';
import { Provider } from 'react-redux'; //=> necessário para fazer o providers funcionar.
import store from './store';
import TestesList from './components/TestesList';

function App() {
  return (
    // qual a diferença de usar esse trecho dentro do App ou dentro do Index que chama o 'root' ??
    <Provider store={ store }> 
      <div className="App">
        <TestesList />
      </div>
    </Provider>
  );
}
export default App;
