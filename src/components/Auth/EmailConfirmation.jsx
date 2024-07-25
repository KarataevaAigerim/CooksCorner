import React, { useState } from 'react';

const EmailConfirmation = () => {
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [resendMessage, setResendMessage] = useState('');

  const confirmEmail = async (token) => {
    try {
      const response = await fetch(`https://cookscorner-production-9502.up.railway.app/api/v1/registration/confirmation?token=${token}`, {
        method: 'GET',
        headers: {
          'accept': 'text/plain',
        },
      });
      if (response.ok) {
        setConfirmationMessage('Email confirmed successfully!');
      } else {
        setConfirmationMessage('Failed to confirm email.');
      }
    } catch (error) {
      setConfirmationMessage('An error occurred. Please try again.');
    }
  };

  const resendConfirmationEmail = async () => {
    try {
      const response = await fetch('https://cookscorner-production-9502.up.railway.app/api/v1/registration/resend-confirmation', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'user@example.com' }), // Replace with the actual user email
      });
      if (response.ok) {
        setResendMessage('Confirmation email resent successfully!');
      } else {
        setResendMessage('Failed to resend confirmation email.');
      }
    } catch (error) {
      setResendMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="email-confirmation">
      <h1>Email Confirmation</h1>
      <button onClick={() => confirmEmail('your-token-here')}>Confirm Email</button>
      <p>{confirmationMessage}</p>
      <button onClick={resendConfirmationEmail}>Resend Confirmation Email</button>
      <p>{resendMessage}</p>
    </div>
  );
};

export default EmailConfirmation;