import React from 'react';
import styled from 'styled-components';


const Li = styled.li`
    padding: 10px 20px;
    &:hover {
        background-color: #26a69a ;
        color: #fff;
        transition: all 0.25s ease-in ;
    }
`;
const InnerLi = styled.div`
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;

    & > i {
        cursor: pointer;
    }
`;

function ListItem({id, text, ...props}) {

    return (
        <Li className="collection-item" >
            <InnerLi>
                {id}. {text}
                <i className="material-icons">delete_forever</i>  
            </InnerLi>   
        </Li> 
    );
}


export default ListItem;

