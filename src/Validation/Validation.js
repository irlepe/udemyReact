import React from 'react';

const validation = (props) => {
  let validationText = 'The text is too short';

  if (props.textLength > 5) {
    validationText = 'The text is long enough';
  }
  return (
    <div>
     <p>{validationText}</p>
    </div>
  )
}

export default validation;