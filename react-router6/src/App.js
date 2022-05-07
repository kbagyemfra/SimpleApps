import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          {/* Regular routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="test"
            element={
              <div>
                <h1>Hello World!</h1>
              </div>
            }
          />
          {/* Redirecting navigation */}
          <Route path="/redirect" element={<Navigate to="/about" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// {/* OLD WAY of React Router for v5 */}
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/products/:id">
//             <ProductDetails />
//           </Route>
//           <Route path="/products">
//             <Products />
//           </Route>
//         </Switch>
// {/* OLD WAY of React Router for v5 */}

// *********** NEW WAY w/ v6 ***********
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="/products" element={<Products />} />
//         <Route
//           path="test"
//           element={
//             <div>
//               <h1>Hello World!</h1>
//             </div>
//           }
//         />
//         </Routes>
// *********** NEW WAY w/ v6 ***********
