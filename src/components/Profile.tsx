import React from "react";

interface ProfileProps {
  user: {
    username: string;
    fullName: string;
    faixa: string;
    avatar: string;
    bio: string;
    backgroundImage: string;
  };
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {

  const backgroundImageUrl = user.backgroundImage || `assets/images/background.jpg`;

  return (
    <div className="w-full h-full" style={{
      backgroundImage: `url('${backgroundImageUrl}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'top left',
      minHeight: '100dvh', // Garantir que ocupe toda a altura da tela
    }}>
      <div className="w-full h-full">
        <div className="w-full h-full flex items-start justify-start">
          <img
            src={user.avatar}
            alt="Avatar"
            className="mb-5"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-[22px]">
          <p className="text-3xl">Bem-vindo, {user.username}!</p>
          <p className="text-3xl">
            <strong>Nome:</strong> {user.fullName}
          </p>
          <p className="text-3xl">
            <strong>Faixa:</strong> {user.faixa}
          </p>
          <p className="text-xl">
            <strong>Bio:</strong> {user.bio}
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5583988031406&text=Eae,%20quero%20me%20graduar%20:)"
            className="bg-white text-black px-10 py-3 rounded-xl hover:bg-white/90"
          >Quero me Graduar!</a>
          <button
            onClick={onLogout}
            className="bg-white text-black px-10 py-3 rounded-xl hover:bg-white/90"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
