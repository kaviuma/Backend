import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Nav";
import AccordionExample from "./Pages/Manage";
import Home from "./Pages/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/manage-employee" element={<AccordionExample/>}></Route>
        <Route path="/manage-employee/:id" element={<AccordionExample />} />
        <Route path="/contact" element={<h1 className="text-center mt-5">Contact Us Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;


























// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import NAVBAR from "./Components/Nav1";
// import Manage1 from "./Pages/Manage1";



// function App(){
//     return(
//         <BrowserRouter>
//        < NAVBAR/>
//        <Routes>
//         <Route path="/" element={<h1>Hello</h1>}>Helllo</Route>
//         <Route path="/manage" element={<Manage1/>}/>
//        </Routes>
        
        
//         </BrowserRouter>
//     )
// }

// export default App;



// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Home() {
//   return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis eum error natus quae incidunt similique tempore dignissimos cupiditate sit ex, illum vero quis eius laborum velit aliquam alias autem?</p>;
// }

// function About() {
//   return <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed libero error similique ab nulla odit molestiae quo consectetur id reiciendis, earum alias ducimus voluptate perferendis harum adipisci praesentium quasi magnam!</h2>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navbar */}
//       <nav>
//         <Link to="/">Home</Link> | 
//         <Link to="/about">About</Link>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
    