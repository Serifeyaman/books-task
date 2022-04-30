import BookService from "services/BookService";

export const getBookList = () => {
    return dispatch => {
        BookService.getBookList().then((res) => {
            dispatch({
                type: 'GET_BOOK_LIST',
                bookList: res.data
            })
        }).catch(err => console.log(err))
    }
}

export const getBookById = (id) => {
    return dispatch => {
        BookService.getBookById(id).then((res) => {
            dispatch({
                type: 'GET_BOOK_BY_ID',
                bookDetail: res.data
            })
        }).catch(err => console.log(err))
    }
}