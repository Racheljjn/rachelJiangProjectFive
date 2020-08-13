import React from "react";
import Comments from "./Comments";

const Display = (props) => {
  return (
    <section className="restaurant">
     <main className="result">
      <h2>{props.name}</h2>
      <div>
        <img src={props.image} alt={props.alt}></img>
      </div>
    </main>
    

    </section>
  );
};

export default Display;
