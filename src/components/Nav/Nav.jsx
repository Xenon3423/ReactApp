import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/Messenger' className = { navData => navData.isActive ? classes.active : classes.item }>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/News' className = { navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/Music' className = { navData => navData.isActive ? classes.active : classes.item }>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/Settings' className = { navData => navData.isActive ? classes.active : classes.item }>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Nav;