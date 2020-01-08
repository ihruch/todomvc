import React from 'react'
import { NavLink } from 'react-router-dom';


 export const Navlink = () => {
    return (
        <React.Fragment>
            <NavLink to="/" exact activeClassName="isActive ">all</NavLink>
            <NavLink to="/completed" activeClassName="isActive  ">completed</NavLink>
            <NavLink to="/non-completed" activeClassName="isActive ">non-completed</NavLink>
        </React.Fragment>
    )
}

