// @ts-nocheck
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Table } from './components/Table';

import pages from '../pages.json';

export function initReact() {
  const root = createRoot(document.getElementById('reactTable'));
  if (root) {
    root.render(<Table data={pages} />);
  }
}

