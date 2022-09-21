import React from 'react'
import { useParams } from 'react-router-dom'

export default function ShowPost(props) {
  // const ans = props.showPost(id);
  // const post = props.post;
  const {id} = useParams();
  props.getPost(id)
  const { type, title, content} = props.post;
  console.log(type, title, content)
  // console.log(id);
  return (
    <div className="fullpost-container card text-center">
    <div className="card-header type">
   {type}
  </div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{content}</p>
  </div>
  <div className="btns">
  <button type="button" class="btn btn-info btn-lg">Edit Post</button>
<button type="button" class="btn btn-danger btn-lg">Delete Post</button>
  </div>
  </div>
  )
}

