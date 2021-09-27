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
         <Route  exact path="/Ecommerce/"> <Product/></Route>
          <Route exact path="/Ecommerce/cart"><Cart/></Route>
          <Route exact path="/Ecommerce/detail/:id" component={Detail}/>
         <Route exact path="/Ecommerce/signin" component={SignIn}/>
          </Switch>
              </StateProvider> 
        </div>
    )
}

export default Main
