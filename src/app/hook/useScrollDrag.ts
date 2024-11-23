import { useState } from 'react';
export const useDragScroll = <T extends HTMLElement>() => {
  const [isActive, setIsActive] = useState(false);
  const [prevPositionX, setPrevPositionX] = useState(0);
  const [mouseDownClientX, setMouseDownClientX] = useState(0);

  const inActive = () => setIsActive(false);
  const active = () => setIsActive(true);

  const onMouseMove: React.MouseEventHandler<T> = (e) => {
    if (isActive) {
      // 위치 차이 계산
      const moveX = e.clientX - mouseDownClientX;

      // 기존 스크롤 위치 + moveX
      e.currentTarget.scrollTo(prevPositionX + moveX, 0);
    }
  };

  const onMouseDown: React.MouseEventHandler<T> = (e) => {
    active();
    setMouseDownClientX(e.clientX);
    setPrevPositionX(e.currentTarget.scrollLeft);
    // 커서 모양 변경
    e.currentTarget.style.cursor = 'grabbing';
  };
  const onMouseUp: React.MouseEventHandler<T> = (e) => {
    inActive();
    e.currentTarget.style.cursor = 'grab';
  };

  return { active, inActive, onMouseDown, onMouseUp, onMouseMove };
};
