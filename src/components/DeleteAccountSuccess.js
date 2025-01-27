import React from 'react';
import './DeleteAccountSuccess.css'; // Optional for styling

const DeleteAccountSuccess = () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <h1>Account Deletion Request Submitted</h1>
        <p>
          Your request to delete your account has been successfully submitted. 
          Your account will be permanently removed after <strong>30 days</strong>.
        </p>
        {/* <p>
          If you change your mind, you can log back into your account within the next 
          30 days to cancel the deletion request.
        </p> */}
        <p>Thank you for using our services!</p>
      </div>
    </div>
  );
};

export default DeleteAccountSuccess;
