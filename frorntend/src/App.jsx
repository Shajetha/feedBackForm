import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';
import Register from './components/Register';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';


const isLoggedIn = () => !!localStorage.getItem('token');

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/feedback" element={isLoggedIn() ? <FeedbackForm /> : <Navigate to="/login" />} />
      <Route path="/all-feedbacks" element={<FeedbackList />} />
    </Routes>
  );
};

export default App;
