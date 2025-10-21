import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const {createUser, setUser} = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email,password);
        createUser(email, password)
        navigate("/auth/login")
       .then(result => {
        const user = result.user;
            // console.log(result.user); 
            setUser(user)
        })
         .catch(error => {
            console.log(error);
            
        })
        
        
    }

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className="text-2xl font-bold text-center">Register Your Account!</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input" placeholder="Name" required />
                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input name="photo" type="text" className="input" placeholder="Photo URL" required />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" required />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" required />
                        <button type="submit" className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className="font-semibold text-center pt-5">Allready Have An Account ? {" "} <Link className="text-secondary" to="/auth/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;