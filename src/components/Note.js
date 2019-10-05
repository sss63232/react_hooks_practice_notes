import React, { useContext } from 'react'
import NotesContext from '../context/notes-context'
import { useReadOnly } from '../context/readOnlyContext'

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext)
  const { isReadOnly } = useReadOnly()

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button
        disabled={isReadOnly}
        onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}
      >
        x
      </button>
    </div>
  )
}

export { Note as default }
