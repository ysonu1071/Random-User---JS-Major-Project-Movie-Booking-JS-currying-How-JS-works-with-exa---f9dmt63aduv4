import React, { Component } from 'react'
import '../styles/App.css';

import {useEffect} from 'react'
import { useState } from 'react';


// const fetchData = async() => {
//   const response = await fetch(' https://randomuser.me/api/');
//   const data = await response.json();
//   userData = data;
  
// }

// fetchData().then((a)=>{
//   console.log(userData)
// });



class App extends Component{
  constructor(){
    super();
    this.state = {
      title : "hi",
      firstName: '',
      lastName: '',
      img : '',
      age : '',
      email : '',
      phone : '',
      additionalInfo : '',
      allData : '',
      isLoad : false,

    }

    fetch('https://randomuser.me/api/').then((respone)=>{
      return respone.json();
    }).then((data)=>{
      console.log(data)
      this.setState({
        title: data.results[0].name.title,
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        img : data.results[0].picture.large,
        allData : data,
        isLoad:true
      })
    })

    console.log('constructor is called')
  }

  fetchData = () => {
    this.setState({
      isLoad : false
    })
    fetch('https://randomuser.me/api/').then((respone)=>{
      return respone.json();
    }).then((data)=>{
      
      console.log(data)
      this.setState({
        title: data.results[0].name.title,
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        img : data.results[0].picture.large,
        allData : data,
        age: '',
        email:'',
        phone: '',
        additionalInfo: '',
        isLoad:true
      })
    })
  }

  handleAge = () => {
    // console.log(this.state.allData.results[0].dob.age)
    this.setState({
      additionalInfo : this.state.allData.results[0].dob.age
    })
  }
  handleEmail = () => {
    // console.log(this.state.allData.results[0].dob.age)
    this.setState({
      additionalInfo : this.state.allData.results[0].email
    })
  }
  handlePhone = () => {
    // console.log(this.state.allData.results[0].dob.age)
    this.setState({
      additionalInfo : this.state.allData.results[0].phone
    })
  }

  render(){
    // console.log(this.state.userData.results)
    console.log('render is called')
    return (
      <div id="main">
        {!this.state.isLoad && <h4>Loading</h4>}
        {this.state.isLoad && <div className='container'>
          <div className='block'>
            <img src={this.state.img}/>
            <h3>{this.state.title} {this.state.firstName} {this.state.lastName}</h3>

           <div>
            <button data-attr='age' onClick={this.handleAge}>Age</button>
            <button data-attr='email' onClick={this.handleEmail}>Email</button>
            <button data-attr='phone' onClick={this.handlePhone}>Phone</button>
           </div>
           <button id='getUser' onClick={this.fetchData}>Get User</button>
           <section>
            <h4>Addition info</h4>
            {this.state.additionalInfo}
           </section>
          </div>

          </div>}
      </div>
    )
  }

 
}


export default App;
