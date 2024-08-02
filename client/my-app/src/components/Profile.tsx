import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { updateUser } from '../redux/slices/userSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/profile');
        dispatch(updateUser(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserProfile();
  }, [dispatch]);

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put('/profile/edit', { name, email, bio });
      dispatch(updateUser({ name, email, bio }));
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {editing ? (
        <form onSubmit={handleEdit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.bio}</p>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
