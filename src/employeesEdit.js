import React, { Component } from 'react';
import './App.css';

class EmployeesEdit extends Component {
	constructor(props){
		super(props);
		this.state = {
			employeeName: "",
			employeeLastName: "",
			departmentID: ""
		}
		this.employeeNameChange = this.employeeNameChange.bind(this);
		this.employeeLastNameChange = this.employeeLastNameChange.bind(this);
		this.departmentIDChange = this.departmentIDChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
	}
	
	employeeNameChange(event){
		
		this.setState({employeeName: event.target.value});
		document.getElementById('status').innerHTML = "Вводятся данные в поле `Имя сотрудника`";
	}
	
	employeeLastNameChange(event){
		
		this.setState({employeeLastName: event.target.value});
		document.getElementById('status').innerHTML = "Вводятся данные в поле `Фамилия сотрудника`";
	}
	
	departmentIDChange(event){
		this.setState({departmentID: event.target.value});
		document.getElementById('status').innerHTML = "Вводятся данные в поле `Идентификатор отдела` (Только цифры)";
	}	
	
	lostFocus(){
		document.getElementById('status').innerHTML = "Статус...";
	}
	
	formSubmit(event){
		event.preventDefault;
		document.getElementById('status').innerHTML = "Форма сохранена";

	}
  render() {
    return (
      <div className="Form">
      		<h2>Редактирование сотрудника</h2>
      		<form onSubmit={this.formSubmit}>
      		<input type="text" placeholder="Имя Сотрудника" value={this.state.employeeName} onBlur={this.lostFocus} onChange={this.employeeNameChange} /><br />
      		<input type="text" placeholder="Фамилия Сотрудника" value={this.state.employeeLastName} onBlur={this.lostFocus} onChange={this.employeeLastNameChange} /><br />
      		<input type="number" placeholder="Идентификатор отдела (только цифры)" value={this.state.departmentID} onBlur={this.lostFocus} onChange={this.departmentIDChange} />
      		<br /><br />
      		<button onBlur={this.lostFocus}>Сохранить</button>  
      		</form>
      </div>
    );
  }
}

export default EmployeesEdit;
