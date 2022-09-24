import React, { useEffect } from 'react'
import { useParams , Link} from 'react-router-dom'

export default function ShowPost(props) {
  // const ans = props.showPost(id);
  // const post = props.post;
  const {id} = useParams();
  useEffect(()=> {
    props.getPost(id);
  }, [])
  const { type, title, content} = props.post;
  // console.log(id);
  return (
    <div className="fullpost-container card text-center">
    <div className="card-header type-fullpost">
   {type}
  </div>
    <div className="card-body">
      <h5 className="card-title title">{title}</h5>
      <p className="card-text content-fullpost">{content}</p>
    </div>
  <div className="btns">
    <Link to= {`/post/update/${id}`} className="btn btn-info ">Edit Post</Link>
    <Link to= {`/post/delete/${id}`} className="btn btn-danger">Delete Post</Link>
  </div>
  </div>
  )
}

