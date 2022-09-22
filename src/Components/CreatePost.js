import React, {useState} from 'react';

export default function CreatePost (props) {

    const [post, setPost] = useState({
      type: 'Announcement',
      title: '', 
      content: ''
    })

  const onFormSubmit = event => {
    // prevent form submit
    event.preventDefault();
  
    // form validation

    if (formValidation()) {
      // send form data to app
      props.onFormSubmit(post);
      // clear form fields
      clearFormFields();
    }
  };
  const handleChange = event => {
    const { name, value } = event.target;
      post[name] = value;
      setPost(post)
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
    // console.log("clear");
    // change form state
   setPost({
    type: 'Announcement',
      title: '', 
      content: ''
   })
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
          onChange={handleChange}
          // value={this.state.post.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor= "exampleFormControlSelect1">Type</label>
          <select
           className="form-control type-input" 
           id="exampleFormControlSelect1"
           name="type"
           onChange={handleChange}
           >
            <option >Announcement</option>
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
          onChange={handleChange}
          // value={this.state.post.content}
          >
          </textarea>
        </div>
        <div className="form-group">
          <button className="form-control btn btn-primary" onClick={onFormSubmit} >Create Post</button>
        </div>
      </form>
    )
}
