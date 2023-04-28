import React from 'react';
import  './navbar.css'

const Navbar=()=>{
    return(
      <>
      <div className="navbar">
        <h3>Logo</h3>
      <button>home</button>
      <a href=" ">About</a>
      < a href=" ">order</a>
     < a href=" ">menu</a>
      <a href=" ">Contact</a>
    </div>
    <div>
   <img  src='https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHJlc29sdXRpb258ZW58MHx8MHx8&w=1000&q=80' alt=' ' />
    </div>
    <div class="centered"><h1>Home</h1></div>
      </>

    );
}

export default Navbar;