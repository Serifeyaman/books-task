import BookDetailTable from 'components/BookDetailTable'
import CustomAlert from 'components/CustomAlert'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap'
import { getBookById } from 'redux/book/action'
import { format } from 'utility/InputElementsHelper'

const BookDetail = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const { bookDetail } = useSelector(state => state.BookReducer)

  useEffect(() => {
    dispatch(getBookById(id))
  }, [id])

  console.log("bookDetail", bookDetail)

  return (
    <Fragment>
      <Card style={{ display: 'flex', margin: 'auto', borderRadius: 8, backgroundColor: '#fff', marginTop: '5%', width: '60%' }}>

        <Row>
          <Breadcrumb className='p-4'>
            <BreadcrumbItem><a style={{ textDecoration: 'none', color: '#827397', fontSize: 20 }} href="/booklist">Kitap Listesi</a></BreadcrumbItem>
            <BreadcrumbItem><a style={{ textDecoration: 'underline', fontSize: 20, fontWeight: 'bold', color: '#827397' }}>Kitap Bilgileri</a></BreadcrumbItem>
          </Breadcrumb>
        </Row>

        <CardHeader className='border-bottom'>
          <CardTitle style={{ color: '#827397' }} tag='h4'>Kitap Bilgileri</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="4" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
              <img src="http://placeimg.com/640/480/food" width="100%" alt='bookImage' />
            </Col>
            <Col lg="8">
              <BookDetailTable book={bookDetail} />
            </Col>
          </Row>

        </CardBody>
      </Card>
    </Fragment>
  )
}

export default BookDetail