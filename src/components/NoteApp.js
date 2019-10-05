import React, { useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'
import { ReadOnlyProvider } from '../context/readOnlyContext'
import ReadOnlyToggle from './ReadOnlyToggle'

const NoteApp = () => {
  /** useReducer usage */
  const [notes, dispatch] = useReducer(notesReducer, [])

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))

    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  /** custom hooks usage */
  const position = useMousePosition()

  return (
    <ReadOnlyProvider>
      {/*
        * use React Context effectively
        * @see https://kentcdodds.com/blog/how-to-use-react-context-effectively
      */}
      <ReadOnlyToggle />

      <NotesContext.Provider value={{ notes, dispatch }}>
        <div>
          current mouse position: {position.x} - {position.y}
        </div>

        <h1>Notes</h1>
        <NoteList />
        <AddNoteForm />

      </NotesContext.Provider>
    </ReadOnlyProvider>
  )
}

export { NoteApp as default }
