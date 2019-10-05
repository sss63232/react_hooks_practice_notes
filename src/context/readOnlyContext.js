import React from 'react'

/**
 * use React Context effectively
 * @see https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */

// context
const ReadOnlyContext = React.createContext()

// Provider
const ReadOnlyProvider = props => {
  const {
    defaultValue,
    ...restProps
  } = props

  const [isReadOnly, setIsReadOnly] = React.useState(defaultValue || false)

  const value = React.useMemo(
    () => ({
      isReadOnly,
      setIsReadOnly
    }),
    [isReadOnly]
  )

  return (
    <ReadOnlyContext.Provider
      value={value}
      {...restProps}
    />
  )
}

// Consumer for functional-component,
// It's a custom hook
const useReadOnly = () => {
  const context = React.useContext(ReadOnlyContext)
  if (!context) {
    throw new Error('useReadOnly must be used within a ReadOnlyProvider')
  }

  const { isReadOnly, setIsReadOnly } = context

  const setReadOnlyTo = React.useCallback(
    val => setIsReadOnly(val),
    [setIsReadOnly]
  )

  return {
    isReadOnly,
    setReadOnlyTo
  }
}

// Consumer for class-component
// It's a hoc
const withReadOnlyContext = WrappedCompo => {
  const WithReadOnlyCompo = props => {
    const contextValue = useReadOnly()
    return (
      <WrappedCompo
        {...props}
        readOnlyContext={contextValue}
      />
    )
  }

  return WithReadOnlyCompo
}

export {
  ReadOnlyProvider,
  useReadOnly,
  withReadOnlyContext
}
