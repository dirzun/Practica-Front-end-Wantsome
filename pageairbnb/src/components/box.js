import React from "react";
import ItemBox from "./parts/itemBox.js";

const Box = props => {
  return (
    <div className="content">
      <h1>Homes around the world</h1>
      {props.fileData.map(postDetails => {
        return <ItemBox postDetails={postDetails} />;
      })}
    </div>
  );
};

export default Box;
