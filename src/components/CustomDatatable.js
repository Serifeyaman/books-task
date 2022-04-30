import React, { useEffect, useState } from 'react'
import { Button, Card, CardHeader, CardTitle, Col, Row } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { ChevronDown, ChevronLeft, ChevronRight, PlusCircle } from 'react-feather'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import "assets/css/paginate.css"
import CustomAlert from './CustomAlert'

const CustomDatatable = ({ data, columns, title, routeUrl }) => {

    const [currentItems, setCurrentItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [showDataCount, setShowDataCount] = useState(6)

    useEffect(() => {
        const endOffset = itemOffset + showDataCount;
        setCurrentItems(data?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data?.length / showDataCount));
    }, [itemOffset, showDataCount, data?.length]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * showDataCount) % data?.length;
        setCurrentPage(event.selected) //aktif sayfa
        setItemOffset(newOffset);
    };

    const Next = () => {
        return (
            <div className='paginate-next-button'>
                <ChevronRight color='#22577E' size={15} />
            </div>
        )
    }
    const Previous = () => {
        return (
            <div className='paginate-previous-button'>
                <ChevronLeft color='#22577E' size={15} />
            </div>
        )
    }

    return (
        <Card style={{ display: 'flex', margin: 'auto', borderRadius: 8, backgroundColor: '#fff', width: '98%', height: '95%' }}>
            <CardHeader className='border-bottom'>
                <Row className='m-3'>
                    <Col>
                        <CardTitle style={{ color: '#22577E' }} tag='h4'>{title} Listesi</CardTitle>
                    </Col>
                    <Col>
                        <Link to={routeUrl} style={{ float: 'right', textDecorationLine: 'none' }}>
                            <Button style={{ backgroundColor: '#22577E', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                <PlusCircle size={15} /> Yeni {title} Ekle
                            </Button>
                        </Link>
                    </Col>

                </Row>

            </CardHeader>
            {
                data?.length > 0 ?
                    <DataTable
                        noHeader
                        pagination
                        striped
                        paginationServer
                        className='react-dataTable'
                        columns={columns}
                        sortIcon={<ChevronDown size={10} />}
                        paginationComponent={() => <ReactPaginate
                            nextLabel={<Next />}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel={<Previous />}
                            renderOnZeroPageCount={null}

                            forcePage={currentPage}

                            activeLinkClassName={'active'}

                            pageClassName={'page-paginate-button'}
                            pageLinkClassName={'page-paginate-button'} //sayılar
                            breakClassName='page-paginate-button'
                            breakLinkClassName='page-paginate-button'
                            containerClassName={'pagination react-paginate pagination-sm justify-content-end pr-1 mt-1'}
                        />
                        }
                        data={currentItems}
                    />
                    :
                    <CustomAlert message="Veri Bulunamadı" />
            }

        </Card>
    )
}

export default CustomDatatable