import React, { Component } from 'react';
import './search.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";

class SearchMap extends Component {
  /* mandatory */
  mapHandler = (event) => {
    this.props.onStateClick(event.target.dataset.name)
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  render() {
    return (
      <div className="SearchMap">
        <USAMap customize={this.statesCustomConfig} onClick={this.mapHandler} />
      </div>
    );
  }
}

// export default SearchMap;

// import React from 'react';

// const SearchMap = props => (
//     <div className="us-map">
//         <tr>
//             <td class="righttableBorder" width="100%" valign="top" align = "center" colspan="3">
//                 <div align = "center"><img src="images/USA-Map.gif" alt="Map of USA" border="0" usemap="#USAMap"/></div>
//                 <map name="USAMap" {...props}>										
//                     <area alt="Alaska" shape="poly" coords="41,2,52,37,62,39,69,45,76,47,78,54,71,54,53,41,45,43,41,39,33,46,32,37,27,46,27,51,17,60,4,62,20,52,19,47,11,46,10,42,4,39,8,30,13,30,13,24,9,26,4,20,9,16,13,19,15,19,15,15,10,13,9,9,12,9,17,1,27,1,27,2,30,2" href="SearchResults.asp?lan=EN&search=5&ads=a&state=AK"/>   
//                     <area alt="Hawaii" shape="poly" coords="19,176,24,177,32,182,43,185,46,187,51,189,59,197,61,200,60,206,53,205,49,200,42,191,26,184" href="SearchResults.asp?lan=EN&search=5&ads=a&state=HI"/>
//                     <area alt="Washington" shape="poly" coords="85,50,97,55,97,46,126,56,119,80,93,77,91,74,90,70,83,68,85,59" href="SearchResults.asp?lan=EN&search=5&ads=a&state=WA"/>
//                     <area alt="Oregon" shape="poly" coords="82,69,90,70,93,77,120,80,118,90,117,95,113,112,73,102,72,94,77,88" href="SearchResults.asp?lan=EN&search=5&ads=a&state=OR"/>
//                     <area alt="California" shape="poly" coords="71,102,96,108,91,134,118,171,115,190,99,190,95,181,87,175,80,169,77,154,76,149,73,139,71,136,68,118" href="SearchResults.asp?lan=EN&search=5&ads=a&state=CA"/>
//                     <area alt="Nevada" shape="poly" coords="97,108,130,116,123,163,119,163,117,169,91,132" href="SearchResults.asp?lan=EN&search=5&ads=a&state=NV"/>
//                     <area alt="Idaho" shape="poly" coords="126,56,132,58,129,67,132,80,134,86,138,93,143,96,150,97,148,118,113,112" href="SearchResults.asp?lan=EN&search=5&ads=a&state=ID"/>
//                     <area alt="Utah" shape="poly" coords="130,115,147,118,146,126,157,127,155,160,124,157" href="SearchResults.asp?lan=EN&search=5&ads=a&state=UT"/>
//                     <area alt="Montana" shape="poly" coords="133,57,138,59,158,59,162,61,168,61,170,62,192,63,188,98,150,94,150,96,139,94,132,79,128,67" href="SearchResults.asp?lan=EN&search=5&ads=a&state=MT"/>
//                     <area alt="Wyoming" shape="poly" coords="149,94,188,98,188,127,158,127,146,125" href="SearchResults.asp?lan=EN&search=5&ads=a&state=WY"/>
//                     <area alt="Colorado" shape="poly" coords="158,127,200,129,200,161,155,160" href="SearchResults.asp?lan=EN&search=5&ads=a&state=CO"/>
//                     <area alt="Arizona" shape="poly" coords="124,157,155,161,152,206,145,207,134,206,114,192,118,164,124,163" href="SearchResults.asp?lan=EN&search=5&ads=a&state=AZ"/>
//                     <area alt="New Mexico" shape="poly" coords="156,161,192,162,191,201,168,202,168,204,157,204,158,207,151,206" href="SearchResults.asp?lan=EN&search=5&ads=a&state=NM"/>
//                     <area alt="North Dakota" shape="poly" coords="193,63,224,63,227,72,229,81,229,89,221,88,221,90,189,90" href="SearchResults.asp?lan=EN&search=5&ads=a&state=ND"/>
//                     <area alt="South Dakota" shape="poly" coords="188,91,222,91,221,87,229,90,227,93,231,106,231,119,228,115,222,115,221,112,189,113" href="SearchResults.asp?lan=EN&search=5&ads=a&state=SD"/>
//                     <area alt="Nebraska" shape="poly" coords="187,113,206,112,221,113,222,114,229,116,235,132,236,136,234,137,201,137,201,129,189,128" href="SearchResults.asp?lan=EN&search=5&ads=a&state=NE"/>
//                     <area alt="Kansas" shape="poly" coords="200,137,236,137,243,143,244,162,201,162" href="SearchResults.asp?lan=EN&search=5&ads=a&state=KS"/>
//                     <area alt="Oklahoma" shape="poly" coords="191,162,192,167,212,166,212,181,218,185,230,186,242,186,245,186,245,163" href="SearchResults.asp?lan=EN&search=5&ads=a&state=OK"/>
//                     <area alt="Texas" shape="poly" coords="170,203,171,208,186,226,190,225,194,222,201,221,208,232,214,237,218,245,225,250,229,249,232,252,234,250,230,238,234,230,240,228,248,221,252,218,256,208,250,200,249,192,246,185,225,186,212,181,212,166,192,166,191,200,192,202" href="SearchResults.asp?lan=EN&search=5&ads=a&state=TX"/>
//                     <area alt="Minnesota" shape="poly" coords="225,63,235,61,238,56,242,57,241,64,248,64,259,67,267,68,264,72,256,77,249,88,252,95,250,98,254,100,258,102,259,105,231,107,228,94,229,88,229,79" href="SearchResults.asp?lan=EN&search=5&ads=a&state=MN"/>
//                     <area alt="Iowa" shape="poly" coords="230,108,258,105,262,113,265,115,265,121,262,122,261,132,237,134,231,120" href="SearchResults.asp?lan=EN&search=5&ads=a&state=IA"/>
//                     <area alt="Missouri" shape="poly" coords="235,136,261,132,265,140,270,144,271,152,279,160,275,164,271,163,245,163,243,143" href="SearchResults.asp?lan=EN&search=5&ads=a&state=MO"/>
//                     <area alt="Arkansas" shape="poly" coords="245,161,273,163,275,166,269,185,270,191,269,192,249,192,245,185" href="SearchResults.asp?lan=EN&search=5&ads=a&state=AR"/>
//                     <area alt="Louisiana" shape="poly" coords="248,191,270,192,270,201,267,206,267,209,271,208,278,207,281,212,283,216,284,220,284,221,279,221,275,224,271,220,267,217,260,219,257,217,253,218,256,207,251,199" href="SearchResults.asp?lan=EN&search=5&ads=a&state=LA"/>
//                     <area alt="Michigan" shape="poly" coords="263,81,271,73,273,76,276,76,280,77,290,74,293,76,296,82,297,86,302,87,303,93,302,96,307,94,309,101,307,112,298,115,288,116,288,112,285,103,286,91,289,87,291,90,292,83,294,81,283,83,284,87,281,88,280,93,274,86,270,85,270,82" href="SearchResults.asp?lan=EN&search=5&ads=a&state=MI"/>
//                     <area alt="Wisconsin" shape="poly" coords="255,79,264,83,265,82,279,91,282,92,278,101,281,111,265,115,259,103,250,98,253,95,250,87" href="SearchResults.asp?lan=EN&search=5&ads=a&state=WI"/>
//                     <area alt="Illinois" shape="poly" coords="265,115,281,111,283,123,285,131,285,147,282,152,280,160,271,151,271,147,269,143,260,131,262,122,265,121" href="SearchResults.asp?lan=EN&search=5&ads=a&state=IL"/>
//                     <area alt="Kentucky" shape="poly" coords="282,157,285,147,292,147,298,143,302,134,307,137,313,137,317,139,318,145,321,148,317,152,312,156" href="SearchResults.asp?lan=EN&search=5&ads=a&state=KY"/>
//                     <area alt="Tennessee" shape="poly" coords="278,158,293,158,325,153,322,157,318,159,310,166,307,169,272,175,275,164" href="SearchResults.asp?lan=EN&search=5&ads=a&state=TN"/>
//                     <area alt="Mississippi" shape="poly" coords="272,174,286,173,289,210,282,213,279,206,267,209,268,206,270,200,269,186,269,184" href="SearchResults.asp?lan=EN&search=5&ads=a&state=MS"/>
//                     <area alt="Alabama" shape="poly" coords="287,173,302,170,310,202,305,203,295,206,294,210,289,211" href="SearchResults.asp?lan=EN&search=5&ads=a&state=AL"/>
//                     <area alt="Florida" shape="poly" coords="295,206,312,203,334,201,343,215,347,227,350,236,350,241,348,245,345,247,336,236,336,233,332,233,328,223,326,213,322,212,320,209,317,208,314,211,307,212,303,209" href="SearchResults.asp?lan=EN&search=5&ads=a&state=FL"/>
//                     <area alt="Georgia" shape="poly" coords="302,170,317,167,328,180,336,188,335,194,335,201,310,202" href="SearchResults.asp?lan=EN&search=5&ads=a&state=GA"/>
//                     <area alt="South Carolina" shape="poly" coords="316,166,332,163,341,164,348,168,346,178,338,185,336,188" href="SearchResults.asp?lan=EN&search=5&ads=a&state=SC"/>
//                     <area alt="North Carolina" shape="poly" coords="325,152,360,146,360,152,360,154,359,158,350,168,339,163,327,163,308,168" href="SearchResults.asp?lan=EN&search=5&ads=a&state=NC"/>
//                     <area alt="Virginia" shape="poly" coords="344,125,332,135,333,141,316,154,360,145,358,139,356,140,351,131" href="SearchResults.asp?lan=EN&search=5&ads=a&state=VA"/>
//                     <area alt="Washington, DC" shape="poly" coords="337,119,336,122,331,122,335,125,332,129,337,127,341,129,340,125,344,122" href="SearchResults.asp?lan=EN&search=5&ads=a&state=DC"/>
//                     <area alt="West Virginia" shape="poly" coords="316,135,323,127,333,124,336,128,337,130,333,133,334,141,322,149" href="SearchResults.asp?lan=EN&search=5&ads=a&state=WV"/>
//                     <area alt="Indiana" shape="poly" coords="283,118,299,115,302,135,298,144,292,146,285,146" href="SearchResults.asp?lan=EN&search=5&ads=a&state=IN"/>
//                     <area alt="Ohio" shape="poly" coords="300,117,307,112,315,114,322,107,326,124,319,130,316,136,311,137,302,133" href="SearchResults.asp?lan=EN&search=5&ads=a&state=OH"/>
//                     <area alt="Maryland" shape="poly" coords="340,122,353,119,356,125,359,131,358,137,354,132,351,129,347,126" href="SearchResults.asp?lan=EN&search=5&ads=a&state=MD"/>
//                     <area alt="Delaware" shape="poly" coords="352,119,359,130,360,124" href="SearchResults.asp?lan=EN&search=5&ads=a&state=DE"/>
//                     <area alt="New Jersey" shape="poly" coords="357,102,362,109,362,114,361,122,359,122,355,117,357,113" href="SearchResults.asp?lan=EN&search=5&ads=a&state=NJ"/>
//                     <area alt="Pennsylvania" shape="poly" coords="322,107,327,104,329,106,353,100,357,105,358,114,348,120,327,124" href="SearchResults.asp?lan=EN&search=5&ads=a&state=PA"/>
//                     <area alt="New York" shape="poly" coords="338,92,341,88,341,81,344,76,354,72,358,82,361,90,362,99,363,104,368,101,362,107,355,101,351,100,327,105,325,105,329,99,328,95,330,91" href="SearchResults.asp?lan=EN&search=5&ads=a&state=NY"/>
//                     <area alt="Connecticut" shape="poly" coords="362,96,369,94,370,99,363,102" href="SearchResults.asp?lan=EN&search=5&ads=a&state=CT"/>
//                     <area alt="Rhode Island" shape="poly" coords="370,94,370,98,374,98" href="SearchResults.asp?lan=EN&search=5&ads=a&state=RI"/>
//                     <area alt="Vermont" shape="poly" coords="355,71,363,67,364,73,362,80,365,87,360,89" href="SearchResults.asp?lan=EN&search=5&ads=a&state=VT"/>
//                     <area alt="New Hampshire" shape="poly" coords="365,66,372,80,372,86,365,87,363,80,363,74" href="SearchResults.asp?lan=EN&search=5&ads=a&state=NH"/>
//                     <area alt="Maine" shape="poly" coords="372,44,375,46,377,43,383,46,388,56,389,60,386,66,379,69,378,73,373,78,365,67,369,59" href="SearchResults.asp?lan=EN&search=5&ads=a&state=ME"/>
//                     <area alt="Massachusetts" shape="poly" coords="361,88,374,86,375,88,378,90,377,94,374,96,373,92,363,95" href="SearchResults.asp?lan=EN&search=5&ads=a&state=MA"/>
//                     <area alt="New Hampshire" shape="circle" coords="344,49,9" href="SearchResults.asp?lan=EN&search=5&ads=a&state=NH"/>
//                     <area alt="Vermont" shape="circle" coords="322,68,10" href="SearchResults.asp?lan=EN&search=5&ads=a&state=VT"/>
//                     <area alt="Massachusetts" shape="circle" coords="407,51,9" href="SearchResults.asp?lan=EN&search=5&ads=a&state=MA"/>
//                     <area alt="Rhode Island" shape="circle" coords="407,75,9" href="SearchResults.asp?lan=EN&search=5&ads=a&state=RI"/>
//                     <area alt="Connecticut" shape="circle" coords="406,98,9" href="SearchResults.asp?lan=EN&search=5&ads=a&state=CT"/>							
//                     <area alt="New Jersey" shape="circle" coords="408,122,10" href="SearchResults.asp?lan=EN&search=5&ads=a&state=NJ"/>
//                     <area alt="Delaware" shape="circle" coords="408,145,9" href="SearchResults.asp?lan=EN&search=5&ads=a&state=DE"/>
//                     <area alt="Maryland" shape="circle" coords="408,168,10" href="SearchResults.asp?lan=EN&search=5&ads=a&state=MD"/>
//                     <area alt="Washington, DC" shape="circle" coords="407,190,8" href="SearchResults.asp?lan=EN&search=5&ads=a&state=DC"/>
//                 </map>	
//             </td>
//         </tr>
//     </div>
// )
export default SearchMap;