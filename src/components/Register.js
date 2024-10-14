import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react';
function Register() {
  //error state
  let [error,setError]=useState("");
  let {register,
  handleSubmit,
  formState:{errors}}=useForm()
  let addNewUser=(nUser)=>{
     console.log(nUser)
 
  }    
return (
    <div>
      <p className='display-4 text-center'>Add New User</p>
      {/*Responsive form*/}
      <div className='row'>
        <div className='col-11 col-sm-8 col-md-6 mx-auto'>
          <form onSubmit={handleSubmit(addNewUser)}>
            {/*name*/}
            <div className='mb-3'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' className='form-control'
               {...register("name",{required:true})}/>
            </div>
            {/*validation rules*/}
            {errors.name?.type==="required" &&<p className='text-danger'>*name is required</p>}
            {/*Password*/}
            <div className='mb-3'>
              <label htmlFor='password'>password</label>
              <input type='password' id='password' className='form-control'
               {...register("password",{required:true})}/>
            </div>
              {/*validation rules*/}
              {errors.password?.type==="required" &&<p className='text-danger'>*password is required</p>}
            {/*email*/}
            <div className='mb-3'>
              <label htmlFor='email'>email</label>
              <input type='email' id='email' className='form-control'
               {...register("email",{required:true})}/>
            </div>
              {/*validation rules*/}
              {errors.email?.type==="required" &&<p className='text-danger'>*email is required</p>}
            {/*dob*/}
            <div className='mb-3'>
              <label htmlFor='dob'>dob</label>
              <input type='date' id='dob' className='form-control'
               {...register("dob",{required:true})}/>
            </div>
              {/*validation rules*/}
              {errors.dob?.type==="required" &&<p className='text-danger'>*dob is required</p>}
            {/*image*/}
          
              
            <button type="submit" className='btn btn-info bb'>Register</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Register