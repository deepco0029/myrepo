import React, { useCallback, useContext, useRef } from 'react'
import { IUserDefaultProps } from './types'
import { UserDispatch } from '../App'
import useInputs from '../hooks/useInput'

function CreateUser() {
  const [{ username, email }, onChange, reset] = useInputs({
    username: '',
    email: ''
  })
  const nextId = useRef(4)

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
        active: true
      }
    })
    nextId.current += 1
    reset()
  }, [username, email])

  const dispatch: any = useContext(UserDispatch)
  return (
    <div>
      <input name='username' placeholder='계정명' onChange={onChange} value={username} />
      <input name='email' placeholder='이메일' onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  )
}

export default React.memo(CreateUser)
