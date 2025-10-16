//마우스 커서 이펙트
const trails = document.querySelectorAll(".trail");
const smoothPointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};
const totalPointsArray = [40, 35, 30, 25, 20, 15, 10];

window.addEventListener("mousemove", (event) => {
  gsap.to(smoothPointer, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.5,
    ease: "power2.out",
  });
});

function updatePath() {
  trails.forEach((path, index) => {
    let points = path.points || [];
    points.unshift({ ...smoothPointer });
    while (points.length > totalPointsArray[index]) {
      points.pop();
    }
    path.points = points;

    if (points.length > 1) {
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        d += ` L ${points[i].x} ${points[i].y}`;
      }
      path.setAttribute("d", d);
    }
  });

  requestAnimationFrame(updatePath);
}

updatePath(requestAnimationFrame);



document.getElementById("service").style.zIndex = '1000';



//
//메인배너 이미지 애니메이션
gsap.to("#mainBanner", {
  duration: 1.5,
  ease: "power4.inOut",
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});
//
//시작 메인 타이포그래피 애니메이션

const duration = 0.8;
const numberOfTargets = gsap.utils.toArray('.utill > div').length
const pause = 1.5;
const stagger = duration + pause;
const delay = stagger * (numberOfTargets - 1) + pause;
const tl = gsap.timeline();

gsap.set('.utill > div',{transformOrigin:'100% 50% -50'})

tl.from('.utill > div',{
  rotationX:90,
  opacity:0,
  duration:duration,
  stagger:{
    each:stagger,
    repeatDelay:delay
  }
})
//
//
//메인 배너 꽃잎 장식 애니메이션
gsap.to('#flower01', {
        y: 84,
        duration: 1.5,
        rotation: 0,
      });

gsap.to('#flower04', {
        y: 0,
        duration: 1.9,
        rotation: 0,
        opacity:1
      });
      
      
gsap.to('#flower06', {
        x: 0.01,
        duration: 1,
        opacity:1
      });
//
//
//
let nowPicture = 1;

document.getElementById("img_Right").addEventListener("click", function () {
  if (nowPicture == 1) {
    document.querySelector(".carousellContainer").style.transform = "translateX(-280px)";
    nowPicture += 1;
  } else if (nowPicture == 2) {
    document.querySelector(".carousellContainer").style.transform = "translateX(0px)";
    nowPicture += 1;
  }
});
document.getElementById("img_Left").addEventListener("click", function () {
  if (nowPicture == 3) {
    document.querySelector(".carousellContainer").style.transform = "translateX(-280px)";
    nowPicture -= 1;
  } else if (nowPicture == 2) {
    document.querySelector(".carousellContainer").style.transform = "translateX(0px)";
    nowPicture = nowPicture -= 1;
  }
});





//스크롤트리거 패럴렉스

window.addEventListener('scroll',function(){ console.log('window.scrollY')})