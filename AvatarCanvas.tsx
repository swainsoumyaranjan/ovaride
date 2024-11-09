import React, { useEffect, useRef } from 'react';
import { useAvatarStore } from '../../store/avatarStore';

export function AvatarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const config = useAvatarStore((state) => state.config);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Initialize avatar rendering
    const renderAvatar = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      // Add avatar rendering logic here based on config
      requestAnimationFrame(renderAvatar);
    };

    renderAvatar();
  }, [config]);

  return (
    <canvas
      ref={canvasRef}
      width={512}
      height={512}
      className="w-full max-w-lg rounded-lg shadow-lg bg-gray-900"
    />
  );
}