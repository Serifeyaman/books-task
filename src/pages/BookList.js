import React, { useEffect } from 'react'
import { Edit, FileText, Trash } from 'react-feather'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown } from 'reactstrap'
import CustomDatatable from 'components/CustomDatatable'
import { useDispatch, useSelector } from 'react-redux'
import { getBookList } from 'redux/book/action'
import BookService from 'services/BookService'
import { confirm } from 'utility/SweetAlert'
import { format } from 'utility/InputElementsHelper'

const BookList = () => {

  const dispatch = useDispatch()
  const { bookList } = useSelector(state => state.BookReducer)

  const deleteItem = (id) => {
    confirm(
      {
        title: "Onay",
        text: "Silmek istediğinize emin misiniz?",
      },
      () => {
        // setLoading(true);
        return BookService.deleteBook(id)

      },
      () => {
        dispatch(getBookList())
      }
    );
  }

  const columns = [
    {
      name: "Id",
      selector: row => row.id,
      sortable: true,
      maxWidth: "5%"
    },
    {
      name: "Kitap Resmi",
      selector: row => row.img,
      sortable: true,
      maxWidth: "15%",
      cell: (a) => {
        return (<img alt='bookImage' src={`${a.img}`} width={80} height={80}/>)
      }
    },
    {
      name: "Kitap Adı",
      selector: row => row.name,
      sortable: true,
      maxWidth: "20%"
    },
    {
      name: 'Yazar',
      selector: row => row.author,
      sortable: true,
      maxWidth: "20%"
    },
    {
      name: 'Basım Tarihi',
      selector: row => row.createdAt,
      sortable: true,
      maxWidth: "15%",
      cell: (a) => {
        return format(a.createdAt)
      }
    },
    {
      name: 'Fiyatı',
      selector: row => row.price,
      sortable: true,
      maxWidth: "15%",
      cell: (a) => {
        return (<span>{a.price} ₺</span>)
      }
    },
    {
      name: "İşlemler",
      maxWidth: "10%",

      cell: (a) => {
        return (
          <UncontrolledButtonDropdown>
            <DropdownToggle style={{ backgroundColor: '#22577E' }} caret>
              İşlemler
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                tag="a"
                className="w-100"
                href={`/booklist/${a.id}`}
              >
                <FileText color='#22577E' size={18} style={{ marginRight: '5%' }} />
                <span style={{ color: '#22577E' }}>Detay</span>
              </DropdownItem>
              <DropdownItem
                tag="a"
                className="w-100"
                href={`/updatebook/${a.id}`}
              >
                <Edit color='#22577E' size={18} style={{ marginRight: '5%' }} />
                <span style={{ color: '#22577E' }} >Güncelle</span>
              </DropdownItem>
              <DropdownItem
                tag="a"
                className="w-100"
                onClick={() => deleteItem(a.id)}
              >
                <Trash color='#22577E' size={18} style={{ marginRight: '5%' }} />
                <span style={{ color: '#22577E' }} >Sil</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        );
      },
    },
  ]

  useEffect(() => {
    dispatch(getBookList())
  }, [])

  return (
    <div style={{ width: '100%', height: '100vh', alignItems: 'center', display: 'flex' }}>
      <CustomDatatable routeUrl="/addbook" data={bookList} columns={columns} title="Kitap" />
    </div>
  )
}

export default BookList