import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authentication/auth.actions";

export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const _login = (e) => {
        e.preventDefault();
        dispatch(login(email, pass));
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="title">Login</div>
                <form className="form-login" onSubmit={(e) => _login(e)}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Masukkan email Anda"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Masukkan password Anda"
                            onChange={(e) => setPass(e.target.value)}
                        />
                        {/* <small id='emailHelp' className='form-text text-muted'>Password salah!</small> */}
                    </div>
                    <div className="button-container">
                        <input
                            className="btn btn-success"
                            type="submit"
                            value="Login"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
