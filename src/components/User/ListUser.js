import React from "react";
import Card from "../UI/Card";

const ListUser = (props) => {
    return (
        <Card>
            <h2>List of Users</h2>
            <ul>
                {props.users.map((user, index) => (
                    <li key={index}>
                        <p>Username: {user.username}</p>
                        <p>Company: {user.company}</p>
                        <p>Location: {user.location}</p>
                        <p>URL: {user.url}</p>
                        <p>Time: {user.time.toString()}</p>
                        <p>Textarea: {user.textarea}</p>
                    </li>
                ))}
            </ul>
        </Card>
    )
};
export default ListUser;
