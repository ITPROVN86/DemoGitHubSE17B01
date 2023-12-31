import React, { useState, useEffect } from "react";
import { Promise } from "bluebird";

Promise.config({ cancellation: true });

function fetchUser() {
    console.count("fetching user");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Adam" });
        }, 1000);
    });
}

function User() {
    const [id, setId] = useState("loading...");
    const [name, setName] = useState("loading...");

    useEffect(() => {
        const promise = fetchUser().then((user) => {
            setId(user.id);
            setName(user.name);
        });
        return () => {
            promise.cancel();
        };
    },[]);

    return (
        <>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </>
    );
}

export default User;  