import React, { Component } from 'react';
import Header from './header';
import LeftMenu from './leftmenu';
import Content from './content';
import Bottom from './bottom';
import './App.css';

const leftmenu = [
   {
	   link: 'departments',
	   name: "Отдел"
   },
   {
	   link: 'employees',
	   name: "Сотрудники"
   }
];

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header />
      	<LeftMenu items={leftmenu}/>
      	<Content />
      	<Bottom />
      </div>
    );
  }
}

export default App;
