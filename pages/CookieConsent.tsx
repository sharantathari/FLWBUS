// CookieConsent.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consent = Cookies.get('cookieConsent');
        if (!consent) {
            setShowConsent(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set('cookieConsent', 'true', { expires: 365 });
        setShowConsent(false);
    };

    return (
        showConsent && (
            <div style={{ position: 'fixed', bottom: '10px', width: '100%', backgroundColor: 'rgba(0,0,0,0.8)', color: 'white', padding: '10px', textAlign: 'center' }}>
                <p>We use cookies to improve your experience on our site. By using our site, you accept our use of cookies.</p>
                <button onClick={handleAccept} style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>Accept</button>
            </div>
        )
    );
};

export default CookieConsent;