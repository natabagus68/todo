import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getData, addDone, updateData, deleteData} from '../../redux/feautures/dataSlice'
const CardTodoList = () => {
   const [detail, setDetail] = useState()
   const [onEdit, setOnEdit] = useState(false)
   const [curentId, setCurentId] = useState()
   const [title, setTitle] = useState()
   const [description, setDescription] = useState()


  const select = useSelector(state => state.data.data);
   const dispatch = useDispatch()
      
   
   useEffect(() => {
        dispatch(getData())
      },[])

  const handleDone = (id) => {
    let filt = select.filter(e => e.id === id)
    let x = filt[0]
    dispatch(addDone({...x, status:0}))
  }

const handleDetail = (id) => {
  setCurentId(id)
let i = select.filter(e => e.id === id)
setDetail(i[0])
setTitle(i[0].title)
setDescription(i[0].description)

}


const handleEdit = (id) => {
  setOnEdit(true)
  let y = select.filter(e => e.id === id)
 
}


const handleUpdate = (e) => {
  e.preventDefault()
  console.log(curentId);
 dispatch(updateData({id:curentId, title:title, description:description, status:1, createdAt:new Date()}))
 setOnEdit(false)
}

  return (
  <>
    <div className="card" style={{width:'30rem'}}>
      <div className="card-header">
        Featured
      </div>
    <table className="table">
      <tbody>
        {
          select.map(e => (
            <>
            <tr>
              <td>Title: {e.title}</td>
              <td>Des: {e.description}</td>
              <td>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleDetail(e.id)}>Detail</button>
              </td>
              <td>
                <button type="button" className="btn btn-success" onClick={() => handleDone(e.id)}>Done</button>
              </td>
            </tr>
            </>
          ))
        }
      </tbody>
    </table>
   </div>






   {/* modal box */}
   <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       {detail? 
       <>
       <p>{detail.title}</p>
       <p>{detail.description}</p>
       <p>{detail.status}</p>
       </>
       : false}


       {onEdit? 
       <>
       <form onSubmit={handleUpdate}>
         <input type="text" className="form-control mb-2" value={title} onChange={(event) => setTitle(event.target.value)}/>
         <input type="text"  className="form-control mb-2"  value={description} onChange={(event) => setDescription(event.target.value)}/>
         <button type="submit" className="btn btn-warning" data-bs-dismiss="modal">Update!</button>
       </form>
       
       </>
       
       : false}

      

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => dispatch(deleteData(curentId))}>Delete</button>
        <button type="button" className="btn btn-primary" onClick={() => handleEdit(curentId)}>Edit</button>
      </div>
    </div>
  </div>
</div>

  </>
  );
};

export default CardTodoList;
