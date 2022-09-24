import React from 'react'
import { Link} from 'react-router-dom';
export default function Post (props) {
  
  let { id, type, title, content} = props;
  const smalldesc = content.substring(0, 250);
    return (
      <div className="card text-center post">
      <div className="card-header type">{type}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{smalldesc}</p>
      </div>
      <Link to={`/post/${id}`} className="btn btn-primary view-btn">Read More</Link>
      </div>
      )
}
