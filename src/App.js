import React, { Fragment, useEffect,useState } from 'react';
import Navbar from './components/layout/Navbar';


import Alert from './components/layout/Alert';
import {BrowserRouter as Router, Switch ,useLocation ,Route} from 'react-router-dom'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'



import './App.css';
import About from './components/pages/About'
import User from './components/users/User'
import Home from './components/pages/Home'
import NotFound from './components/pages/Notfound'

const App = ()=>  {

const [EndPoint,setEndPoint] = useState(null);

  useEffect(()=>{
    // get the url path
  
    
  },[])

   
    return(
     <GithubState>
       <AlertState>
     <Router>
     <div className="App">
     <Navbar/>
     <div className="container">
       <Alert/>

       <Switch>
         <Route  exact path='/' component={Home} />
        <Route exact path='/about' component={About}/>
        <Route exact path='/user/:login' component={User}/>
        <Route component={NotFound} />
       </Switch>


     </div>
     {/*  */}
     
     </div>

     </Router>
     </AlertState>
     </GithubState>
   );
  
}

export default App;
