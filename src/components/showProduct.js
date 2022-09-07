import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai"
import { BsPencilSquare } from "react-icons/bs"
import { MdDeleteOutline } from "react-icons/md"


function ShowProduct() {
    const cart = [];
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        await axios.get(`http://127.0.0.1:8000/api/products`)
            .then((response) => {
                // console.log(response);
                setProducts(response.data.data)
            })
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/products/${ id }`)
            .then(({ data }) => {
                // console.log(data.message);
                fetchProducts();
            }).catch(({ resp: { data } }) => {
                console.log(data.message);
            })
    }

    // const addToCart = async (id) => {
    //     console.log(id)
    //     await axios.get(`http://127.0.0.1:8000/api/products/${ id }`)
    //         .then(({ data }) => {
    //             fetchProducts();
    //             cart.push(data)
    //             console.log(cart);
    //         }).catch(({ response: { data } }) => {
    //             console.log(data.message);
    //         })
    // }


    // console.log(products);


    return (

        <div className=" flex flex-col  ">

            <div className="flex justify-end mt-3 mr-2 ">
                <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 no-underline" to={"/product/create"}>Create</Link>
            </div>
            <div className="flex border border-gray-500 bg-white  ml-20 mr-20 mt-10 item-center relative mb-20">
                <table className="  table-auto md:table-fixed ml-10  mr-10 mt-10  divide-y w-[980px] ">
                    <thead>
                        <tr  >
                            <th className="mb-10 " >Title</th>
                            <th >Description</th>
                            <th className="pl-14" >Image</th>
                            <th className="pl-24" >Edit</th>
                            <th className="pl-20" >Delete</th>
                            {/* <th >Add</th> */}


                        </tr>
                    </thead>
                    <tbody className=" divide-y">
                        {
                            products.length > 0 && (
                                products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.title}</td>
                                        <td>{product.description}</td>
                                        <td className="pl-10">
                                            <img className="h-[90px] w-[90px] mt-2 mb-2" src={`http://127.0.0.1:8000/storage/product/image/${ product.image }`} />
                                        </td>
                                        <td className="pl-24">
                                            <Link className="   text-black text-xl " to={`/product/edit/${ product.id }`}><BsPencilSquare /></Link>
                                        </td>
                                        <td className="pl-24  ">
                                            <button type="submit" className="text-xl   " onClick={() => deleteProduct(product.id)}><MdDeleteOutline /></button>
                                        </td>
                                        {/* <td>
                                            <button type="submit" className=" text-black text-xl " onClick={() => addToCart(product.id)} ><AiOutlinePlusSquare /></button>
                                        </td> */}




                                    </tr>
                                ))
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div >

    )

}

export default ShowProduct;

