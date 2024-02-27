import React from "react";
import { useParams } from "react-router-dom";
const Profile = () => {
  const { username } = useParams();
  return (
    <div>
      <h4>Welcome!</h4>
      <h4>This is the profile of {username}</h4>
    </div>
  );
};

export default Profile;
