import { NavLink } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';

function AutorizationPage() {
  return ( 
    <main className="min-h-screen bg-teal-800 flex items-center justify-center">
        <section className="bg-slate-800 bg-opacity-70 p-4 rounded-lg shadow-lg w-full max-w-md mx-1 ">
            <div className="mx-auto text-white">
                <div className="mb-4 text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Log in to visit the site!</h1>
                </div>
                <GoogleLogin 
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
                <form className="text-white">
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm ">Email</label>
                        <input type="email" id="email" className="w-full p-1 border rounded-md text-sm text-black" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm ">Password</label>
                        <input type="password" id="password" className="w-full p-1 border rounded-md text-sm text-black" />
                    </div>
                    <button className="w-full bg-emerald-500 text-white p-2 rounded-md mb-4">
                        Log in
                    </button>
                </form>
                <div className="text-center text-sm">
                    <p>Not registered yet? <NavLink to="/register" className="text-blue-400">Register now!</NavLink></p>
                </div>
            </div>
        </section>
    </main>
  );
}

export default AutorizationPage;