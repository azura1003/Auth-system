import React from 'react'

function Register() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Inscription</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor="name"><strong>Nom</strong></label>
                    <input type="text" placeholder='Entrez votre nom' name='nom'
                    className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Entrez votre email' name='email'
                    className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Entrez votre mot de pass' name='password'
                    className='form-control rounded-0'/>
                </div>
                <button type='subtmit' className='btn btn-success w-100 rounded-0'>Inscription!</button>
                <p>vous acceptez nous conditions et nos termes</p>
                <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'/>
            </form>






        </div>







    </div>
  )
}

export default Register
