import * as React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import EditProduct from "./components/editProduct"
import CreateProduct from "./components/createProduct"
import ShowProduct from "./components/showProduct"
import { FaShoppingCart } from "react-icons/fa"




function App() {
  return (
    <Router>

      <nav className="flex h-20 px-5 bg-slate-300 border-gray-400 item-center">
        <div className="mt-8">
          <Link className="text-center text-2xl text-black font-bold pt-10 no-underline" to={"/"}>Product</Link>
        </div>

        <div className=' text-2xl text-black font-bold pt-10 translate-x-[200px] md:translate-x-[600px] lg:translate-x-[800px]  ' >
          <FaShoppingCart />
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
