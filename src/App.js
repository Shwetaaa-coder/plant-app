import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import PlantIdentifier from './components/PlantIdentifier';
import PlantDetails from './components/PlantDetails';
import MyGarden from './components/MyGarden';
import SmartReminder from './components/SmartReminder';
import CommunityPage from './components/CommunityPage';
import PlantLibrary from './components/PlantLibrary';
import PlantResult from './components/PlantResult';
import Journal from './components/Journal';
import Login from './components/Login';
import ChatBot from './components/ChatBot';

import { useAuth } from './context/AuthContext'; // ✅ Import the hook

function App() {
  const { user } = useAuth(); // ✅ Get the logged-in user

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/identify" element={<PlantIdentifier />} />
        <Route path="/details/:id" element={<PlantDetails />} />
        <Route path="/library" element={<PlantLibrary />} />
        <Route path="/result" element={<PlantResult />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Protected routes below */}
        <Route path="/my-garden" element={user ? <MyGarden /> : <Navigate to="/login" />} />
        <Route path="/reminders" element={user ? <SmartReminder /> : <Navigate to="/login" />} />
        <Route path="/journal" element={user ? <Journal /> : <Navigate to="/login" />} />

        {/* Optional: Redirect unknown paths to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

