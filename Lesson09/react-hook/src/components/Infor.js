import React, { useContext } from 'react'
import { ThemeContext } from './DemoContext'
function Infor() {
    const theme = useContext(ThemeContext)
  return (
    <div className={theme}>
        duong dep dai vo dich sieu nhan vu tru dang cap vo doi
    </div>
  )
}

export default Infor