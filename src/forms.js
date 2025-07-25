import React, { useState } from 'react';

function Forms() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label><br />
            <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label><br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Forms;