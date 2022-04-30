import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap'

const BookDetailTable = () => {
    const { bookDetail } = useSelector(state => state.BookReducer)
    return (
        <>
            <Row style={{ padding: '3%' }}>
                <Col lg="4">
                    <h6>Kitap Adı:</h6>
                </Col>

                <Col lg="8">
                    {bookDetail?.name}
                </Col>
            </Row>
            <Row style={{ padding: '3%' }}>
                <Col lg="4">
                    <h6>Kitap Yazarı:</h6>
                </Col>
                <Col lg="8">
                    {bookDetail?.author}
                </Col>

            </Row>
            <Row style={{ padding: '3%' }}>
                <Col lg="4">
                    <h6>Kitap Basım Tarihi:</h6>
                </Col>
                <Col lg="8">
                    {bookDetail?.createdAt}
                </Col>

            </Row>
            <Row style={{ padding: '3%' }}>
                <Col lg="4">
                    <h6>Kitap Fiyatı:</h6>
                </Col>
                <Col lg="8">
                    {bookDetail?.price} ₺
                </Col>

            </Row>

        </>
    )
}

export default BookDetailTable