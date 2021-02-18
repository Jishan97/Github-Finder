import React,{Fragment,useEffect} from 'react'
import Search from '../users/Search';
import Users from '../users/Users';
import {BrowserRouter as Router, Switch ,useLocation ,Route} from 'react-router-dom'

 const Home = () => {
    function categorize(pathname){
        if (pathname.includes('localhost' || 'dev')){
          return 'lan';
        }
        if (pathname.includes('http://community.synkd.life')){
          return 'live';
        }
      }

      
    useEffect(()=>{
        const pathname = window.location.href;
        let filteredPath = categorize(pathname);

        var category = categorize(pathname);

      switch (category) {
        case 'lan':
          console.log('set the api to lan');
          break;
        case 'live':
          console.log('set to live api');
          break;
        default:
            // set to some default api
          console.log('category undefined');    
      }
      },[])
    
   
    
    return (
        
        <Fragment>
            <Search/>
              <Users/>
        </Fragment>
    )
}

export default Home