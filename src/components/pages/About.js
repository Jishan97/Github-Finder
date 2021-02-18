import React,{useEffect,useState} from 'react'



 const About = () => {
    useEffect(()=>{
        const pathname = window.location.href ;
        console.log(pathname)
        if(pathname.match('about')){
            console.log('its about page')
          }
      },[])
    return (
        <div>
            <h1>About</h1>
            <p>Version 1.0.0</p>
        </div>
    )
}

export default About