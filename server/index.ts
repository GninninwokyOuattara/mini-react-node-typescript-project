import express from "express";
import cors from "cors";
import { Products } from "./types/products";

let PRODUCTS: Products = [];

const app = express();
app.use(cors());

app.get("/products", (req, res) => {
    res.status(200).json({ PRODUCTS });
});

app.post("/products", (req, res) => {
    PRODUCTS = [...PRODUCTS, { title: "Book", price: "$99" }];
    res.status(201).json({ PRODUCTS });
});

app.get("*", (req, res) => {
    res.status(404).send("Not Found");
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
