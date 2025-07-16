import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/feedback`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStatus('Feedback submitted successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus(err.response?.data?.error || 'Failed to submit feedback');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Submit</button>
        <p className="text-success">{status}</p>
      </form>
      <p><a href="/all-feedbacks">View All Feedbacks</a></p>

      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}
