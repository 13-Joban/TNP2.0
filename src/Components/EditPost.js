import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function EditPost(props) {
    const {id} = useParams();
  
  useEffect(()=> {
    props.getPost(id)
  }, [])

   const fetchedpost = props.post;
   const [type, setType] = useState(fetchedpost.type);
   const [title, setTitle]  = useState(fetchedpost.title);
   const [content, setContent]  = useState(fetchedpost.content);

  const onEdit = event => {

    // prevent form submit
    event.preventDefault();
  
    // form validation

    if (formValidation()) {
      // send form data to app
      
      props.Edit(id, type, title, content);
      // clear form fields
      clearFormFields();

    }
  };
  const formValidation = () => {
    // title 
    if (document.getElementsByName("title")[0].value === "") {
      alert("Enter Title ");
      return false;
    }

    // select type
    if (document.getElementsByName("type")[0].value === "") {
      alert("Select type");
      return false;
    }

    // content
    if (document.getElementsByName("content")[0].value === "") {
      alert("Enter content of post");
      return false;
    }
    
    return true;
  };
  const clearFormFields = () => {
    setTitle('');
    setContent('');
    setType('')
    // clear form fields
    document.querySelector(".input-form").reset();
  };
  return (
    <form className="input-form">
    <div className="form-group">
      <label htmlFor='exampleFormControlInput1'>Title</label>
      <input 
      type="text"
      className="form-control title-input"
      name="title"
      id="exampleFormControlInput1" 
      placeholder="Amazon is Hiring 2023 grads" 
      onChange={ (e) => setTitle(e.target.value)}
      value= {title}
      />
    </div>
    <div className="form-group">
      <label htmlFor= "exampleFormControlSelect1">Type</label>
      <select
      className="form-control type-input" 
      id="exampleFormControlSelect1"
      name="type"
      onChange={(e) => setType(e.target.value)}
      value= {type}
       >
        <option>Announcement</option>
        <option>Result</option>
        <option>Update</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1"
      >Description</label>
      <textarea 
      className="form-control content-input" 
      id="exampleFormControlTextarea1" 
      rows="10" 
      placeholder="Add Description ..."
      name='content'
      onChange={(e) => setContent(e.target.value)}
      value= {content}
      >
      </textarea>
    </div>
    <div className="form-group">
      <button className="form-control btn btn-info" onClick={onEdit}>Edit Post</button>
    </div>
  </form>
  )
  

}
