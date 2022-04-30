import BookAddForm from 'components/BookAddForm'
import React, { Fragment } from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardTitle, Row } from 'reactstrap'

const BookAdd = () => {
  return (
    <Fragment>
      <Card style={{ display: 'flex', margin: 'auto', borderRadius: 8, backgroundColor: '#fff', marginTop: '5%', width: '60%' }}>

        <Row>
          <Breadcrumb className='p-4'>
            <BreadcrumbItem><a style={{ textDecoration: 'none', color: '#417d7a', fontSize: 20 }} href="/booklist">Kitap Listesi</a></BreadcrumbItem>
            <BreadcrumbItem><a style={{ textDecoration: 'underline', fontSize: 20, fontWeight: 'bold', color: '#417d7a' }}>Kitap Ekleme</a></BreadcrumbItem>
          </Breadcrumb>
        </Row>

        <CardHeader className='border-bottom'>
          <CardTitle style={{ color: '#417D7A' }} tag='h4'>Yeni Kitap Ekle</CardTitle>
        </CardHeader>
        <CardBody>
          <BookAddForm />
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default BookAdd