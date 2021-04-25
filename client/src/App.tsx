import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./index.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import { default as ProductsWrapper } from "./Components/Products";
import SingleProduct from "./Components/SingleProduct";
import axios, { AxiosResponse } from "axios";

interface Product {
    title: string;
    price: string;
}

type Products = Product[] | [];

interface Data {
    PRODUCTS: Products;
}

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<Products>([]);

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
                    <Form products={products} setProducts={setProducts} />
                </Navbar>
            </div>
            {isLoading && (
                <p className="text-ls font-bold text-center mt-5">Loading...</p>
            )}

            {/* Fetching ended but returned empty */}

            {!isLoading ? (
                products.length == 0 ? (
                    <p className="text-sm text-center mt-5">
                        Could not find any products. Maybe create one ?
                    </p>
                ) : null
            ) : null}

            {/* Fetch successfully completed with data returned */}

            {!isLoading ? (
                products.length ? (
                    <ProductsWrapper>
                        {products.map((product: Product, index: number) => (
                            <SingleProduct bookData={product} key={index} />
                        ))}
                    </ProductsWrapper>
                ) : null
            ) : null}
        </React.Fragment>
    );
}

export default App;
