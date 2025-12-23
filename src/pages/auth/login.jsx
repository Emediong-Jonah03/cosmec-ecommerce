import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-black">
            Welcome Back
          </h1>
          <p className="text-sm text-black/70 mt-1">
            Sign in to continue your glow journey
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="w-full rounded-lg border border-black/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-black/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <span className="text-sm text-green-400 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-300 transition text-black font-semibold py-2 rounded-lg"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-black/70 mt-6">
          Don’t have an account?{" "}
          <span className="text-green-400 font-medium cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
         <p className="text-center mt-2 text-green-500"><Link to="/">Back Home</Link></p>
      </div>
    
    </div>
  );
};

export default Login;
