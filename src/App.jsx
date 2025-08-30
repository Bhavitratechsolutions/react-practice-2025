import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router";
import About from "./page/About";
import Contact from "./page/Contact";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./components/Home";
import PageNotFound from "./page/PageNotFound";
import Services from "./page/Service";
import UseEffect from './components/hooks/use-effect'
import UseState from "./components/hooks/use-state";

function App() {


  return (
    <>
      {/* Navbar */}
      <Routes>
        {/* Public Layout (Header + Footer) */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />   {/* ✅ default route */}
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Services />} />
           <Route path="use-effect" element={<UseEffect />} />
           <Route path="use-state" element={<UseState />} />
           <Route  path='/*' Component={PageNotFound}/>
        </Route>
      </Routes>



      {/* cart */}


      {/* Footer */}

    </>
  );
}

export default App;
