import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./riadh.css"


import { useDispatch, useSelector } from 'react-redux';
import { delete_services, get_service, get_services, toggleFalse, toggleTrue, update_service } from '../redux/serviceSlice';
import { useNavigate } from 'react-router-dom';
import { ClassNames } from '@emotion/react';
import Edit from './Eit';



function Cardservice({service}) {
  // const[data,setData]= useState({ title: "", img_url: "", vedio_url: "",phone_number:"",adresse:"" ,description:"",rate:""})
 
  const services = useSelector((state) => state.services.services);
  const search = useSelector((state) => state.services.search)

  // const service = useSelector((state) => state.services.service);
  // const edit =useSelector((state) => state.services.edit)

  const dispatch= useDispatch()
  const navigate= useNavigate()
  


  useEffect(() => {
    dispatch(get_services());
   
  }, [dispatch]);
  //dlete service
  const handleDelete = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(delete_services(id));
      dispatch(get_services())
    }
  }
  // update service
  // const handleEdit = (e) => {
  //   e.preventDefault();
  //   dispatch(update_service(el._id, data));
   
  // };
  //handletrue
  // const handletoggletrue = ()=>{
  //   dispatch(toggleTrue())
  //   dispatch(get_service(service?._id))
  //   navigate("/addedit")
  // }
  
  
  // //handlefalse
  // const handletogglefalse = ()=>{
  //   dispatch(toggleFalse())
  //   navigate("/addedit")
  // }
  
  

  



  return (
   
    
    
      <div className='cardd'  >
       {services?.filter((service)=>
       service?.title .toLowerCase().includes(search.toLowerCase().trim())||
       service?.adresse.toLowerCase().includes(search.toLowerCase().trim()) ||
       service?.phone_number.includes(search.trim())

       )
       .map((service) => (
        <div key={service?._id} >
          
    <div  >
    
      <Card style={{width:"80%"}}>
      <h4>{service?.userId.username}</h4>
    <Card.Img variant="top" style={{width:"30%"}} src={service?.img_url} />

    <Card.Body>
      <Card.Title>{service?.title}</Card.Title>
      <Card.Text>
      {service?.adresse}
      </Card.Text>
      <Card.Text>{service?.phone_number} </Card.Text>
      <Card.Text>{service?.description} </Card.Text>
    </Card.Body>
    <Edit  service={service}/> 
    <Button variant="danger" style={{width:"40%"}} onClick={()=>handleDelete(service?._id)}>Delete</Button>
    </Card>
   </div>
  
  </div>
      ))}
      

     
  </div>
  
  
  )
}


export default Cardservice