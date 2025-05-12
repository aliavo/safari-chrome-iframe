import * as React from 'react';
import { Route, Routes } from 'react-router';

import Welcome from './welcome';
import Page2 from './page2';
import Page4 from './page4';
import Page3 from './page3';

const PageNotFound = () => (
  <div>404</div>
);

export default function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route caseSensitive={true} path="/" element={<Welcome />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
    </React.StrictMode>
  );
}
