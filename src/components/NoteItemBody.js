import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/data';

function NoteItemBody({ id, title, createdAt, body }) {
 return (
   <div className='Note_body'>
     <Link to={`/Notes/${id}`}><h4 className='title_Note'>{title}</h4></Link>
     <h6 className='Show_Note'>{showFormattedDate(createdAt)}</h6>
     <p className='Body_Note'> {body}</p>
   </div>
 );
}

NoteItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
 
}

export default NoteItemBody;