# React Bookstore

# Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Demo](#demo)

# Introduction

This is a simple React application designed to manage a book library. It allows users to add, edit, and delete books, as well as filter books by title, author, or category.

Live Link: https://book-nest-beta.vercel.app/

# Features

- View a list of books
- Add a new book
- Edit book details
- Delete a book
- Filter books by title, author, or category
- Responsive Design

# Technologies used

- React
- React Router DOM
- JSON Server(Mock Database)

# Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Faith-K-commits/BookNest.git
   cd BookNest
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the JSON server

```bash
    json-server --watch src/db.json --port 8001
```

2. Start the development server:

   ```bash
       npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

# API Endpoints

## Books Endpoints

### Fetch Books

- Method: GET
- Endpoint: `/books`
- Description: Fetch and display a collection of books available
- Example request: `http://localhost:8001/books`

### Add Book

- Method: POST
- Endpoint: `/books`
- Description: Add a book to the collection of books
- Example request: `http://localhost:8001/books`

### Edit Book

- Method: PATCH
- Endpoint: `/books/:id`
- Description: Edit book details
- Example request: `http://localhost:8001/books/${id}`

### Delete Book

- Method: DELETE
- Endpoint: `/books/:id`
- Description: Remove a book from the collection
- Example request: `http://localhost:8001/books/${id}`

### View Book Details

- Method: GET
- Endpoint: `/books/:title`
- Description: View individual book information
- Example request: `http://localhost:8001/books?title=${title}`

## Category Endpoints

### Get Categories

- Method: GET
- Endpoint: `/categories`
- Description: View a list of categories for the book collection
- Example Request: `http://localhost:8001/categories`

### Get Books in a category

- Method: GET
- Endpoint: `/categories/:category`
- Description: View a list of books in a specific category
- Exampe Request: `http://localhost:8001/books?categories_like=${category}`

# Demo

[![Click to view Demo](https://github.com/Faith-K-commits/BookNest/blob/master/public/assets/Thumbnail.png)](https://www.loom.com/share/12a59d33148e4ad389dc3ddd8e4f1b57?sid=78de8721-7b02-4723-98d2-5e8df2fbbbcb)
