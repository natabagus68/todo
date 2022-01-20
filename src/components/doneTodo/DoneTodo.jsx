import React from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {batal} from '../../redux/feautures/dataSlice'
const DoneTodo = () => {

  let done = useSelector(state => state.data.done)
  let dispatch = useDispatch()

  const handleCancel = (id) => {
      dispatch(batal(id))
  }


  return (
  
    <div class="card" style={{width:'30rem'}}>
    <div class="card-header">
      todo done
    </div>
    <table class="table">
      <tbody>
       {
          done.map(e => (
           <>
           <tr>
           <td>{e.title}</td>
           <td>
             <button type="button" class="btn btn-danger" onClick={()=> handleCancel(e.id)}>cancle</button>
           </td>
           </tr>
           </>
         ))
       }
      </tbody>
    </table>
  </div>
  
  );
};

export default DoneTodo;
