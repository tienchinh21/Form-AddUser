import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import ListUser from "./components/User/ListUser";

function App() {
    const [users, setUsers] = useState([]);
    const addUserHandler = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    }
    return (
        <div className="App">
            <AddUser onAddUser={addUserHandler} />
            <ListUser users={users} />
        </div>
    );
}
export default App;
