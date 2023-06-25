import React, { useState } from 'react'
import userData, { addUser } from './UserData';
import { useNavigate } from 'react-router-dom'

const Registeration = () => {
    const [email,setEmail]=useState('')

    const [pass,setPass]=useState('')
    const [number,setnumber]=useState('')
    const [city,setcity]=useState('')
    const [error,seterror]=useState('');

    const nav=useNavigate();
    const handleSubmit=()=>{
        if(!email||!pass||!number||!city){
            seterror('Enter all details');
            return;
        }
        
        const newUser = {email,pass,number,city};
        addUser(newUser);

        console.log(JSON.stringify(userData));

        setEmail('');
        setPass('');
        setcity('');
        setnumber('');

        nav('/login')
        
    }


  return (

    <div>
      <form className="row g-3">

        {error && <div>{error}</div>}
        
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">
      Email
    </label>
    <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(event)=>setEmail(event.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">
      Password
    </label>
    <input type="password" className="form-control" id="inputPassword4" value={pass} onChange={(event)=>setPass(event.target.value)}/>
  </div>
  
 
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">
      City
    </label>
    <input type="text" className="form-control" id="inputCity" value={city} onChange={(event)=>setcity(event.target.value)}/>
  </div>
  
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">
      Phone no.
    </label>
    <input type="text" className="form-control" id="inputZip" value={number} onChange={(event)=>setnumber(event.target.value)}/>
  </div>
  
  <div className="col-12">
    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
      Sign in
    </button>
  </div>
</form>

    </div>
  )
}

export default Registeration
