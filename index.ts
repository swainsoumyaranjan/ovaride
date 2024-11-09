export interface User {
  id: string;
  username: string;
  avatar?: string;
  followers: number;
  following: number;
}

export interface Reel {
  id: string;
  videoUrl: string;
  user: User;
  description: string;
  music: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
}

export interface Message {
  id: string;
  content: string;
  timestamp: string;
  senderId: string;
  receiverId: string;
}