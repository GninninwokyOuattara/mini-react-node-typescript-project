import React from "react";

interface props {
    bookData: {
        title: string;
        price: string;
    };
}

const SingleProduct: React.FC<props> = ({ bookData }) => {
    return (
        <div className="w-100 h-24 shadow-md rounded-md p-5 mb-5 flex flex-col">
            <h1 className="text-lg font-bold">{bookData.title}</h1>
            <p>Price : ${bookData.price}</p>
        </div>
    );
};

export default SingleProduct;
