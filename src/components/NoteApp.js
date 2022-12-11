import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
 
 
function NoteApp() {
  return (
    <div>
         <main>
        <h1 className='note-catatan'>Catatan Ku</h1>
        <Navigation />
   
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/Notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}
 
export default NoteApp;