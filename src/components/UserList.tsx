import React, { useEffect } from "react";

type UserProps = {
    id: number,
    username: string,
    email: string
}

function User({ user, onDelete, onToggle }: any) {
    useEffect(() => {
        // console.log('컴포넌트가 화면에 나타남');
        // console.log(user)        
      },[]);
    return (
        <div>
            <b style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
            }}
                onClick={() => onToggle(user.id)}
            >{user.username}</b> <span>({user.email})</span>
            <button onClick={()=> onDelete(user.id)}>삭제</button>
        </div>
      );
}

function UserList ({users, onDelete, onToggle}:any) {

    return (
        <div>
          {users.map((user:object, index:number) => (
              <User key={index} user={user} onDelete={onDelete} onToggle={onToggle}/>
          ))}
        </div>
      );
}

export default React.memo(UserList)