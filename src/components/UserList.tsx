import React from "react";

interface UserListProps {
    users: string[];
    onSelectUser: (user: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onSelectUser }) => {
    return (
        <div style={{ width: '200px', borderRight: '1px solid #ccc' }}>
            <ul>
                {users.map((user) => (
                    <li key={user} onClick={() => onSelectUser(user)} style={{ cursor: 'pointer', padding: '8px 16px' }}>
                        {user}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default UserList;