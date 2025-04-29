import React, { useState } from "react";
import { myPosts } from "./data";
import { Post } from "./post";

const MainContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="main-content">
        <div className="relative grid grid-cols-3 gap-20 p-24">
            {myPosts.map(posts => {
                return <Post key={posts.id} {...posts} />;    
            })}
        </div>
    </div>
  );
};

export default MainContent;