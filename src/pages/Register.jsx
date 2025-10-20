import { Link } from "react-router";


const Register = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className="text-2xl font-bold text-center">Register Your Account!</h1>
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />
                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo URL" />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <Link className="btn btn-neutral mt-4">Register</Link>
                    </fieldset>
                    <p className="font-semibold text-center pt-5">Allready Have An Account ? {" "} <Link className="text-secondary" to="/auth/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;