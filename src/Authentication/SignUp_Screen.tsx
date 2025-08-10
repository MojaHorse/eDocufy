import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import logo from '../assets/images/logopng.png';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

interface FormData {
  name: string;
  surname: string;
  idNumber: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

function SignUpScreen() {
  const [form, setForm] = useState<FormData>({
    name: '',
    surname: '',
    idNumber: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const validateForm = () => {
    const { name, surname, idNumber, phone, password, confirmPassword } = form;
    if (!name || !surname || !idNumber || !phone || !password || !confirmPassword)
      return 'Please fill in all fields.';
    if (!/^\d{13}$/.test(idNumber)) return 'ID Number must be 13 digits.';
    if (!/^\+?\d{10,15}$/.test(phone)) return 'Invalid phone number.';
    if (password.length < 8) return 'Password must be at least 8 characters.';
    if (password !== confirmPassword) return 'Passwords do not match.';
    return null;
  };

  const handleRegister = async () => {
    setError('');
    const formError = validateForm();
    if (formError) {
      setError(formError);
      return;
    }

    setLoading(true);

    try {
      const email = `user${form.idNumber}@example.com`;

      const { data, error } = await supabase.auth.signUp({
        email,
        password: form.password,
        options: {
          data: {
            name: form.name,
            surname: form.surname,
            idNumber: form.idNumber,
            phone: form.phone,
          },
        },
      });

      if (error) throw error;

      alert('Registration successful! Please check your email to confirm.');

      navigate('/login');
    } catch (err: any) {
      setError(err.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full font-sans">
      <div className="flex flex-col justify-center p-12 w-full md:w-1/2 bg-white">
        <div className="flex justify-between mb-8 items-start">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 mb-2 object-contain" />
            </Link>
          </div>
          <div className="flex gap-6 text-blue-600 font-medium text-sm">
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/about" className="hover:underline">About</Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2">Create new account.</h2>
        <p className="mb-6 text-gray-700">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Log in
          </Link>
        </p>

        {error && <p className="text-red-500 font-semibold mb-4">{error}</p>}

        <div className="flex gap-4 mb-4">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
          <input
            name="surname"
            placeholder="Surname"
            value={form.surname}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        <input
          name="idNumber"
          placeholder="ID Number"
          value={form.idNumber}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        />

        <input
          name="phone"
          placeholder="Phone (+27...)"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        />

        <div className="flex gap-4 mb-4">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        <button
          onClick={handleRegister}
          disabled={loading}
          className={`w-full py-3 rounded-2xl text-white font-semibold transition ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </div>

      <div className="hidden md:block w-1/2 bg-blue-600"></div>
    </div>
  );
}

export default SignUpScreen;
