import {Label, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';

export type AddProduct = {
    title : string,
    price : number,
    image : string
}

type ErrorType = {
    title ?: string,
    price ?: string
}

type CreateProductFormProps = {
    getDataForm: (product: AddProduct) => void;
}

const FormCreateProduct:React.FC<CreateProductFormProps> = ({getDataForm}) => {
    const [product, setProduct] = useState<AddProduct>({
        title : '',
        price : 0,
        image : 'https://i.pravatar.cc'
    })

    useEffect(()=>{
        getDataForm(product)
    }, [product, getDataForm])

    const [error, setError] = useState<ErrorType>({})

    useEffect(()=>{
        const newError : ErrorType = {};
        if(product.title.length && product.title.length < 3){
            newError.title = "Title must be at least three characters!"
        }
        if(product.price && Number(product.price) <= 0){
            newError.price = "Price must be greater than zero!"
        }
        setError(newError)
    },[product.title, product.price])

    const HandleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setProduct((prevProduct)=> ({
            ...prevProduct,
            [id]: value,
        }));
    };
  return (
    <div className='flex justify-center'>
    <form className="flex w-full flex-col gap-4">
      <div >
        <div className="mb-2 block">
          <Label htmlFor="title" value="Product Title" />
        </div>
        <TextInput id="title" type="text" placeholder="T-shirt" value={product.title} onChange={HandleChange}/>
        {error.title && <p className='text-red-500 text-xs'>{error.title}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Product Price" />
        </div>
        <TextInput id="price" type="number" value={product.price} onChange={HandleChange}/>
        {error.price && <p className='text-red-500 text-xs'>{error.price}</p>}
      </div>
    </form>
    </div>
  );
}

export default FormCreateProduct;