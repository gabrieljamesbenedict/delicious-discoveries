import { useState } from "react";
import { postMessage } from "../Services/messageService.js";
import "../Styles/ContactUs.css";

function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            await postMessage({ name, email, message });
            setStatus("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            console.error(err);
            setStatus("Failed to send message. Try again.");
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            placeholder="Write your message here"
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
                {status && <p className="status-message">{status}</p>}
            </div>
        </section>
    );
}

export default ContactUs;
