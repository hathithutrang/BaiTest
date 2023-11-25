import Article from '../models/articles.model'
import { IArticles } from '../models/articles.model';

const getAll = async () => {

  const articles = await Article.find()
  return articles
};

const getItemById = async (id: string) => {
 console.log(id);
 const user = await Article.findById(id);
 return user;
};

const createItem = async (payload: IArticles) => {
  const user =  await Article.create(payload);
  return user; 
  
};

const updateItem = async (id: string, payload: IArticles)  => {
  const user = Article.findByIdAndUpdate(id, payload, {
    new: true
  });
  return user;
    
};

const deleteItem = async (id: string) => {
  const user = Article.findByIdAndDelete(id);
  return user;
 
};

export default {
  getAll,
  getItemById,
  updateItem,
  createItem,
  deleteItem,
};