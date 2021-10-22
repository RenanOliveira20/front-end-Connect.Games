import React from 'react';
import api from '../../api/api';

const Profile = () => {
    const profile = async ()=> {
       try {
           const profile = await api.getProfile();
       } catch (error) {
           console.log(error)
       }
    }
    profile()
    return (
        <div className='bg-black vh-100'>
            
        </div>
    );
}

export default Profile;
