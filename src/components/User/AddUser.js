import React, { useState } from "react";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Card from "../UI/Card";
const AddUser = (props) => {
    const [valueUser, setValueUser] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('facebook');
    const [selectedLocation, setSelectedLocation] = useState('Ninh Thuan');
    const [inputUrl, setInputUrl] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const [selectedTime, setSelectedTime] = useState(new Date());
    const addUserHandler = (e) => {
        e.preventDefault();
        const newUser = {
            username: valueUser,
            company: selectedCompany,
            location: selectedLocation,
            url: inputUrl,
            textarea: textareaValue,
            time: selectedTime,
        };
        props.onAddUser(newUser);
    }

    const inputChangeName = (event) => {
        setValueUser(event.target.value);
    };
    const timeChangeHandler = (newTime) => {
        setSelectedTime(newTime);
    };
    return (
        <Card>
            <h1 className="title-form">Form Add User</h1>
            <form className="form-user" action="" onSubmit={addUserHandler}>
                <div className="input-user">
                    <label htmlFor="username">User - name</label>
                    <br />
                    <input type="text" name="" id="username" onChange={inputChangeName} />
                </div>
                <div className="input-information">
                    <div className="selection-wrapper">
                        <div className="input-form">
                            <label htmlFor="company">Chose Company</label>
                            <br />
                            <select
                                id="company"
                                name="company"
                                value={selectedCompany}
                                onChange={(e) => setSelectedCompany(e.target.value)}
                            >
                                <option value="facebook">Facebook</option>
                                <option value="google">Google</option>
                                <option value="github">Github</option>
                                <option value="netflix">Netflix</option>
                            </select>
                        </div>
                        <div className="input-form">
                            <label htmlFor="location">Chose Location</label>
                            <br />
                            <select id="location" name="location"
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                            >
                                <option value="ninhthuan">Ninh Thuan</option>
                                <option value="tphcm">TP HCM</option>
                                <option value="binhthuan">Binh Thuan</option>
                                <option value="khanhhoa">Khanh Hoa</option>
                            </select>
                        </div>
                    </div>
                    <div className="time-url">
                        <div className="url">
                            <label htmlFor="url">Url</label>
                            <input type="text" name="" id="url" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} />
                        </div>
                        <div className="time">
                            <label htmlFor="time">Time</label>
                            <DateTime
                                value={selectedTime}
                                onChange={timeChangeHandler}
                            />
                        </div>
                    </div>
                </div>
                <textarea name="" id="" cols="40" rows="5"
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                >
                </textarea>
                <br />
                <button type="submit">Add User</button>
            </form>
        </Card>
    )
};
export default AddUser;



