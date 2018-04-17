import React from "react";
import Jumbo from "../components/Jumbotron";
import Divider from "../components/Divider";
import Results from "../components/Results";
import Services from "../components/Services";
// import Login from "../components/Login";
// import Signup from "../components/Signup";
import SearchComponent from "../components/Search";

const Landing = () => {
return (
<div>
<Jumbo />
<SearchComponent/>
<Results />
<Services />
<Divider />
{/* <Login />
<Signup /> */}
</div>

)
}

export default Landing;