import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthenticationModal from './AuthenticationModal';

interface LocationState {
  phoneNumber?: string;
}

const VerificationScreen: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { phoneNumber } = (location.state || {}) as LocationState;

  useEffect(() => {
    console.log(`Verification screen loaded for phone number: ${phoneNumber || 'N/A'}`);
  }, [phoneNumber]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/login');
  };

  const handleVerifyCode = async (code: string) => {
    console.log('Verifying code:', code);
    console.log('For phone number:', phoneNumber);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (code === '123456') {
        alert('Phone verification successful!');
        setIsModalOpen(false);
        navigate('/login');
      } else {
        alert('Verification failed: Incorrect code.');
      }
    } catch (error) {
      console.error('Error during verification:', error);
      alert('An error occurred during verification.');
    }
  };

  const handleResendCode = async () => {
    console.log('Attempting to resend code to phone number:', phoneNumber);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Verification code resent to your phone!');
    } catch (error) {
      console.error('Error resending code:', error);
      alert('An error occurred while resending the code.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-gray-800">
      {!isModalOpen && (
        <p className="text-center">Your verification is ongoing. Please check your SMS for the code.</p>
      )}
      <AuthenticationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onVerify={handleVerifyCode}
        onResend={handleResendCode}
      />
    </div>
  );
};

export default VerificationScreen;
