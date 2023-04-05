import React, {useRef, useEffect}from 'react'

export default function Login() {
    const nameInputRef = useRef();
    const emailInputRef = useRef();

    function getText(){
        // const inputName = document.getElementById('name')
        // const inputEmail = document.getElementById('email')
        // console.log(inputName.value,inputEmail.value);
        console.log(nameInputRef.current.value,emailInputRef);
     }
   //   useEffect(()=>{
   //      nameInputRef.current.focus()
   //      setInterval(()=>{
   //      nameInputRef.current.style.background = 'red';
   //      },2000)
   //      return ()=>{}
   //   },[nameInputRef])


  return (
    <div className='login-container'>
    <header>Login</header>
    <div className='input-field'>
   <input type='text' placeholder='Enter Name' id='name' ref={nameInputRef}/>
   <input type='email' placeholder='Enter E-mail' id='email' ref={emailInputRef}/>
   <button onClick={getText} type='submit'>Submit</button>
    </div>
    </div>
  )
}
