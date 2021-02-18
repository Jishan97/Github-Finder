import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext'

 const User =({match})=> {

    const githubContext = useContext(GithubContext)
     
    const {getUser,loading,user,repos,getUserRepos} = githubContext

    useEffect(()=>{
        getUser(match.params.login)
        getUserRepos(match.params.login)
        // eslint-disable-next-line
    },[]);

    


    
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company

        } = user

     

        if(loading){
            return <Spinner/>
        }
        return (
            <Fragment>
                <Link to="/" className="btn btn-light">
                    Back to Search
                </Link>
 

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" 
                        alt="" style={{width:'150px'}} />
                <h1>{name}</h1>
                <p>Location:{location}</p>
                    
                    </div>

                    <div>
                        {bio && <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                             </Fragment>}
                             <a href={html_url} className="btn btn-dark my-1">
                                 Visit
                             </a>

                             <ul>
                                 <li>
                                     {login && <Fragment>
                                         <strong>Username:</strong> {login}
                                     </Fragment>}
                                 </li>
                                 <li>
                                     {company && <Fragment>
                                         <strong>Company:</strong> {company}
                                     </Fragment>}
                                 </li>
                                 <li>
                                     {blog && <Fragment>
                                         <strong>Webisite:</strong> {blog}
                                     </Fragment>}
                                 </li>
                             </ul>
                    </div>

                </div>

                <div className="card text-center">
                <div className="badge badge-primary">
                    followers: {followers}
                </div>
                <div className="badge badge-success">
                    following: {following}
                </div>
                <div className="badge badge-light">
                    public_repos: {public_repos}
                </div>
                <div className="badge badge-dark">
                    public_gists: {public_gists}
                </div>
                </div>

                <Repos repos={repos} />

                </Fragment>
        )
    
}

export default User
