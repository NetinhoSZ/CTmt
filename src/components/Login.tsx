import React, { useState } from "react";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="w-full h-full flex items-center justify-center text-center mt-[50%] md:mt-[18%]">
      <div className="max-w-full h-full bg-white p-10 rounded-xl">
        <h1 className="w-full text-black mb-10">Login</h1>
        <form className="w-full h-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-5 py-2 rounded-lg outline-none"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-5 py-2 rounded-lg outline-none"
          />
          <button
            type="submit"
            className=""
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;