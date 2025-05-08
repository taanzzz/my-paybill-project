import React, { useContext, useState } from 'react';
import { updatePassword, updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth, storage } from '../../firebase/firebase.init';
import { toast } from 'react-toastify';


const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [imageFile, setImageFile] = useState(null);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async () => {
    if (!imageFile) return null;
    const storageRef = ref(storage, `userImages/${user.uid}-${Date.now()}`);
    await uploadBytes(storageRef, imageFile);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let finalPhotoURL = photoURL;

      if (imageFile) {
        toast.info('📤 Uploading image...');
        finalPhotoURL = await handleImageUpload();
        setPhotoURL(finalPhotoURL);
         toast.success('✅ Image uploaded successfully!');
      }

      await updateProfile(auth.currentUser, { displayName: name, photoURL: finalPhotoURL });
      toast.success('✅ Profile info updated!');

      if (password) {
        await updatePassword(auth.currentUser, password);
         toast.success('🔐 Password updated successfully!');
      }

      
      setEditMode(false);
    } catch (err) {
     toast.error(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-2 p-6 bg-white rounded-xl shadow-md w-full sm:w-11/12 md:w-3/4 lg:w-2/3">
      <div className="flex flex-col items-center">
        <img
          src={photoURL || 'https://i.postimg.cc/NM8HM3G0/images.png'}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4 border-4 border-purple-500 object-cover"
        />
        {editMode ? (
          <form onSubmit={handleUpdate} className="w-full">
            <label className="text-sm font-extrabold">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="input input-bordered w-full mb-3"
              placeholder="Your Name"
            />

            <label className="text-sm font-extrabold">Photo URL (Optional)</label>
            <input
              type="text"
              value={photoURL}
              onChange={e => setPhotoURL(e.target.value)}
              className="input input-bordered w-full mb-3"
              placeholder="Photo URL"
            />

            <label className="text-sm font-extrabold">Upload New Photo</label>
            <input
              type="file"
              onChange={e => setImageFile(e.target.files[0])}
              className="file-input file-input-bordered w-full mb-3"
              accept="image/*"
            />

            <label className="text-sm font-extrabold">New Password (optional)</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="input input-bordered w-full mb-3"
              placeholder="New Password"
            />

            <div className="flex flex-col  gap-2 w-full">
              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto"
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                type="button"
                className="btn btn-secondary w-full sm:w-auto"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </div>

          </form>
        ) : (
          <div className="flex justify-center items-center  px-4 py-6 w-full">
            <div className="w-full max-w-md bg-blue-100 rounded-xl shadow-lg p-6 sm:p-8 text-center">
              <h2 className="text-2xl font-extrabold text-gray-800 mb-2">{user?.displayName || 'No Name'}</h2>
              <p className="text-gray-600 mb-1 text-sm font-bold sm:text-base">{user?.email}</p>
              <p className="text-xs font-extrabold text-gray-400 mb-4 break-all">UID: {user?.uid}</p>
              <button onClick={() => setEditMode(true)} className="btn btn-outline btn-primary font-extrabold w-full">
                Edit Profile
              </button>
            </div>
          </div>

        )}
      </div>
    </div>
  );

};

export default UserProfile;