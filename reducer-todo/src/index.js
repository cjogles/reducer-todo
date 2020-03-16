import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/App';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Title />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
