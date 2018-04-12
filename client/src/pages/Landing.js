import React from "react";
import Jumbo from "../components/Jumbotron";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Results from "../components/Results";
import Services from "../components/Services";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Landing = () => {
return (
<div>
<Jumbo />
<Results />
<Services />
<Divider />
<Footer />
<Login />
<Signup />
</div>

)
}

export default Landing;