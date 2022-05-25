import React, { Component } from 'react'
import movies from './543050.jpg'
import './App.css';

export default class Showb extends Component {
    state ={
      
        fullName : "adem laarif",
        bio :'MY bio',
        imgSrc : <img style={{width : 600, height : 300}} className='animei' src={movies} alt="anime" />, 
         profession : 'Student' ,
   };
  render() {
    return (
      <div className="hamberger">
         <h1 style={{color : 'red'}}>my name is {this.state.fullName} </h1>  
         <h1 style={{color : 'green'}}>my bio is {this.state.bio}</h1>  
          {this.state.imgSrc} 
         <h1 style={{color : 'blue'}}> my profession is "{this.state.profession}"</h1> 
      </div>
     
    )
  }
}