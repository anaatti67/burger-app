/* eslint-disable no-unused-vars */
import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Burger Builder</NavigationItem>
    {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
    {!props.isAuthenticated
      ? <NavigationItem link="/auth">SignIn/Up</NavigationItem>
      : <NavigationItem link="/logout">Logout</NavigationItem>
    }
  </ul>
)

export default navigationItems
