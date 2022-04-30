import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input-field';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import BookService from 'services/BookService';
import { confirm } from 'utility/SweetAlert';
import Loading from './Loading';

const BookAddForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [currency, setCurrency] = useState(0);
    const [className, setClassName] = useState('');
    const [rawValue, setRawValue] = useState('');
    const [loading, setLoading] = useState(false)

    const onSubmit = (data) => {

        if (currency !== 0 && rawValue !== undefined) {
            let str = currency;
            var a = str.replace(",", ".");

            var isInclude = a?.includes(".");

            data.price = isInclude ? a : (str + ".00");
            data.image = "http://placeimg.com/640/480/food"

            confirm(
                {
                    title: "Onay",
                    text: "Eklemek istediğinize emin misiniz?",
                },
                () => {
                    setLoading(true);
                    return BookService.addBook(data)
                },
                () => {
                    setLoading(false);
                    window.location.assign("/booklist");
                }
            );
        } else {
            setClassName('is-invalid');
        }
    }

    const handleOnValueChange = (value) => {

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
                    <Label style={{ color: '#417d7a', fontWeigth: 'bold' }} for='name'>Kitap Adı</Label>
                    <Input
                        type='text'
                        name='name'
                        id='name'
                        innerRef={register({ required: true })}
                        invalid={errors.name && true}
                    />
                </FormGroup>
                <FormGroup>
                    <Label style={{ color: '#417d7a', fontWeigth: 'bold' }} for='author'>Kitap Yazarı</Label>
                    <Input
                        type='text'
                        name='author'
                        id='author'
                        innerRef={register({ required: true })}
                        invalid={errors.author && true}

                    />
                </FormGroup>
                <FormGroup>
                    <Label style={{ color: '#417d7a', fontWeigth: 'bold' }} for='price'>Fiyat</Label>

                    <CurrencyInput
                        intlConfig={{ locale: 'tr-TR', currency: 'TRY' }}
                        decimalScale={2}
                        id='price'
                        name='price'
                        className={`form-control ${className}`}
                        onValueChange={(value) => handleOnValueChange(value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label style={{ color: '#417d7a', fontWeigth: 'bold' }} for='createdAt'>Basım Tarihi</Label>
                    <Input
                        type='date'
                        name='createdAt'
                        id='createdAt'
                        innerRef={register({ required: true })}
                        invalid={errors.createdAt && true}

                    />
                </FormGroup>

                <Button style={{ backgroundColor: '#417d7a', float: 'right' }} type='submit' className='mr-1' onClick={() => currency === 0 && setClassName('is-invalid')}>
                    Ekle
                </Button>
            </Form>
    )
}

export default BookAddForm