// AuthenticationModal.tsx
import React, { useState, useRef } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (code: string) => void;
  onResend: () => void;
}

const AuthenticationModal: React.FC<Props> = ({ isOpen, onClose, onVerify, onResend }) => {
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const fullCode = code.join('');
    onVerify(fullCode);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 text-white rounded-xl p-8 shadow-xl w-[90%] max-w-md relative">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2">Authentication Code</h2>
        <p className="text-gray-400 mb-6">Enter the 6-digit code below.</p>
        <div className="flex justify-center gap-3 mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-14 text-3xl text-center border-2 border-blue-500 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
        </div>
        <button onClick={handleVerify} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg mb-3">
          Verify
        </button>
        <button onClick={onClose} className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg text-lg mb-3">
          Cancel
        </button>
        <p className="text-sm text-center">
          Didn't get the code?{' '}
          <span onClick={onResend} className="text-blue-400 hover:text-blue-600 underline cursor-pointer">
            Resend code
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthenticationModal;
