import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">
            Cosmec
          </h1>
          <p className="text-sm text-black/70 mt-1">
            Create your beauty account
          </p>
        </div>

     
        <form className="space-y-4">
    
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full rounded-lg border border-black/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

   
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

          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-300 transition text-black font-semibold py-2 rounded-lg"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-black/70 mt-6">
          Already have an account?{" "}
          <span className="text-green-400 font-medium cursor-pointer hover:underline">
           <Link to="/login">Sign in</Link>
          </span>
        </p>
        <p className="text-center mt-2 text-green-500"><Link to="/">Back Home</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
