import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";

// Create BrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Nav />
      </>
    )
  },
  {
    path: "/about",
    element: (
      <>
        <About />
        <Nav />
      </>
    )
  },
  {
    path: "/contact",
    element: (
      <>
        <Contact />
        <Nav />
      </>
    )
  },
  {
    path: "/experience",
    element: (
      <>
        <Experience />
        <Nav />
      </>
    )
  },
  {
    path: "/portfolio",
    element: (
      <>
        <Portfolio />
        <Nav />
      </>
    )
  }
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </RouterProvider>
  );
}

export default App;
