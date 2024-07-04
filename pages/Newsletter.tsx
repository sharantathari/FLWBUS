// Newsletter.js
import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle the form submission logic here
        // For example, send the email to your backend server
        // Here, we just simulate a successful submission
        setMessage('Thank you for subscribing!');
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', marginTop: '20px' }}>
            <h2>Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: '10px', width: '80%', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px', borderRadius: '4px', border: 'none', backgroundColor: 'green', color: 'white' }}>Subscribe</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Newsletter;
