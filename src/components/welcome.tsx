import React from 'react';
import { useNavigate } from 'react-router';

export default function Hello() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/page2')}>Navigate to page 2</button>
    </div>
  );
}
