import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage'
import RecipesDetailPage from '../pages/RecipesDetailPage/RecipesDetailPage'
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage'
import SingUpPage from '../pages/SingUpPage/SingUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'
   
const Router = () => {
    return (

       <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/adicionar-receita'>
                <AddRecipesPage/>
            </Route>
            <Route exact path='/detalhe/:id'>
                <RecipesDetailPage/>
            </Route>
            <Route exact path='/'>
                <RecipesListPage/>
            </Route>
            <Route exact path='/cadastro'>
                <SingUpPage/>
            </Route>
            <Route exact path='/login'>
                <LoginPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
          </Switch>
       </BrowserRouter>
    )
}

export default Router