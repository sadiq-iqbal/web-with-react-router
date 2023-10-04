import img from '../src/assets/img.jpeg'
function Profile() {
  const profileData = {
    name: 'sadiq iqbal',
    username: 'Muhammadsadiq@gmail.com',
    email: 'john@example.com',
    bio: 'A software developer who loves coding and learning new technologies.',
  };

  return (
    <div className="bg-yellow-300 p-6 rounded-lg shadow-lg">
      <div className="text-center">
        <img
          src={img}
          alt="Profile"
          className="w-[50%]  rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold">{profileData.name}</h2>
        <p className="text-gray-600">@{profileData.username}</p>
      </div>
      <div className="mt-4 bg-yellow-200 p-2  text-center rounded-2xl">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <ul className="list-disc ml-6 mt-2">
          <li className=' list-none '>Email: {profileData.email}</li>
        </ul>
      </div>
      <div className="mt-4 text-center bg-yellow-200 p-2 rounded-2xl">
        <h3 className="text-lg font-semibold">Bio</h3>
        <p className="mt-2">{profileData.bio}</p>
      </div>
    </div>
  );
};


export default Profile
