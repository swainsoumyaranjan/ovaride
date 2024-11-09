import React from 'react';
import { Camera, MessageCircle, Plus } from 'lucide-react';

interface HeaderProps {
  onOpenMessages: () => void;
  onOpenCamera: () => void;
}

export function Header({ onOpenMessages, onOpenCamera }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent p-4">
      <nav className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Reels</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCamera}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Camera className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={onOpenMessages}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </button>
        </div>
      </nav>
    </header>
  );
}