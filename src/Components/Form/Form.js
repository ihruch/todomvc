import React from 'react';

const Form = ({...props}) => {
 // console.log('FORM props', props)
    return(
      <form {...props}> 
        <input 
          placeholder="Enter your task" 
          type="text" 
          name="task"          
          {...props}
        />
      </form>
    );
}

export default Form;