import React from 'react';
import { useNavigate } from 'react-router';

export default function Page2() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Navigate back</button>
    </div>
  );
}
