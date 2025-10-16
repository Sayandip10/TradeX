import React from 'react';
import Profile from './Profile'; // <-- IMPORT THE NEW COMPONENT

const TopBar = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            borderBottom: '1px solid #ddd',
            backgroundColor: '#fff'
        }}>
            <div>
                {/* You can put your logo or other left-side items here */}
                <h4>My Dashboard</h4>
            </div>
            
            <div>
                {/* --- REPLACE THE OLD PLACEHOLDER WITH THIS --- */}
                <Profile />
            </div>
        </div>
    );
};

export default TopBar;
