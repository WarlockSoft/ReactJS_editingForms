import React, { Component } from 'react';
import './App.css';
import DepartMentEdit from './departmentEdit';
import EmployeesEdit from './employeesEdit';
import { HashRouter, Route, Link } from 'react-router-dom';
	
	
class Content extends Component {
  render() {
    return (
      <div className="Content">
      	
	   <HashRouter>
	   	<div>
	       <Route path="/departments" component={DepartMentEdit} />
	       <Route path="/employees" component={EmployeesEdit} />
	    </div>
	  </HashRouter>
      </div>
    );
  }
}

export default Content;
