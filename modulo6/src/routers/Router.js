import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MegasenaPage from "../pages/MegasenaPage/MegasenaPage";
import QuinaPage from "../pages/QuinaPage/QuinaPage";
import LotofacilPage from "../pages/LotofacilPage/LotofacilPage";
import LotomaniaPage from "../pages/LotomaniaPage/LotomaniaPage";
import DiadeSortePage from "../pages/DiadeSortePage/DiadeSortePage";
import TimemaniaPage from "../pages/TimemaniaPage/TimemaniaPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/Mega-sena">
        <MegasenaPage/>
      </Route>
      <Route exact path="/Quina">
        <QuinaPage/>
      </Route>
      <Route exact path="/Lotofacil/:id">
        <LotofacilPage/>
      </Route>
      <Route exact path="/Lotomania">
        <LotomaniaPage/>
      </Route>
      <Route exact path="/Timemania">
        <TimemaniaPage/>
      </Route>
      <Route exact path="/Dia de Sorte">
        <DiadeSortePage/>
      </Route>
      <Route>
        <ErrorPage/>
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default Router;
