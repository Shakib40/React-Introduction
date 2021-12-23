import React from 'react';
import './App.css';
import List from './List/List';
import './index.css';

const myItems1 = [{ name: 'item 1' }, { name: 'item 2' },{ name: 'item 3' },{ name: 'item 4'}];
const myItems2 = [{ name: 'item 5' }, { name: 'item 6' }, { name: 'item 7' }, { name: 'item8'}];

function App() {
  return (
    <div className="App">
      <List title="Mobile Operating System" item={myItems1}/>
      <List title="Mobile Manufacture" item={myItems2}/>  
    </div>
  );
}

export default App;
