import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
  axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/feedback`)
    .then(res => {
      console.log("Feedbacks fetched:", res.data);  // ADD THIS LINE
      setFeedbacks(res.data);
    })
    .catch(err => console.error('Error fetching feedbacks', err));
}, []);



  return (
    <div className="form-container">
      <h2>All Feedbacks</h2>
      {feedbacks.length === 0 && <p>No feedbacks yet.</p>}
      <ul>
        {feedbacks.map(f => (
          <li key={f._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <strong>{f.name}</strong> ({f.email})<br />
            <em>{new Date(f.date).toLocaleString()}</em><br />
            <p>{f.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
