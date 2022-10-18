import React,{useState} from 'react';
import {useForm} from "react-hook-form";

//Better Errors
//Have control over inputs
//Don't Deal with Events
//Easier inputs

function Forms(props) {
  const {
    register, watch, handleSubmit, formState : {errors},reset
  } = useForm({
    mode: "onChange"
  })
  const onValid = () => {
    console.log('valid')
    reset()
  }
  const onInvalid = (errors) => {
    console.log(errors)
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input {
        ...register("username",
          {
            required : "UserName is required",
            minLength : {
              message : "5글자 이상 되어야됩니다.",
              value : 5
            }
          })}
             type="text" placeholder='UserName' />
      {errors.email?.message}
      <input {
        ...register('email',
          {
            required : "Email is required",
            validate : {
              notGmail : (value) => !value.includes("@gmail.com") || "Gmail은 사용할 수 없습니다."
            }
          })}
             type="email" placeholder="Email"
              className={`${Boolean(errors.email?.message)? " border-red-500":""}`}/>
      <input {
        ...register('password',
          {required : "Password is required",
            minLength : 8
          })}
             type="password" placeholder="Password" />
      <input type="submit" value='Create Account'/>
    </form>
  );
}

export default Forms;