import React, { useState } from 'react';
import { ReelCard } from './components/ReelCard';
import { Header } from './components/Header';
import { MessageBox } from './components/MessageBox';
import { CameraModal } from './components/CameraModal';

// Sample data
const SAMPLE_REELS: Reel[] = [
  {
    id: '1',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
    user: {
      id: '1',
      username: 'creative_artist',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      followers: 1520,
      following: 324
    },
    description: '✨ Creating magic with lights and shadows #digitalart #creative',
    music: 'Original Sound - creative_artist',
    likes: 1234,
    comments: 88,
    shares: 44,
    isLiked: false
  },
  {
    id: '2',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
    user: {
      id: '2',
      username: 'nature_lover',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
      followers: 2410,
      following: 532
    },
    description: '🌸 Spring is in the air! #nature #spring #beautiful',
    music: 'Spring Vibes - Nature Sounds',
    likes: 2455,
    comments: 156,
    shares: 78,
    isLiked: false
  }
];

const currentUser: User = {
  id: 'current',
  username: 'current_user',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
  followers: 780,
  following: 550
};

function App() {
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [reels, setReels] = useState(SAMPLE_REELS);

  const handleSaveVideo = (videoBlob: Blob) => {
    const url = URL.createObjectURL(videoBlob);
    const newReel: Reel = {
      id: Date.now().toString(),
      videoUrl: url,
      user: currentUser,
      description: 'My new reel! #awesome',
      music: 'Original Sound',
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false
    };
    setReels([newReel, ...reels]);
  };

  return (
    <div className="h-screen bg-black overflow-hidden">
      <Header 
        onOpenMessages={() => setIsMessageBoxOpen(true)}
        onOpenCamera={() => setIsCameraOpen(true)}
      />

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {reels.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
      </div>

      <MessageBox
        isOpen={isMessageBoxOpen}
        onClose={() => setIsMessageBoxOpen(false)}
        currentUser={currentUser}
        messages={[]}
      />

      <CameraModal
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onSave={handleSaveVideo}
      />
    </div>
  );
}

export default App;