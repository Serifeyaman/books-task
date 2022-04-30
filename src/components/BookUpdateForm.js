import React, { useState, useEffect } from 'react'
import CurrencyInput from 'react-currency-input-field'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { getBookList } from 'redux/book/action'
import BookService from 'services/BookService'
import { confirm } from 'utility/SweetAlert'
import Loading from './Loading'

const BookUpdateForm = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { bookDetail } = useSelector(state => state.BookReducer)

    const [newPrice, setnewPrice] = useState(bookDetail?.price)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [currency, setCurrency] = useState(0);
    const [className, setClassName] = useState('');
    const [rawValue, setRawValue] = useState('');
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setnewPrice(bookDetail?.price)
        setCurrency(bookDetail?.price)
    }, [bookDetail])


    const onSubmit = (data) => {

        if (currency !== 0 && rawValue !== undefined) {
            let str = currency;
            var a = str.replace(",", ".");

            var isInclude = str?.includes(".");

            data.price = isInclude ? a : (str + ".00") ;
            data.id = id

            confirm(
                {
                    title: "Onay",
                    text: "Güncellemek istediğinize emin misiniz?",
                },
                () => {
                    setLoading(true)
                    return BookService.updateBook(data)

                },
                () => {
                    dispatch(getBookList())
                    setLoading(false)
                    window.location.assign("/booklist");
                }
            );
        } else {
            setClassName('is-invalid');
        }
    }

    const handleOnValueChange = (value) => {

        setnewPrice(value)
        setRawValue(value)
        setCurrency(rawValue)

        if (value !== undefined) {
            setClassName('');

        } else {
            setClassName('is-invalid');
        }
    }

    return (
        loading ?
            <Loading block={true} />
            :
            <Form id="addForm" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label style={{ color: '#363062', fontWeigth: 'bold' }} for='name'>Kitap Adı</Label>
                    <Input
                        type='text'
                        name='name'
                        id='name'
                        defaultValue={bookDetail?.name}
                        innerRef={register({ required: true })}
                        invalid={errors.name && true}
                    />
                </FormGroup>
                <FormGroup>
                    <Label style={{ color: '#363062', fontWeigth: 'bold' }} for='author'>Kitap Yazarı</Label>
                    <Input
                        type='text'
                        name='author'
                        id='author'
                        defaultValue={bookDetail?.author}
                        innerRef={register({ required: true })}
                        invalid={errors.author && true}

                    />
                </FormGroup>
                <FormGroup>
                    <Label style={{ color: '#363062', fontWeigth: 'bold' }} for='author'>Resim Url</Label>
                    <Input
                        type='text'
                        name='image'
                        id='image'
                        defaultValue={bookDetail?.image}
                        innerRef={register({ required: true })}
                        invalid={errors.image && true}

                    />
                </FormGroup>
                <FormGroup>
                    <Label style={{ color: '#363062', fontWeigth: 'bold' }} for='price'>Fiyat</Label>

                    <CurrencyInput
                        intlConfig={{ locale: 'tr-TR', currency: 'TRY' }}
                        decimalScale={2}
                        id='price'
                        name='price'
                        value={newPrice}
                        className={`form-control ${className}`}
                        onValueChange={(value) => handleOnValueChange(value)}

                    />
                </FormGroup>
                <FormGroup>
                    <Label style={{ color: '#363062', fontWeigth: 'bold' }} for='createdAt'>Basım Tarihi</Label>
                    <Input
                        type='date'
                        name='createdAt'
                        id='createdAt'
                        defaultValue={bookDetail?.createdAt}
                        innerRef={register({ required: true })}
                        invalid={errors.createdAt && true}

                    />
                </FormGroup>

                <Button style={{ backgroundColor: '#363062', float: 'right' }} type='submit' className='mr-1' onClick={() => (currency === 0 && rawValue === undefined) && setClassName('is-invalid')}>
                    Güncelle
                </Button>
            </Form>
    )
}

export default BookUpdateForm