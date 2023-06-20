import React ,{FC}from 'react'
type Props={
    textColor:string,
    children:React.ReactNode
}
function Button ({textColor,children}:Props) {
  return (
    <button style={{"color":textColor}}>{children}</button>
  )
}

export default Button