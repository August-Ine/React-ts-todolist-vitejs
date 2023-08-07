import React from 'react';

const TodoList: React.FC<{items: string[]}> = (props)=>{
  console.log(props.items);
  return (
    {props.items.map(item=><li key={item}>{item}</li>)}
  );
};

export default TodoList;