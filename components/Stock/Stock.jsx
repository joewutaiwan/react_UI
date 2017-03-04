import React, { Component } from 'react';
import styles from './Stock.css';
import { connect } from 'react-redux';
import { ChangeActivate } from '../../actions.js';

import { TextPanel } from '../index';
import { ImgBlock } from '../index';

var BasicInputBox = React.createClass ({
  render: function (){
    return (
     <div>
       <label>{this.props.label}</label>
       <br/>
       <input label={this.props.label} type="text" onChange={this.props.valChange} value= {this.props.val} />
       <br/>
	   <br/>
     </div>
    );
  }
 });

 var TypeSelectBox = React.createClass({
   render: function(){
     return (
       <div>
         <label>{this.props.label}</label>
         <br/>
         <select id="lang" onChange={this.props.valChange} value={this.props.val}>
            <option value="1">損益表</option>
            <option value="2">資產負債表</option>
            <option value="3">現金流量表</option>
			<option value="4">股東權益表</option>
         </select>
		 <br/>
		 <br/>
       </div>
     );
   }
 });
 
 var YearSelectBox = React.createClass({
   render: function(){
     return (
       <div>
         <label>{this.props.label}</label>
         <br/>
         <select id="lang" onChange={this.props.valChange} value={this.props.val}>
            <option value="0">None</option>
			<option value="102">102</option>
            <option value="103">103</option>
            <option value="104">104</option>
			<option value="105">105</option>
         </select>
		 <br/>
		 <br/>
       </div>
     );
   }
 });
 
 var SeasonSelectBox = React.createClass({
   render: function(){
     return (
       <div>
         <label>{this.props.label}</label>
         <br/>
         <select id="lang" onChange={this.props.valChange} value={this.props.val}>
            <option value="0">None</option>
			<option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
			<option value="04">04</option>
         </select>
		 <br/>
		 <br/>
       </div>
     );
   }
 });

var Stock = React.createClass({
  getInitialState: function(){
    return {'resp': 'hello man'}
  },
  
  submit: function (e){
    var self
    
    e.preventDefault()
    self = this

    //console.log(this.state);

    var data = {
      type: this.state.type,
      company: this.state.company,
	  year: this.state.year,
      season: this.state.season
    }

	fetch('http://ec2-52-69-55-105.ap-northeast-1.compute.amazonaws.com:9001/financialstatements', {
	method: 'POST',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(data)
	})
	.then(function(response) {
		if (response.status >= 400) {
			//throw new Error("Bad response from server");
		}
		return response.json();
	})
	.then(function(data) {
		//console.log(JSON.stringify(data));
		self.setState({'resp': JSON.stringify(data)})
	});

  },

  clearForm: function() {
    this.setState({
      type: "",
      company: "",
      year: "",
	  season: ""
    });
  },

  typeDataChange: function(e){
    this.setState({'type': e.target.value})
  },
   companyDataChange: function(e){
   this.setState({'company': e.target.value})
  },
   yearDataChange: function(e){
    this.setState({'year': e.target.value})
  },
   seasonDataChange: function(e){
    this.setState({'season': e.target.value})
  },

  render: function() {
    const { dispatch, PageItems } = this.props;
    return (
      <div className={styles.page}>
        <form onSubmit={this.submit}>
		  <TypeSelectBox label="type:" valChange={this.typeDataChange} val={this.state.type}/>
          <BasicInputBox label="company:" valChange={this.companyDataChange} val={this.state.company}/>
		  <YearSelectBox label="year:" valChange={this.yearDataChange} val={this.state.year}/>
          <SeasonSelectBox label="season:" valChange={this.seasonDataChange} val={this.state.season}/>
          <button type="submit">Submit</button>
        </form>
		<div>
		{this.state.resp}
		</div>
      </div>
    );
  }
});


function select(state) {
  return {
    PageItems: state.PageItems
  }
  
}
export default connect(select)(Stock)

