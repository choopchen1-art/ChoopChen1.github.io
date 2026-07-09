// 自定义鼠标跟随交互逻辑
const cursor = document.querySelector('.cursor');
const trail = document.querySelector('.cursor-trail');
const links = document.querySelectorAll('a');
let mouseX=0,mouseY=0,cursorX=0,cursorY=0,trailX=0,trailY=0;

// 监听鼠标移动
window.addEventListener('mousemove',e=>{
    mouseX=e.clientX;
    mouseY=e.clientY;
});

// 平滑跟随动画
function smoothCursor(){
    cursorX+=(mouseX-3-cursorX)*0.25;
    cursorY+=(mouseY-3-cursorY)*0.25;
    trailX+=(mouseX-9-trailX)*0.15;
    trailY+=(mouseY-9-trailY)*0.15;
    cursor.style.transform=`translate(${cursorX}px,${cursorY}px)`;
    trail.style.transform=`translate(${trailX}px,${trailY}px)`;
    requestAnimationFrame(smoothCursor);
}
smoothCursor();

// 链接hover时鼠标样式变化
links.forEach(link=>{
    link.addEventListener('mouseenter',()=>cursor.classList.add('hover'));
    link.addEventListener('mouseleave',()=>cursor.classList.remove('hover'));
});