import axios from 'axios';
import React, {useEffect, useState} from 'react';

const UserList = () => {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(rep => {
            setUserList(rep.data)
        })
        .catch(err => {
            console.log('Erreur lors de la récupération des utilisateurs: ', err)
        })
    }, [])

    return (
    <div className='usersContent'>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {userList.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
    );
}

export default UserList;
