import React from "react";

const Form =(props)=>{
  
  return (
    <form onSubmit={props.getweather}>
      <input type="text"   name="city"  placeholder="City.."></input>
      <input type="text"   name="country" placeholder="country.."></input>
      <button>GEt Weather</button>
    </form>
  );
};

export default Form;
