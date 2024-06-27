import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';

const mockUsers = ['Arya Stark', 'Jon Snow', 'Daenerys Targaryen'];


test('render user list correctly', () => {
    render(<UserList users={mockUsers} onSelectUser={() => {}} />);

    mockUsers.forEach(user => {
        expect(screen.getByText(user)).toHaveBeenCalledWith();
    })
});
