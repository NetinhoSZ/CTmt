import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile"; 
import BandanaBranca from "./assets/images/BandanaBranca.jpg"
import BandanaVermelha from "./assets/images/BandanaVermelha.jpg"
import BandanaAmarela from "./assets/images/BandanaAmarela.jpg"
import BandanaLaranja from "./assets/images/BandanaLaranja.jpg"
import BandanaVerde from "./assets/images/BandanaVerde.jpg"
import BandanaAzul from "./assets/images/BandanaAzul.jpg"
import BandanaRoxa from "./assets/images/BandanaRoxa.jpg"
import BandanaMarrom from "./assets/images/BandanaMarrom.jpg"
import BandanaPreta from "./assets/images/BandanaPreta.jpg"

// Tipo para o usuário
interface User {
  username: string;
  password: string;
  fullName: string;
  faixa: "Branca" | "Vermelha" | "Amarela" | "Laranja" | "Verde" | "Azul" | "Roxa" | "Marrom" | "Preta";
  avatar: string;
  bio: string;
}

// Mapeamento de faixa para avatar
const faixaToAvatarMap: Record<User["faixa"], string> = {
  Branca: BandanaBranca,
  Vermelha: BandanaVermelha,
  Amarela: BandanaAmarela,
  Laranja: BandanaLaranja,
  Verde: BandanaVerde,
  Azul: BandanaAzul,
  Roxa: BandanaRoxa,
  Marrom: BandanaMarrom,
  Preta: BandanaPreta,
};

const App: React.FC = () => {
  const [users] = useState<User[]>(
    [
      {
        username: "Neto",
        password: "netinhos123",
        fullName: "José Neto",
        faixa: "Branca",
        avatar: faixaToAvatarMap["Branca"], // Avatar dinâmico com base na faixa
        bio: "Eu sou o administrador do sistema.",
      },
      {
        username: "Jhon",
        password: "jhon123",
        fullName: "Jhon Victor",
        faixa: "Branca",
        avatar: faixaToAvatarMap["Branca"], // Avatar dinâmico com base na faixa
        bio: "Eu sou um visitante.",
      },
      {
        username: "Eliandro",
        password: "eli123",
        fullName: "Eliandro",
        faixa: "Branca",
        avatar: faixaToAvatarMap["Branca"], // Avatar dinâmico com base na faixa
        bio: "Eu sou um visitante.",
      },
      {
        username: "Davi",
        password: "davi123",
        fullName: "José Davi",
        faixa: "Branca",
        avatar: faixaToAvatarMap["Branca"], // Avatar dinâmico com base na faixa
        bio: "Eu sou um visitante.",
      },
    ]
  );

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (username: string, password: string) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setCurrentUser(user);
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? (
              <Navigate to="/profile" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/profile"
          element={
            currentUser ? (
              <Profile user={currentUser} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
