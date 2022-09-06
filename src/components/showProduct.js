import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ShowProduct() {

    const [products, setProducts] = useState([])


    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        await axios.get(`http://127.0.0.1:8000/api/products`)
            .then((response) => {
                console.log(response);
                setProducts(response.data.data)
            })
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/products/${ id }`)
            .then(({ data }) => {
                console.log(data.message);
                fetchProducts();
            }).catch(({ resp: { data } }) => {
                console.log(data.message);
            })
    }


    // console.log(products);


    return (

        <div className="container">
            <div className=" row ">
                <div className="col-12 ">
                    <Link className="btn btn-primary mb-2 float-end" to={"/product/create"}>Create</Link>
                    <div className="col-12">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.length > 0 && (
                                        products.map((product) => (
                                            <tr key={product.id}>
                                                <td>{product.title}</td>
                                                <td>{product.description}</td>
                                                <td>
                                                    <img width="100px" height="70px" src={`http://127.0.0.1:8000/storage/product/image/${ product.image }`} />
                                                </td>
                                                <td>
                                                    <Link className="btn btn-success " to={`/product/edit/${ product.id }`}>Edit</Link>
                                                </td>
                                                <td>
                                                    <button type="submit" className="btn btn-danger " onClick={() => deleteProduct(product.id)}>Delete</button>
                                                </td>

                                            </tr>
                                        ))
                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>

    )

}

export default ShowProduct;