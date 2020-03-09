import React from 'react';

const ErrorMessage = ({ hasError, message = '' }) =>
  hasError ? (
    <p className="error-message " style={{ color: '#c20b0b' }}>
      {message}
    </p>
  ) : (
    <p style={{ visibility: 'hidden' }}>Error!</p>
  );

export default ErrorMessage;
