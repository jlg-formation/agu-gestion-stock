import express from "express";
import { Article } from "./interfaces/article";

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 3.99, qty: 124 },
  { id: "a2", name: "Pelle", price: 5, qty: 45 },
];

const app = express.Router();

app.get("/date", (req, res) => {
  res.json({ date: new Date() });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

export default app;
