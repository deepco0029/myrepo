import React, { useEffect, useContext } from 'react'
import { IUserItemProps, IUsersProps, IUserProps } from './types'
import { UserDispatch } from '../App'

const User = React.memo(({ user }: IUserProps) => {
  const dispatch: any = useContext(UserDispatch)
  useEffect(() => {
    // console.log('컴포넌트가 화면에 나타남');
    // console.log(user)
  }, [])
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => {
          dispatch({ type: 'TOGGLE_USER', id: user.id })
        }}
      >
        {user.username}
      </b>{' '}
      <span>({user.email})</span>
      <button onClick={() => dispatch({ type: 'DELETE_USER', id: user.id })}>삭제</button>
    </div>
  )
})

function UserList({ users }: IUsersProps) {
  return (
    <div>
      {users.map((user: IUserItemProps, index: number) => (
        <User key={index} user={user} />
      ))}
    </div>
  )
}

export default React.memo(UserList)
