import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Music2, User } from 'lucide-react';
import type { Reel } from '../types';

interface ReelCardProps {
  reel: Reel;
}

export function ReelCard({ reel }: ReelCardProps) {
  const [isLiked, setIsLiked] = useState(reel.isLiked);
  const [likes, setLikes] = useState(reel.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="relative h-screen w-full bg-black snap-start">
      <video
        src={reel.videoUrl}
        className="h-full w-full object-cover"
        loop
        autoPlay
        muted
        playsInline
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

      {/* Right sidebar */}
      <div className="absolute right-4 bottom-20 flex flex-col gap-4">
        <button 
          onClick={handleLike}
          className="flex flex-col items-center gap-1"
        >
          <div className="p-2 bg-black/20 rounded-full">
            <Heart 
              className={`w-7 h-7 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`}
            />
          </div>
          <span className="text-white text-sm">{likes}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="p-2 bg-black/20 rounded-full">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <span className="text-white text-sm">{reel.comments}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="p-2 bg-black/20 rounded-full">
            <Share2 className="w-7 h-7 text-white" />
          </div>
          <span className="text-white text-sm">{reel.shares}</span>
        </button>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-4 left-4 right-16">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            {reel.user.avatar ? (
              <img 
                src={reel.user.avatar} 
                alt={reel.user.username}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800">
                <User className="w-6 h-6 text-gray-400" />
              </div>
            )}
          </div>
          <span className="text-white font-semibold">@{reel.user.username}</span>
        </div>
        <p className="text-white mb-3">{reel.description}</p>
        <div className="flex items-center gap-2 text-white">
          <Music2 className="w-4 h-4" />
          <span className="text-sm">{reel.music}</span>
        </div>
      </div>
    </div>
  );
}