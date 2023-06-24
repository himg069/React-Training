import React from "react";
import UserTable from "./UserTable";
import UserList from "./UserList";

function App() {
  return (
    <div className='container'>
      <h1>User Table</h1>
      <hr />
      <table className='table' >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody className="mytable">{UserTable()}</tbody>
      </table>

      <hr />
      <h1>User List</h1>
      <ul>{UserList()}</ul>
    </div>
  );
}

export default App;
