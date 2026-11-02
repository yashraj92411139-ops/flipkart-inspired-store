import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { signupUser } = useStore();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      return;
    }

    signupUser(formData);
    navigate('/');
  };

  return (
    <div className="page-block container auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Create account</h2>

        <label>
          Full name
          <input
            type="text"
            value={formData.name}
            onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
            placeholder="Jane Doe"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={formData.email}
            onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={formData.password}
            onChange={(event) => setFormData((current) => ({ ...current, password: event.target.value }))}
            placeholder="Create a password"
          />
        </label>

        <button type="submit" className="primary-btn full-width-btn">Sign up</button>

        <p className="switch-text">
          Already a customer? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
