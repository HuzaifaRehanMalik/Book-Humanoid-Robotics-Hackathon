import React, { useState } from 'react';
import styles from './SidebarChatToggle.module.css';
import SidebarChat from './SidebarChat';

const SidebarChatToggle: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        className={styles['sidebar-chat-toggle-button']}
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Close sidebar chat' : 'Open sidebar chat'}
      >
        💬
      </button>
      <SidebarChat
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default SidebarChatToggle;