import React from "react";
import Jumbo from "../components/Jumbotron";
import Divider from "../components/Divider";
import Results from "../components/Results";
import Services from "../components/Services";
// import Login from "../components/Login";
// import Signup from "../components/Signup";
<<<<<<< HEAD
// import SearchComponent from "../components/Search";
import Navbar from "../components/Navbar";
=======
import SearchComponent from "../components/Search";
>>>>>>> fbcaf8d89bce25007e91e7706994a1ba09c25048

const Landing = () => {
return (
<div>
<Jumbo />
{/* <SearchComponent/> */}
<Results />
<Services />
<Divider />
{/* <Login />
<Signup /> */}
</div>

)
}

export default Landing;