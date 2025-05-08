import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';





const LoginForm = () => {
  const { user, login, register, logout, googleSignIn,resetPassword } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photoURL: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
         toast.success('✅ Logged in successfully!');
      } else {
        await register(formData);
        toast.success('🎉 Signup successful!');
      }
     setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      console.error(err);
      toast.error('❌ Authentication failed!');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      toast.success('✅ Google Sign-In successful!');
    setTimeout(() => navigate('/'), 1500); 
    } catch (err) {
      console.error(err);
      toast.error('⚠️ Google Sign-In failed!');
    }
  };

  const handleLogout = async () => {
    await logout();
    toast.info('👋 You have logged out!');
  };
  const handleForgetPassword = async () => {
  if (!formData.email) {
     toast.error('⚠️ Please enter your email first.');
    return;
  }
  try {
    await resetPassword(formData.email);
    toast.success('📧 Password reset email sent!');
  } catch (err) {
    console.error(err);
    toast.error('⚠️ Failed to send reset email.');
  }
};


  return (
    <>
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
      `}</style>

      <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-green-400 via-pink-500 to-yellow-500 animate-spin-slow rounded-full blur-2xl opacity-70"></div>
        <div className="absolute w-[520px] h-[520px] rounded-full mask-circle animate-spin-slow-reverse border-[6px] border-transparent"
          style={{
            borderImage: 'conic-gradient(#00ff00, #ff00ff, #ffff00, #00ff00) 1',
            borderRadius: '9999px',
          }}>
        </div>

        <div className="relative z-10 w-full max-w-sm p-8 rounded-2xl bg-transparent">
          <form onSubmit={handleAuth} className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-white text-center mb-2">
              {isLogin ? "Login" : "Signup"}
            </h2>

            {!isLogin && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-full border border-white text-white placeholder-white bg-transparent outline-none"
                />
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL (optional)"
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-full border border-white text-white placeholder-white bg-transparent outline-none"
                />
              </>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-full border border-white text-white placeholder-white bg-transparent outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-full border border-white text-white placeholder-white bg-transparent outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 hover:scale-105 transition-transform"
            >
              {isLogin ? "Login" : "Signup"}
            </button>

            <div className="flex justify-between text-sm text-white mt-2">
              <button type="button" onClick={handleForgetPassword} className="hover:underline">Forget Password</button>
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="hover:underline"
              >
                {isLogin ? "Need an account? Signup" : "Already have an account? Login"}
              </button>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              Sign in with Google
            </button>

            {user && (
              <button
                type="button"
                onClick={handleLogout}
                className="w-full py-3 rounded-full border border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-colors"
              >
                Sign Out
              </button>
            )}

            {user && (
              <div className="mt-4 p-4 text-center rounded-xl bg-white/10 text-white border border-white">
                <img src={user.photoURL} alt="Profile" className="w-16 h-16 mx-auto rounded-full mb-2 border-2 border-white" />
                <h3 className="text-lg font-semibold">{user.displayName}</h3>
                <p className="text-sm">{user.email}</p>
              </div>
            )}
          </form>
        </div>
      </div>
      
    </>
  );
};

export default LoginForm;
