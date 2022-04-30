const INITIALSTATE = {
    bookList: [],
    bookDetail: {}
}

const BookReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case 'GET_BOOK_LIST':
            return {
                ...state,
                bookList: action.bookList
            }
        case 'GET_BOOK_BY_ID':
            return {
                ...state,
                bookDetail: action.bookDetail
            }
        default:
            return state;
    }
}

export default BookReducer