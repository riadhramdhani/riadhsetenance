import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add_services } from '../redux/serviceSlice';

function Addservice() {
    const [data, setData] = useState({ title: "", img_url: "", vedio_url: "",phone_number:"" , adresse:"", description:"", rate:""});
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };


      const handleAdd = (e) => {
        e.preventDefault();
        // if (user && user.profession === "worker"){
        dispatch(add_services({title:data.title,img_url:data.img_url,vedio_url:data.vedio_url,phone_number:data.phone_number,
        adresse:data.adresse,description:data.description,rate:Number(data.rate)}));
        navigate("/cardservice")
        // }
        // else {
        //   console.log('L\'utilisateur n\'a pas la permission d\'ajouter un service');
        // }
      };



  return (
    <div><div
    className="modal show"
    style={{ display: 'block', position: 'initial', backgroundColor:'beige' }}
  >
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Add service</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" name="title" onChange={handleChange} value={data.title} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>img_url</Form.Label>
      <Form.Control type="text" placeholder="Enter image" name="img_url" onChange={handleChange} value={data.img_url} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>vedio</Form.Label>
      <Form.Control type="text" placeholder="Enter vedio" name="vedio_url" onChange={handleChange} value={data.vedio_url} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>phone_number</Form.Label>
      <Form.Control type="text" placeholder="Enter phone_number" name="phone_number" onChange={handleChange} value={data.phone_number}  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>adresse</Form.Label>
      <Form.Control type="text" placeholder="Enter adresse" name="adresse" onChange={handleChange} value={data.adresse} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>description</Form.Label>
      <Form.Control type="text" placeholder="Enter description" name="description" onChange={handleChange} value={data.description}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>rate</Form.Label>
      <Form.Control type="number" placeholder="Enter rate" name="rate"  onChange={handleChange} value={data.rate} />
    </Form.Group>
    
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" onClick={handleAdd}>Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div></div>
  )
}

export default Addservice