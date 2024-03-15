import { useEffect, useState } from 'react';
import LoadingComponent from './Loader/LoadingComponent';
import NavBarComponent from './Navbar/NavbarComponent';
import CardComponent from './Card/CardComponent';
import { Button } from 'flowbite-react';
import BtnCreateNewProduct from './Buuton/ButtonCreateComponent';

export type Products = {
  readonly id ?: number,
    title : string,
    price : number,
    image : string
}


export default function HomeComponent() {
    const [getProduct, setGetProduct] = useState<Products []>();
    const [loading, setLoading] = useState(false)
    async function fetchData(){
      setLoading(true) 
      try{
        const data = await fetch('https://fakestoreapi.com/products')
        const response = await data.json()
        setGetProduct(response)

      } catch(err) {
        console.log(err);
        
      } finally{
        setLoading(false)
      }
    }
    useEffect(() => {
      fetchData()
    }, [])
    return (
        <>
            <NavBarComponent/>
            <BtnCreateNewProduct/>
            {
                loading ?
                <NavBarComponent/>
                :
                <section className='container mx-auto grid grid-cols-4 gap-5'>
                    {getProduct?.map((pro, index)=>(
                        <div className='flex justify-center'>
                        <CardComponent key={index} title={pro.title} price={pro.price} image={pro.image}/>
                        </div>
                    ))}
                </section>
            }
        </>
    )
}