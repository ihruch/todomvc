import React from 'react';
import ListItem from '../ListItem';

const List = ({list, filter, ...rest}) => {

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

    if( filterList(list).length ) {
        return (
            <ul className="collection">
                {
                    filterList(list).map( item => <ListItem key={item.id} item={item} {...rest}/> )
                }
            </ul>     
        );
    }else{
        return null;
    }   
}

export default List;
