import React from 'react';
import { addNote } from '../utils/data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
 
function AddPage() {
  const navigate = useNavigate();
 
  function onAddNoteHandler(note) {
    
    addNote(note);
    navigate('/');
  }

 
  return (
    <div className='add-catatan'>
      <h2>Tambah Catatan</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  )
}
 
export default AddPage;