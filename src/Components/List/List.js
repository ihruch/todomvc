import React from 'react';

import './List.css'

const List = ({list, filter, ...props}) => {
    console.log('props List', props);

    return(
        <ul class="collection">
            {
                list.map( item => 
                    <li key={item.id} class="collection-item" >
                        {item.id}. {item.text}
                    </li> 
                )
            }
            
        </ul>
        
    );
}

export default List;