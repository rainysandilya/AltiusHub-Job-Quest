import React from 'react'
import {useForm} from 'react-hook-form'
function Login() {
  let {register,
  handleSubmit,
formState:{errors}}=useForm()
let addNewUser=(newUser)=>{
  console.log(newUser)
}
  return (
    <div>
      <p className='display-4 text-center'>Login</p>
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
            <button type="submit" className='btn btn-info bb'>Login</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login