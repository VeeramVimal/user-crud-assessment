import React from "react";
import { Switch, Route } from "react-router-dom";

// Our all component files
// import ListContent from '../CRUD/ListContent';
// import AddContent from "../CRUD/AddContent";
import EditContent from "../CRUD/EditContent";
import MainContent from "../CRUD/MainContent";


function Main() {

  return (
    <main>
      <Switch>
        {/* <Route exact path ="/" component={props=> <ListContent {...props}/>}/> */}
        {/* <Route path="/add" component={AddContent} /> */}
        {/* <Route path="/edit" component={props => <EditContent {...props} />} /> */}
        <Route exact path="/" component={MainContent}/>
      </Switch>
    </main>
  );
}

export default Main;
