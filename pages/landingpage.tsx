import React from 'react';
import mobileLabImage from '/greenhomeplant.png';

const LandingPage: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1>Flow Bus: Futuristic Lab on Wheels</h1>
            <div
                style={{
                    backgroundImage: `url(${mobileLabImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: 'auto',
                    paddingTop: '56.25%', 
                    borderRadius: '8px',
                    margin: '20px 0'
                }}
                alt="Flow Bus - Futuristic Lab on Wheels"
            />
            <p>
                Welcome to Edodwaja’s “Futuristic Lab On Wheels,” a cutting-edge mobile laboratory designed to bring modern technology directly to students. Our Flow Bus is equipped with the latest technological devices and gadgets, providing a practical and engaging learning experience for students in schools, colleges, and communities.
            </p>

            <h2>Concept and Impact</h2>
            <p>
                The Flow Bus is more than just a mobile lab; it's a revolution in education. By taking the lab to students, we remove barriers to access, making advanced technology education available to everyone. This initiative helps spark creativity and innovation among students, preparing them to become leaders in a tech-driven future.
            </p>

            <h2>Benefits</h2>
            <ul>
                <li><strong>Hands-On Learning:</strong> Students get to interact with the latest technologies, which enhances their understanding and retention of complex concepts.</li>
                <li><strong>Increased Accessibility:</strong> By bringing the lab to various locations, we ensure that all students, regardless of their geographic location, have access to state-of-the-art educational resources.</li>
                <li><strong>Encourages Innovation:</strong> The hands-on experience fosters a culture of innovation and creativity, encouraging students to think outside the box and develop new ideas.</li>
                <li><strong>Future Leaders:</strong> By nurturing technological skills and creativity, we help students become future leaders in the tech industry.</li>
            </ul>

            <h2>Capacity</h2>
            <p>The Flow Bus can accommodate 30-35 people at a time, making it ideal for group sessions and collaborative learning.</p>

            <h2>Target Audience</h2>
            <p>Our primary audience includes students from schools, colleges, and community groups who are eager to learn about and engage with modern technology.</p>

            <h2>Point of Contact</h2>
            <p>
                For more information or to schedule a visit from the Flow Bus, please contact us at:
            </p>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:info@edodwaja.com">info@edodwaja.com</a></li>
                <li><strong>Phone:</strong> (123) 456-7890</li>
                <li><strong>Website:</strong> <a href="http://www.edodwaja.com" target="_blank" rel="noopener noreferrer">www.edodwaja.com</a></li>
            </ul>

            <h2>Aligned Programs</h2>
            <p>The Flow Bus aligns with various educational programs and initiatives, such as STEM (Science, Technology, Engineering, and Mathematics) education, tech innovation workshops, and community outreach programs.</p>

            <h2>Zones in the Flow Bus</h2>
            <p>The Flow Bus features several dedicated zones, each designed to enhance the learning experience:</p>
            <ul>
                <li><strong>Technology Zone:</strong> Equipped with the latest gadgets and devices for hands-on experimentation.</li>
                <li><strong>Innovation Zone:</strong> A creative space where students can brainstorm and develop new ideas.</li>
                <li><strong>Learning Zone:</strong> A classroom-like setting for instructional sessions and group discussions.</li>
                <li><strong>Collaboration Zone:</strong> A space for students to work together on projects and share knowledge.</li>
            </ul>
            <p>Join us on the Flow Bus and experience the future of education today!</p>
        </div>
    );
};

export default LandingPage;
