import React from "react";
import NavBar from "./components/navBar";
import CarouselHome from "./pages/carouselHome";
import Blog from "./pages/blog";
import SobreNos from "./pages/sobreNos";

function App() {
  return (
    <div className="App">
      <NavBar />
    <CarouselHome />
    <SobreNos />
    <Blog />
    </div>
  );
}

export default App;
