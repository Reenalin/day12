import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Call from './router';
import Forms from './forms';

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

        <Forms/>
      </div>
    </BrowserRouter>
  );
}



export default App;