import React from 'react'

const ToggleTheme = React.createContext({
  isDark: false,
  onChangeTheme: () => {},
})

export default ToggleTheme
