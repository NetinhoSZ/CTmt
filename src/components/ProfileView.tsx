import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { User } from "../App"; // Importando o tipo User de App.tsx

interface UserProfileProps {
  getUserByUsername: (username: string) => User | undefined;
  onLogout: () => void;  // Função de logout passada como prop
}

const ProfileView: React.FC<UserProfileProps> = ({ getUserByUsername, onLogout }) => {
  const { username } = useParams<{ username: string }>();
  const user = username ? getUserByUsername(username) : undefined;
  const navigate = useNavigate();  // Hook para navegação programática

  if (!user) {
    return <p>User not found!</p>;
  }

  const backgroundImageUrl = user.backgroundImage || `assets/images/background.jpg`;

  // Função para lidar com logout e redirecionar para o login
  const handleLogout = () => {
    onLogout();  // Chama a função de logout
    navigate("/");  // Redireciona para a página de login
  };

  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100dvh",
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img src={user.avatar} alt="Avatar" className="mb-5" />
        <div className="flex flex-col items-center justify-center text-center gap-[22px]">
          <p className="text-3xl">{user.username}'s Profile</p>
          <p className="text-3xl">
            <strong>Nome:</strong> {user.fullName}
          </p>
          <p className="text-3xl">
            <strong>Faixa:</strong> {user.faixa}
          </p>
          <p className="text-xl">
            <strong>Bio:</strong> {user.bio}
          </p>
          {/* Botão de logout */}
          <button
            onClick={handleLogout}
            className="bg-white text-black px-10 py-3 rounded-xl hover:bg-white/90 mb-2"
          >
            Sair e Voltar ao Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
