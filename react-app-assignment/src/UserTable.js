import users from "./users";

const UserTable = () => {
  return users.map((myData) => {
    return (
      <tr >
        <th  >{myData.id}</th>
        <th  >{myData.name}</th>
        <th  >{myData.email}</th>
        <th  >{myData.age}</th>
      </tr>
    );
  });
};

export default UserTable;
