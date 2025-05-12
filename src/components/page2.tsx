import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Page2() {
  const navigate = useNavigate();
  const [src, setSrc] = useState('https://httpstat.us/200');

  return (
    <div>
      <button onClick={() => navigate(-1)}>Navigate back</button>
      <button onClick={() => navigate('/page3', { replace: true })}>Navigate to page 3</button>
      <button onClick={() => setSrc('https://httpstat.us/302')}>Change src</button>
      <button onClick={() => setSrc('https://httpstat.us/404')}>Change src</button>
      <iframe title="iframe" width="400" height="400" src={src}></iframe>
    </div>
  );
}
