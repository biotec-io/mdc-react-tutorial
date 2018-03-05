import React from 'react';

const Grid = ({ children }) => (
  <div className="mdc-layout-grid">
    <div className="mdc-layout-grid__inner">
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--align-middle mdc-layout-grid__cell--span-4">
        {children}
      </div>
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--align-middle mdc-layout-grid__cell--span-4">
        {children}
      </div>
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--align-middle mdc-layout-grid__cell--span-4">
        {children}
      </div>
    </div>
  </div>
);

export default Grid;
