import axios from "axios";
import { apiUrl } from "configs/api";

const getBookList = () => {
    return axios.get(`${apiUrl}/books`)
}

const getBookById = (id) => {
    return axios.get(`${apiUrl}/books/${id}`)
}

const addBook = (data) => {
    return axios.post(`${apiUrl}/books`,data)
}

const updateBook = (data) => {
    return axios.put(`${apiUrl}/books/${data.id}`,data)
}

const deleteBook = (id) => {
    return axios.delete(`${apiUrl}/books/${id}`)
}

let BookService = {
    getBookList,
    getBookById,
    addBook,
    updateBook,
    deleteBook
}

export default BookService