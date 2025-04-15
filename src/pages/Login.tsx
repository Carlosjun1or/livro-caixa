// pages/Login.tsx

import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/registro");
    };

    return (
        <section className="login-container">

            <div >
                <form className="login" onSubmit={handleSubmit}>
                    <h2 className="container-title">Login</h2><br />
                    <div>
                        <label className="label1" htmlFor="email">Email</label>
                        <br />
                        <input type="emailç" id="email" placeholder="seuemail@email.com"
                        />
                    </div>
                    <br />
                    <div>
                        <label className="label2" htmlFor="senha">Senha</label>
                        <br />
                        <input type="senha" id="senha" placeholder="Digite sua senha" />
                    </div>
                    <br />
                    <button type="submit">Entrar</button>
                </form>
            </div>

        </section>
    );
}
