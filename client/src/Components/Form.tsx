import React, { useState } from "react";
import axios from "axios";
import isValidInput from "../utils/validation";

interface Product {
    title: string;
    price: string;
}

type Products = Product[] | [];

interface props<T> {
    setProducts: React.Dispatch<React.SetStateAction<T>>;
    products: Products;
}

const Form: React.FC<props<Products>> = ({ products, setProducts }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        console.log(isValidInput(price));

        if (!isValidInput(price)) {
            return alert("Invalid Input");
        }

        let res = await axios({
            method: "post",
            headers: {
                "access-control-allow-origin": "*",
                "Content-type": "application/json; charset=utf-8",
            },
            url: "http://localhost:5000/products/",
            data: { title: title, price: price },
        });

        // let res = await fetch("http://localhost:5000/products", {
        //     method: "POST",
        //     headers: {
        //         "access-control-allow-origin": "*",
        //         "Content-type": "application/json; charset=utf-8",
        //     },
        //     body: JSON.stringify({ title, price }),
        // });
        if (res.status == 201) {
            setProducts((products) => [...products, { title, price }]);
        }

        setTitle((title) => "");
        setPrice((price) => "");

        console.log(res);
    };

    return (
        <div className="flex  w-100 justify-center">
            <form
                action=""
                method="post"
                className="shadow-lg rounded-md w-3/5 h-56 px-5 pt-6 pb-3 flex flex-col"
                onSubmit={handleSubmit}
            >
                <h1 className="font-bold text-lg">Add a New Product</h1>
                <h3 className="font-bold">Title</h3>
                <input
                    type="text"
                    name="title"
                    className="border border-gray-400 w-full pl-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <h3 className="font-bold">Price</h3>
                <input
                    type="text"
                    name="price"
                    className="border border-gray-400 w-full pl-2"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-blue-700 text-white w-52 h-8 mt-auto"
                >
                    ADD PRODUCT
                </button>
            </form>
        </div>
    );
};

export default Form;
