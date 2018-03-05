import React from 'react';

const Card = ({ children }) => (
  <div className="mdc-card my-card">
    <div className="mdc-card__media">
      <div className="mdc-card__content">
        <div className="mdc-card__primary-action">
          <h2 className="mdc-typography--title">{children}</h2>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
