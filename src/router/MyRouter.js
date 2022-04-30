import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes?.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element} />
                ))}
            </Routes>
        </BrowserRouter>

    )
}

export default MyRouter