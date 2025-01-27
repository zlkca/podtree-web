import React, { useState } from 'react';
import { ApiUrl } from '../const';

const DeleteGoalspAccount = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${ApiUrl}/req-del-account`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('A verification email has been sent to your email address. Please check your inbox.');
      } else {
        const { error } = await response.json();
        setMessage(error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="delete-account-container">
      <h2>Delete Goalsp App Account</h2>
      <p>Enter your email address to verify and delete your account.</p>
      <form onSubmit={handleDeleteAccount}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Delete Account'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteGoalspAccount;
