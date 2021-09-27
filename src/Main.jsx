import React from 'react'
import Product from "./Product"
import StateProvider from './StateProvider'
import { initialState,reducer } from './reducer'
import Navbars from './Navbars';
import {Route,Switch} from 'react-router-dom'
import Cart from "./Cart"
import Detail from './Detail';
import SignIn from './SignIn'

const Main = () => {
    return (
        <div>
          <StateProvider reducer={reducer} initialState={initialState}>
              <Navbars/>
          <Switch>
         <Route  exact path="/"> <Product/></Route>
          <Route exact path="/cart"><Cart/></Route>
          <Route exact path="/detail/:id" component={Detail}/>
         <Route exact path="/signin" component={SignIn}/>
          </Switch>
              </StateProvider> 
        </div>
    )
}

export default Main
