import React from 'react'

function soon() {
  console.log('first')
  return (
    <div className='soon-card'>
      <div className='wrapper'>

        
        <h1><span>We're</span> coming soon</h1>
        <p> Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.
</p>
<form action="e-mail">
  <input type="text" placeholder='Email Address' />
    <button><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671"/></svg></button>
</form>
<p id='error'></p>
      </div>

    </div>
  )
}

export default soon