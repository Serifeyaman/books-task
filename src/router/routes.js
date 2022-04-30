import BookList from "pages/BookList";
import BookDetail from "pages/BookDetail";
import BookAdd from "pages/BookAdd";
import BookUpdate from "pages/BookUpdate";
import NotFound from "pages/NotFound";

export const routes = [
    {
        path: "/",
        element: <BookList />
        
    },
    {
        path: "booklist",
        element: <BookList />
    },
    {
        path: "booklist/:id",
        element: <BookDetail />
    },
    {
        path: "addbook",
        element: <BookAdd />
        
    },
    {
        path: "updatebook/:id",
        element: <BookUpdate />
    },
    {
        path: "*",
        element: <NotFound />
    }
]