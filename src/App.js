import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import ListPublicHolidayComponent from './components/ListPublicHolidayComponent';
import CreatePublicHolidayComponent from './components/CreatePublicHolidayComponent';
import UpdatePublicHolidayComponent from './components/UpdatePublicHolidayComponent';
import ViewPublicHolidayComponent from './components/ViewPublicHolidayComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListPublicHolidayComponent}></Route>
                          <Route path = "/publicholiday" component = {ListPublicHolidayComponent}></Route>
                          <Route path = "/add-publicholiday" component = {CreatePublicHolidayComponent}></Route>
                          <Route path = "/update-publicholiday/:id" component = {UpdatePublicHolidayComponent}></Route>
                          <Route path = "/view-publicholiday/:id" component = {ViewPublicHolidayComponent}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
