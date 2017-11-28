import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';

class LeftMenu extends Component {
	static propTypes = {
		items: PropTypes.array
	};
  render() {
	  console.log(this.props.items);
    return (
      <div className="LeftMenu">
      <HashRouter>
      	<div>
      	{this.props.items.map((item, index) =>
      		<li key={index}><Link to={item.link} key={index}>{item.name}</Link></li>
      	)}
      	</div>
      </HashRouter>
      </div>
    );
  }
}

export default LeftMenu;
