import React, { useState } from 'react'
import { connect } from 'react-redux'

import Aux from '../Fragment/Aux'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

// This is a functiopn component that allows App.js to return more than one thing
const Layout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false)
  }

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible)
  }

  return (
    <Aux>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}/>
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}/>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout)
