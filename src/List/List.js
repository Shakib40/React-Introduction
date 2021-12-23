import React from 'react';
import '../index.css';


const list = (props) => {
    return (
      <div>
          <h1>{props.title}</h1>
          <TodoList items={props.item} />
      </div> 
    );
}

const TodoList = ({ items }) =>{
    return items.map(item => (
        <li>{item.name}</li>
    ));
}

export default list;
