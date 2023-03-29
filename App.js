import React from "react";
import ReactDOM from "react-dom/client";
import Title from "./Components/Title";
import Nav from "./Components/Nav";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "My Name is Parth Sharma This is my first Heading"
// );

const HeaderComponent =()=>{
  return(
    <div className="header">
      <Title/>
   
     <Nav/>
    
    </div>
  );
};
const AppLayout=()=>{
  return(
    <> 
    <HeaderComponent/>
    <img src="" alt="" />
    <Body/>

    <Footer/>
    </>
  );
};

// const AppLayout=()=>{
//   return(
//     <Body/>
//   );
// };
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout/>);

