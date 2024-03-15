
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import FormCreateProduct, { AddProduct } from '../Form/FormCreateProduct';

function BtnCreateNewProduct() {
  const [openModal, setOpenModal] = useState(false);

  function getDataForm(product: AddProduct){
    console.log(product);
  }

  async function createProduct() {
    try{
      const postProduct = await fetch('https://fakestoreapi.com/products',{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(
          {
            getDataForm
          }
        )
      })
      const res = await postProduct.json();
      console.log(res);
    }catch(error){
      console.log(error);
    }finally{
      setOpenModal(false);
    }
  }
  return (
    <>
      <div className="flex justify-center my-5">
        <Button color="blue" onClick={() => setOpenModal(true)}>Create Product</Button>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create New Product</Modal.Header>
        <Modal.Body>
          <FormCreateProduct getDataForm={getDataForm}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={createProduct}>Create</Button>
          <Button color="" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    
  );
}

export default BtnCreateNewProduct