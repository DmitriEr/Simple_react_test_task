import React, { memo } from "react";

interface IUserInfoProps {
  name: string;
  phone: string;
}

const UserInfo = memo(({ name, phone }: IUserInfoProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{phone}</td>
        </tr>
      </tbody>
    </table>
  );
});

export { UserInfo };
