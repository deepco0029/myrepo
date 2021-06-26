import React from 'react'

type StyleProps = {
  border: string
  padding: string
}

function Wrapper({ children }: any) {
  const style: StyleProps = {
    border: '2px solid black',
    padding: '16px',
  }
  return <div style={style}>{children}</div>
}
export default Wrapper
