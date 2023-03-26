import express, { json } from "express";
import { Article, NewArticle } from "./interfaces/article";

const generateId = () => {
  return Date.now() + "_" + Math.floor(Math.random() * 1e12);
};

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

app.use(json());

app.post("/articles", (req, res) => {
  const newArticle = req.body as NewArticle;
  const article = { ...newArticle, id: generateId() };
  articles.push(article);
  res.status(201).end();
});

export default app;
