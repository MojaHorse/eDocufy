import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../public/assets/images/logopng.png';

function LoginScreen() {
  const [form, setForm] = useState({ idNumber: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const validateForm = () => {
    const { idNumber, password } = form;
    if (!idNumber || !password) return 'Please fill in all fields.';
    if (!/^\d{13}$/.test(idNumber)) return 'ID must be 13 digits.';
    // Add more validation if needed
    return null;
  };

  const handleLogin = async () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://docufy-backend.vercel.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idNumber: form.idNumber,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed.');
      }

      // Save token/session to localStorage (adjust if backend returns JWT or session token)
      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      navigate('/home'); // or dashboard or wherever
    } catch (err: any) {
      setError(err.message || 'Login failed. Check ID and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full font-sans overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-12 py-10 bg-white z-10">
        <div className="flex justify-between items-start mb-10">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 object-contain" />
          </Link>
          <div className="flex gap-6 text-blue-600 font-medium text-sm">
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/about" className="hover:underline">About</Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
        <p className="mb-6 text-gray-700">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Register
          </Link>
        </p>

        {error && <p className="text-red-500 font-semibold mb-4">{error}</p>}

        <input
          name="idNumber"
          placeholder="ID Number"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          value={form.idNumber}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          value={form.password}
          onChange={handleChange}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full py-3 rounded-2xl text-white font-semibold transition ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>

      <div className="hidden md:flex w-1/2 relative overflow-hidden items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700"></div>
    </div>
  );
}

export default LoginScreen;
