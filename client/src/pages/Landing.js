import React from "react";
import Jumbo from "../components/Jumbotron";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Results from "../components/Results";
import Services from "../components/Services";

const Landing = () => {
return (
<div>
<Jumbo />
<Results />
<Services />
<Divider />
<Footer />
</div>

)
}

export default Landing;