import React from 'react';
import ListItem from '../ListItem';

const List = ({list, filter, ...props}) => {
    console.log('props List', props);

    const filterList = (list) => {
        switch(filter) {
            case 'completed': 
                return list.filter( i => i.completed);
                break;
            case 'non-completed': 
                return list.filter( i => !i.completed);
                break;    
            default:
                return list;
                break;    
        }           
    }

    return(
        <ul className="collection">
            {
                filterList(list).map( item => <ListItem key={item.id} {...item}/> )
            }
        </ul>
        
    );
}

export default List;

/*
 <li class="collection-item">
  <div>Alvin
    <a href="#!" class="secondary-content">
        <i class="material-icons">send
        </i>
    </a>
    </div> */