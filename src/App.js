import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Call from './router';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello</h1>
        <nav>
          <Link to="/router">Router</Link>
        </nav>
        <Routes>
          <Route path="/router" element={<Call />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;