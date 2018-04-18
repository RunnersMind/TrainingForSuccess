import React from "react";
import Jumbo from "../components/Jumbotron";
import Divider from "../components/Divider";
import Results from "../components/Results";
import Services from "../components/Services";
import SearchComponent from "../components/Search";

const Landing = () => {
	return (
		<div>
			<Jumbo />
			<SearchComponent/>
			<Services />
			<Divider />
		</div>
	)
}

export default Landing;