import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../pages/Detail'
import Home from '../pages/Home'

const Router = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Detail" element={<Detail />} />
                <Route path="Detail/:id" element={<Detail />} />
            </Routes>
    )
}

export default Router