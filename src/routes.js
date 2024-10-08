import App from "./App";
import BookContainer from "./components/BookContainer";
import AddBookForm from "./pages/AddBookForm";
import BookDetail from "./pages/BookDetail";
import Categories from "./pages/Categories";
import CategoryBooks from "./pages/CategoryBooks";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BookContainer />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/:category",
        element: <CategoryBooks />,
      },
      {
        path: "/add-book",
        element: <AddBookForm />,
      },
      {
        path: "/books/:title",
        element: <BookDetail />,
      },
    ],
  },
];

export default routes;
