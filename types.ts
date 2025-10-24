// Fix: Add React import to resolve 'Cannot find namespace React' error.
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  name: string;
  description: string;
  price?: string;
}

export interface StaffMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface ServiceRequest {
  id: string;
  name: string;
  service: string;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Rejected';
}

export enum AppView {
  HOME = 'HOME',
  AI_TOOLS = 'AI_TOOLS',
  TRACK_STATUS = 'TRACK_STATUS'
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}