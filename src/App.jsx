import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Budget from "./Pages/Budget";
import Reports from "./Pages/Reports";
import Transactions from "./Pages/Transactions";
import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/login" element={<Login />} />

      {/* All Dashboard Pages */}
      <Route
        path="*"
        element={
          <>
            <Header />
            <div className="app">
              <Sidebar />

              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/budget" element={<Budget />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>

                <Footer />
              </main>
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default App;
