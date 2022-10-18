import React,{useState} from 'react';
import {useForm} from "react-hook-form";

// Less code,
// better Validation
//Better Errors
//Have control over inputs
//Don't Deal with Events
//Easier inputs

function Forms(props) {
  const {register, watch} = useForm()


  return (
    <form >
      <input {...register("username")} type="text" placeholder='UserName' required/>
      <input {...register('email')}  type="email" placeholder="Email" required/>
      <input {...register('password')} type="password" placeholder="Password" required/>
      <input type="submit" value='Create Account'/>
    </form>
  );
}

export default Forms;