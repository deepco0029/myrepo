import React, { useRef, useState } from 'react'

export default function InputTest() {
  const [user, setVal] = useState({
    name: '',
    nick: '',
  })

  const { name, nick } = user
  const changeText = (e: any) => {
    const { value, name } = e.target
    setVal({
      ...user,
      [name]: value,
    })
  }
  const reset = () => {
    setVal({
      name: '',
      nick: '',
    })
    //input.current.focus()
  }
  return (
    <div>
      <input name='name' placeholder='이름' onChange={changeText} value={name} />
      <input name='nick' placeholder='닉네임' onChange={changeText} value={nick} />
      <div>
        <b>값: </b>
        {name} ({nick})
      </div>
      <button onClick={reset}>초기화</button>
    </div>
  )
}
