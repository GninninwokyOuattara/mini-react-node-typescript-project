import React from "react";

type Products = { title: string; price: string }[];

interface props {
    children: (products: Products) => React.FC;
}

const Products: React.FC = (props) => {
    return (
        <div className="flex w-100 justify-center mt-5">
            <div className="w-3/5 flex flex-col">{props.children}</div>
        </div>
    );
};

export default Products;
