import { useState, useEffect } from 'react'
import { Input } from '../../components'
import { useForm } from 'react-hook-form'


function ProductForm({ product, appear }) {

    const { register, handleSubmit, setValue, getValues, watch } = useForm({
        defaultValues: {
            name: product.name || '',
            slug: product.slug || '',
            suplier: product.suplier || '',
            customer: product.customer || '',


        }
    });

    const submit = async (data) => {
        try {
            if (product) {
                try {

                } catch (error) {

                }
            }

        } catch (error) {
            console.log('error to submit the form', error)
        }
    }







    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                {/* product name section */}
                <Input
                    label='Product Name'
                    placeholder='enter your name'
                    {...register('name', {
                        required: true
                    })}
                />

                {/* slug section */}
                <Input
                    label='slug'
                    placeholder='slug is here'
                    {...register('slug', { required: true })}
                    onInput={(e) => {
                        setValue('slug', slugTrasformer(e.currentTarget.value), { shouldValidate: true })
                    }}
                />

                {/* suplier section */}
                <Input
                    label='Suplier'
                    disabled={!appear}
                    placeholder='enter suplier name'
                    {...register('suplier', { required: true })}
                />

                {/* customer section */}
                <Input
                    label='Customer'
                    placeholder='enter customer name'
                    disabled={!appear}
                    {...register('customer', { required: true })}
                />

                {/* mfg date section */}
                <Input
                    label='Mfg Date'
                    type='date'
                    {...register('mfgDate', { required: true })}
                />

                {/* exp date section */}

                <Input
                    label='Exp Date'
                    type='date'
                    {...register('expDate', { required: true })}
                />

                <Input
                    label='Quantity'
                    type='number'
                    {...register('quantity'), { required: 'quantity is required' }}

                />

                <Input
                    label='Price'
                    type='number'
                    {...register('price'), { required: 'price is required' }}

                />



            </div>
        </form>
    )
}

export default ProductForm
