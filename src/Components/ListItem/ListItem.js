import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    padding: 10px 30px 10px 20px; 
    position: relative;
  
    & > i {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        cursor: pointer;
    } 
   
`;
const InnerLi = styled.div`
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
`;

const  ListItem = ({item, removeTask, handleChange, ...rest }) => {
    console.log('props', rest)
    
    return (
        <Li  >
            <div>
                <input id="indeterminate-checkbox" type="checkbox" checked="false" /> 
                <span>{item.id}. {item.text}</span>
                
            </div>           
            <i className="material-icons"  onClick={() => removeTask(item.id)}>delete_forever</i>  
        </Li> 
    );
}

export default ListItem;

