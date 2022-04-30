import BookUpdateForm from 'components/BookUpdateForm'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardTitle, Row } from 'reactstrap'
import { getBookById } from 'redux/book/action'

const BookUpdate = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { bookDetail } = useSelector(state => state.BookReducer)


  useEffect(() => {
    dispatch(getBookById(id))
  }, [id])


  return (
    <Fragment>
      <Card style={{ display: 'flex', margin: 'auto', borderRadius: 8, backgroundColor: '#fff', marginTop: '5%', width: '60%' }}>

        <Row>
          <Breadcrumb className='p-4'>
            <BreadcrumbItem><a style={{ textDecoration: 'none', color: '#363062', fontSize: 20 }} href="/booklist">Kitap Listesi</a></BreadcrumbItem>
            <BreadcrumbItem><a style={{ textDecoration: 'underline', fontSize: 20, fontWeight: 'bold', color: '#363062' }}>Kitap Güncelleme</a></BreadcrumbItem>
          </Breadcrumb>
        </Row>

        <CardHeader className='border-bottom'>
          <CardTitle style={{ color: '#363062' }} tag='h4'>Kitap Güncelle</CardTitle>
        </CardHeader>
        <CardBody>
          {bookDetail && <BookUpdateForm />}
        </CardBody>
      </Card>
    </Fragment >
  )
}

export default BookUpdate