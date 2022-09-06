import * as React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import EditProduct from "./components/editProduct"
import CreateProduct from "./components/createProduct"
import ShowProduct from "./components/showProduct"



function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>Product</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">

              </li>

            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route>
          <Route path="/product/create" element={<CreateProduct />}></Route>
          <Route path="/product/edit/:id" element={<EditProduct />}></Route>
          <Route path="/" element={<ShowProduct />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
