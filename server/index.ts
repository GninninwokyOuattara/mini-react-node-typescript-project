import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Products } from "./types/products";

let PRODUCTS: Products = [];

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/products", async (req, res) => {
    res.status(200).json({ PRODUCTS });
});

app.post("/products", async (req, res) => {
    console.log(req.body);
    PRODUCTS = [...PRODUCTS, req.body];
    res.status(201).json({ PRODUCTS });
});

app.get("*", async (req, res) => {
    res.status(404).send("Not Found");
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
