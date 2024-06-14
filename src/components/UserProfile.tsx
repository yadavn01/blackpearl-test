import React, { useState } from "react";

interface UserProfileProps {
    selectedUser: string | null;
}

const UserProfile: React.FC<UserProfileProps> = ({selectedUser}) => {

    const [addressLine1, setAddressLine1] = useState<string>('Red Keep');
    const [addressLine2, setAddressLine2] = useState<string>('Kings Landing');
    const [phoneNumber, setPhoneNumber] = useState<string>('06 384 3732');
    const [mobileNumber, setMobileNumber] = useState<string>('021 9763 151');
    const [banner, setBanner] = useState<boolean>(false);
    
    return (
        <div style={{ flex: 1, padding: '16px' }}>
      <div style={{ display: 'flex', marginBottom: '16px' }}>
        <h2 style={{ flex: 1 }}>{selectedUser}</h2>
        <h2 style={{ flex: 1 }}>Signature Preview</h2>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, marginRight: '16px' }}>
          <label>Address Line 1</label>
          <input
            type="text"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
          />
          <label>Address Line 2</label>
          <input
            type="text"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
          />
          <label>Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
          />
          <label>Mobile Number</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
          />
          <label>Banner</label>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <button onClick={() => setBanner(true)} style={{ marginRight: '8px' }}>ON</button>
            <button onClick={() => setBanner(false)}>OFF</button>
          </div>
        </div>
        <div style={{ flex: 1, padding: '16px' }}>
          <p>{selectedUser}</p>
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
          <p>P: {phoneNumber}</p>
          <p>M: {mobileNumber}</p>
          <p>Banner: {banner ? 'ON' : 'OFF'}</p>
        </div>
      </div>
    </div>
    );
}
export default UserProfile;