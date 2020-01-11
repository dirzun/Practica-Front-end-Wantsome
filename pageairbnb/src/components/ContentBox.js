/*
import React from 'react';
import {render} from 'react-dom';
import fileData from "./fileData.json";

const star = `<i class="fas fa-star"></i>`;

let ContentBox = React.createClass({ render() {return fileData.map((postDetails)=>{
    return (
      <div class="box">
    <div class ="contentBox">
        <div class="imgBox">
            <img src="{postDetails.photo}"></img>
        </div>
        <div class="description">
            <p>{postDetails.type} in {postDetails.city}</p>
            <h2>{postDetails.title}</h2>
            
<span>{star.repeat(postDetails.star)} {postDetails.nrReview} *{postDetails.host}</span>
        </div>
    </div>
</div>

    )


})}
})
export default ContentBox*/