import { Article, NewArticle } from '../interfaces/article';

export const newArticle: NewArticle = {
  name: 'Tournevis',
  price: 2,
  qty: 3,
};

export const a1: Article = {
  id: 'a1',
  name: 'Pelle',
  price: 2,
  qty: 3,
};

export const articles: Article[] = [
  a1,
  {
    id: 'a2',
    name: 'Marteau',
    price: 2,
    qty: 3,
  },
];
