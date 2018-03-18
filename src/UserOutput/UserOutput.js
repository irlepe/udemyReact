import React from 'react';

const userOutput = (props) => {
  const style ={
    backgroundColor: 'red',
  };
  return (
    <div>
      <p style={style}>Paragraph 1 {props.username}</p>
      <p>Paragraph 2</p>
    </div>
  );
}

export default userOutput;