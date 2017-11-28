import React, { Component } from 'react';


class DepartMentEdit extends Component {
	constructor(props){
		super(props);
		this.state = {
			departmentName: ""
		}
		this.departmentNameChange = this.departmentNameChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
	}
	
	departmentNameChange(event){
		
		this.setState({departmentName: event.target.value});
		document.getElementById('status').innerHTML = "Вводятся данные в поле `Название отдела`";
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
      		<h2>Редактирование отдела</h2>
      		<form onSubmit={this.formSubmit}>
      		<input type="text" placeholder="Название отдела" value={this.state.departmentName} onBlur={this.lostFocus} onChange={this.departmentNameChange} />
      		<br /><br />
      		<button onBlur={this.lostFocus}>Сохранить</button>      		
      		</form>
      </div>
    );
  }
}

export default DepartMentEdit;
