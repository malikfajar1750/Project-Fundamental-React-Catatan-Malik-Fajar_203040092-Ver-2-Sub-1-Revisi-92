import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { deleteNote, getAllNotes } from '../utils/data';
 
function HomePageNote() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
 
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        notes: getAllNotes(),
        keyword: props.defaultKeyword || '',
      }
   
      this.onDeleteHandler = this.onDeleteHandler.bind(this);
      this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
     
    }
   
    onDeleteHandler(id) {
      deleteNote(id);
   
      // update the note state from data.js
      this.setState(() => {
        return {
          notes: getAllNotes(),
        }
      });
    }
   
    onKeywordChangeHandler(keyword) {
        this.setState(() => {
          return {
            keyword,
          }
        });
     
        this.props.keywordChange(keyword);
      }
 
    render() {
        const notes = this.state.notes.filter((note) => {
          return note.title.toLowerCase().includes(
            this.state.keyword.toLowerCase()
          );
        });

        return (
          <section>
            <h2 className='daftar-Catatan'>Daftar Catatan</h2>
            <NoteList notes={notes} onDelete={this.onDeleteHandler} />
          </section>
        )
    }
}
HomePage.propTypes = {
  defaultKeyword: PropTypes.any,
  keywordChange: PropTypes.any.isRequired,
 }
 HomePage.defaultProps = {
  defaultKeyword: '',
};
export default HomePageNote;