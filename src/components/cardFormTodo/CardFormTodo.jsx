import React, {useState} from 'react';
import './cardtodoform.css'
import {useDispatch, useSelector} from 'react-redux';
import {addData} from '../../redux/feautures/dataSlice'
const CardFormTodo = () => {

  const dispatch = useDispatch();
  let panjang = useSelector(state => state.data.data)
  const [title, setTitle] = useState()
  const [discription, setDiscription] = useState()
  
 
const handleCreate = (e) => {
  e.preventDefault()
  dispatch(addData({id:panjang.length+1, title:title, description:discription, createdAt:new Date(), status:1}))
}

  return (
          
    <div className="card" style={{width:'30rem'}}>
    <div className="card-header">
      form todo
    </div>
    <form className="form" onSubmit={handleCreate}>
      <input type="text" className="form-control mt-3" placeholder="title" value={title} onChange={(event)=> setTitle(event.target.value)}/>
      <input type="text" className="form-control mt-3" placeholder="discription" value={discription} onChange={(event)=> setDiscription(event.target.value)} />
      <button className="btn btn-primary mt-3 mb-3" type="submit" >Create</button>
    </form>
    
  </div>
  
  );
};

export default CardFormTodo;
