import React from "react";
import NavBar from "./components/navBar";
import CarouselHome from "./pages/carouselHome";
import Blog from "./pages/blog";

function App() {
  return (
    <div className="App">
      <NavBar />
    <CarouselHome />
    <Blog />
    </div>
  );
}

export default App;
