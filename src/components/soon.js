import React, { useState } from 'react'

function Soon() { 
  const [email ,setEmail] =useState('');
  const [massage ,setMassage] =useState('');
  const emailValid=(e)=>{
    
    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if(regex.test(email)){
      setMassage('E-mail Submited')
    }else if(!regex.test(email)&&email!==''){
      setMassage('Please Provide A Valid E-mail')
      e.preventDefault()
    }else{
      setMassage('Please Enter You E-mail')
      e.preventDefault()
    }
  }
  const onChange =(e)=>{
    setEmail(e.target.value)
  }
  return (
    <div className='soon-card'>
      <div className='wrapper'>

        
        <h1><span>We're</span> coming soon</h1>
        <p> Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
        <form>
          <input type="text" placeholder='Email Address' onChange={onChange}/>
            <button onClick={emailValid}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671"/></svg></button>
        </form>
          <p className='massage'>{massage}</p>
      </div>

    </div>
  )
}

export default Soon