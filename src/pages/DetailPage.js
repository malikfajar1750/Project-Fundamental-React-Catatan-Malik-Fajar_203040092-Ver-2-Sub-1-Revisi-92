import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import NoteDetail from '../components/NoteDetail';
import { getNote } from '../utils/data';

function DetailPageNote() {
  const { id } = useParams();
  return <DetailPage id={String(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    };
  }

  render() {
    if (this.state.note === null) {
      return <p>Data Tidak Di Temukan</p>;
    }


    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}
DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
 }
export default DetailPageNote;
