import type { Request, Response } from "express";
import type { Knex } from "knex";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);
const table: Knex.QueryBuilder = knexInstance("books");

type Book = {
  id: number;
  name: string;
  authorID: number;
};

function selectBooks(id: string = ""): Knex.QueryBuilder<Book | Book[]> {
  const select = table.select("*");
  return id ? select : select.where({ id });
}

export const index = async (request: Request, response: Response) => {
  try {  
    const books: Book[] = await selectBooks();
    response.status(200).json(books);
  } catch (error: any) {
    response.send(error);
  }
};

export const show = async (request: Request, response: Response) => {
  try {
    const books: Book = await selectBooks(request.params.id);
    response.status(200).json(books);
  } catch (error: any) {
    response.send(error);
  }
};

export default { index, show };
