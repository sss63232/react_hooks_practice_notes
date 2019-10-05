import React from 'react'
import { useReadOnly } from '../context/readOnlyContext'

const ReadOnlyToggle = props => {
  const {
    isReadOnly,
    setReadOnlyTo
  } = useReadOnly()

  return (
    <button
      onClick={() => setReadOnlyTo(!isReadOnly)}
    >
   toggle isReadOnly
    </button>
  )
}

export { ReadOnlyToggle as default }
