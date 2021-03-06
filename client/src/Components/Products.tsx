import React from "react";

type Product = { title: string; price: string };

type func = (product: Product, index: number) => React.FC;
interface props {
    children: React.ReactNode;
}

const Products: React.FC<props> = (props) => {
    console.log(props);

    return (
        <div className="flex w-100 justify-center mt-5">
            <div className="w-3/5 flex flex-col">{props.children}</div>
        </div>
    );
};

export default Products;
