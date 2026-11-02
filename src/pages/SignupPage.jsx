import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { loginUser } = useStore();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      return;
    }

    loginUser({ name: 'Demo Shopper', email: formData.email });
    navigate('/');
  };

  return (
    <div className="page-block container auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Login</h2>

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
            placeholder="••••••••"
          />
        </label>

        <button type="submit" className="primary-btn full-width-btn">Login</button>

        <p className="switch-text">
          New to Shoply? <Link to="/signup">Create account</Link>
        </p>
      </form>
    </div>
  );
}
