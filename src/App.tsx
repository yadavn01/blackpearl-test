import { useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'
import users from './data/users';

function App() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <>
      <h1>BlackPearl test</h1>
      <div style={{ display: 'flex', height: '100vh' }}>
      <UserList users={users} onSelectUser={setSelectedUser} />
      <UserProfile selectedUser={selectedUser} />
    </div>


    </>
  )
}

export default App
