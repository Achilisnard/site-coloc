document.querySelectorAll('.card').forEach(card => {
    let isMouseDown = false, startX, startY;
  
    card.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      startX = e.pageX;
      startY = e.pageY;
    });
  
    card.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
  
    card.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
  
      const deltaX = (e.pageX - startX)*1.5;
      const cardInner = card.querySelector('.inner-card');
      cardInner.style.transform = `rotateY(${deltaX}deg)`;
    });
  
    card.addEventListener('mouseleave', () => {
      isMouseDown = false;
    });
  });