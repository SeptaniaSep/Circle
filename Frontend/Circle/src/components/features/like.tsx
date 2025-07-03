import { useState } from "react";

export function useLike(initialCount: number) {
  const [likeCount, setLikeCount] = useState(initialCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeClick = () => {
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked((prev) => !prev);
  };

  return {
    likeCount,
    isLiked,
    isHovered,
    setIsHovered,
    handleLikeClick,
  };
}
