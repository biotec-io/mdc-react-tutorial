import React from 'react';

const Grid = ({ children }) => (
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
        {children}
      </div>
    </div>
  </div>
);

export default Grid;
