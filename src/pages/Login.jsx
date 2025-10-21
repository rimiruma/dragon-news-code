import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    const {signIn, setUser} = use(AuthContext)
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
         const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});
        signIn(email, password)
        .then((result) => {
        const user = result.user;
            console.log(user); 
            setUser(user)
            navigate("/")
        })
         .catch(error => {
            console.log(error);
            
        })
        
    }

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className="text-2xl font-bold text-center">Login Your Account!</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className="font-semibold text-center pt-5">Don't Have An Account <Link className="text-secondary" to="/auth/register">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;