import React, { Component } from 'react';
import './App.css';
import fileData from "./fileData.json";
//import star from "./components/star-24px.svg";
//import ContentBox from "./components/ContentBox.js"
import Stars from "./components/stars.js"

const starss =<Stars />;
const repeat = (x,y)=>x.repeat(y);
const App = () => {

    return (
      <div className="App">
        <section>
          
        <h1>Homes around the world</h1>
        <div class="content">
          
          {fileData.map((postDetails)=>{
            return (
              <div class="box">
            <div class ="contentBox">
                <div class="imgBox">
                    <img src="{postDetails.photo}"></img>
                </div>
                <div class="description">
                    <p>{postDetails.type} in {postDetails.city}</p>
                    <h2>{postDetails.title}</h2>
                    
    <span>
            {repeat(starss,postDetails.star)} {postDetails.nrReview} *{postDetails.host}</span>
                </div>
            </div>
        </div>

            )


})}

        </div>

        </section>
      </div>
    );

}
export default App;
