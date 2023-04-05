import React from 'react';
import {Link} from 'react-router-dom';

export default function StartingForm() {
  return (
    <div className="zen-header-nav ">
        <h3>Welcome</h3>
        <div className="zen-header-nav-menu">
          <p>New User?</p>
          <Link to="/main/create">
            <p className="zen-sub-link">Create New Account</p>
          </Link>
          <p>Already You have a Account?</p>
          <Link to="/main/login">
            <p className="zen-sub-link">Log-in</p>
          </Link>
          </div>
          {/* <div className="greet-image">
            <img src="https://t4.ftcdn.net/jpg/02/99/06/99/360_F_299069957_9FfNrl3vi6yDSnvEgL6xXRVSYVb0PKkO.jpg"></img>
          </div> */}
        
      </div>
  )
}
