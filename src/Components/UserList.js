import React from "react";
import Header from "./Header";


function UserList({ data }) {
  return (
    <>
      <Header />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact No.</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;
