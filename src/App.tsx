import React from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';

const App: React.FunctionComponent = () => {

  return (
    <div className="App">
      <div className="verticalCenter">
        <ClassComponent />
      </div>
    </div>
  );
}

export default App;