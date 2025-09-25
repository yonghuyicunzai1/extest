const wallpaper = document.querySelector('.wallpaper');

// 创建20个随机位置的星光
for (let i = 0; i < 20; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  
  // 随机大小（1px ~ 3px）
  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  
  // 随机位置
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  
  // 随机动画（漂浮效果）
  star.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
  
  wallpaper.appendChild(star);
}

// 动态漂浮动画（添加到style.css或这里用JS动态插入）
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px); }
  }
`;
document.head.appendChild(style);