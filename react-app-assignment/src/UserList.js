
import users from "./users";

const UserList = () => {
  return users.map((myData) => {
    return (
      <ul>
        <li>{myData.id}</li>
        <li>{myData.name}</li>
        <li>{myData.email}</li>
        <li>{myData.age}</li>
        <br/>
      </ul>
      
    );
  });
};

export default UserList;
