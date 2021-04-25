import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./index.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import axios, { AxiosResponse } from "axios";

type Products = { title: string; price: string }[] | [];

interface Data {
    PRODUCTS: Products;
}

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [Products, setProducts] = useState<Products>([]);

    //Product Fetching
    useEffect(() => {
        const fetchProduct = async () => {
            let res = await axios.get<Data>("http://localhost:5000/products");
            console.log(res);
            setProducts(() => [...res.data.PRODUCTS]);
            setIsLoading(() => false);
        };

        fetchProduct();
    }, []);

    return (
        <React.Fragment>
            <div className="App">
                <Navbar>
                    <Form />
                </Navbar>
            </div>
            {isLoading && (
                <h1 className="text-ls font-bold text-center mt-5">
                    Loading...
                </h1>
            )}

            {/* Fetching ended but returned empty */}
            {!isLoading && Products === [] && (
                <h1 className="text-sm text-center mt-5">
                    Could not find any products. Maybe create one ?
                </h1>
            )}

            {/* Fetch successfully completed with data returned */}

            {!isLoading && Products !== [] && (
                <h1 className="text-ls font-bold text-center mt-5">
                    Data Found
                </h1>
            )}
        </React.Fragment>
    );
}

export default App;
