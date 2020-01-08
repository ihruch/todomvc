import React from 'react';

const Form = (props) => {
    console.log(props);
    return(
        <div className="input-field">
          <input 
            placeholder="Enter your task" 
            type="text" 
            name="task"
            />
        </div>
    );
}

export default Form;