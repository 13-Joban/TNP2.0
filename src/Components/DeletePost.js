import React  from 'react'
import {useParams} from 'react-router-dom'

export default function DeletePost(props) {
    
  const {id} = useParams();
    props.Delete(id);
  return (
    <div className="delete-container">
      <div className="delete-message"><h3>
      This Post has been Deleted
      </h3></div>
    </div>
  )
}
