import React from 'react';

const Header = ({ children }) => (
  <header className="mdc-toolbar">
    <div className="mdc-toolbar__row">
      <section className="mdc-toolbar__section">
        <span className="mdc-toolbar__title">{children}</span>
      </section>
    </div>
  </header>
);

export default Header;
