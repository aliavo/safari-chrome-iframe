import React from 'react';
import { useNavigate } from 'react-router';

export default function Page3() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/page4')}>Navigate to page 4</button>
    </div>
  );
}
