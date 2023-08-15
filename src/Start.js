import React from "react";
import {Link} from "react-router-dom";
import './App.css';



const Start=()=>{
    return(
      
    <div> 
         <div>
    <div className="Start"></div>
    <div className="container">
      <h1 className="frontPage">
        Welcome to the Trivia Challenges!
      </h1>
      <p className="text1">You will presented with 10 True or False questions.</p>
      <p className="text2">Can you score 100%?.</p>     
      <button>
          <Link to="/Questions">Begin</Link>
        </button>
    
    </div>
  
        
      </div>
      </div>
    );
  };



  


export default Start;