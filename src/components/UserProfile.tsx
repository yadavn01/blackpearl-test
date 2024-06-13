import React from "react";

interface UserProfileProps {
    selectedUser: string | null;
}

const UserProfile: React.FC<UserProfileProps> = ({selectedUser}) => {
    return (
        <div style={{ flex: 1, padding: '16px' }}>
            {selectedUser ? (
                <h2>{selectedUser}'s Profile</h2>
            ) : (
                <p>Please select a person to show their profile</p>
            )}
        </div>
    );
}
export default UserProfile;