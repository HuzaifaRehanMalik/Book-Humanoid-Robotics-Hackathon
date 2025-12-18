import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import { AuthProvider } from '../contexts/AuthContext';
import ChatbotWidget from '../components/ChatbotWidget';
import SidebarChatToggle from '../components/SidebarChatToggle';
import type { Props } from '@theme/Layout';

export default function Layout(props: Props): JSX.Element {
  return (
    <AuthProvider>
      <OriginalLayout {...props} />
      <ChatbotWidget />
      <SidebarChatToggle />
    </AuthProvider>
  );
}