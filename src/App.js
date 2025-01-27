import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import DeleteGoalspAccount from './goalsp/DeleteGoalspAccount';
import DeleteAccountSuccess from './components/DeleteAccountSuccess';
import { Home } from './Home';
import { GoalspHome } from './goalsp/GoalspHome';

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/goalsp" element={<GoalspHome />} />
      <Route path="/req-del-account" element={<DeleteGoalspAccount />} />
      <Route path="/del-account-success" element={<DeleteAccountSuccess />} />
      <Route path="/del-account-failed" element={<DeleteGoalspAccount />} />
    </Routes>
  </BrowserRouter>
};

export default App;
