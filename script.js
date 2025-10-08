
const logodiv = document.querySelector('.logo_img');  
let isScrolling;

window.addEventListener('scroll', () => {
  
  logodiv.classList.add('logo_animation');
  
  
  
    window.clearTimeout(isScrolling);

  isScrolling = setTimeout(() => {
    
    logodiv.classList.remove('logo_animation');
  }, 200); 
});


gsap.from('.btn', {
  y: 40,
  duration: 0.4,
  delay: 1,
  stagger: 0.15
});

gsap.from('.content a' ,{
    x:-40, 
    opacity:0,
    duration:0.5,
    delay:1,
    stagger:0.15
})

// gsap.registerPlugin(ScrollTrigger);

//   var t = gsap.timeline({
//     y:100,
//     scrollTrigger: {
//       trigger: '.car_info1',
//       start: 'top 80%',
//       end: 'bottom 30%',
//       markers: false,
//       toggleActions: 'play none none reverse'
//     }
//   });

// t.from('.car_infoL', {
  
//   x:-100,
//   stagger:0.15,
//   duration:3,
//   delay:0.1,
//   ease: "power1.out"

// });


// t.from('.car_infoR', {
  
//   x: 100,
//   stagger: 0.15,
//   duration: 3,
//   delay: 0.1,
//   ease: "power1.out"
// });

    gsap.registerPlugin(ScrollTrigger);


  gsap.utils.toArray('.car_infoL').forEach((block) => {
    gsap.fromTo(block, 
      { x: -100, opacity: 0 }, 
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: block,
          start: "top 80%", // when top of block hits 80% of viewport
          toggleActions: "play none none reverse",
          markers: false
        }
      }
    );
  });

  // Animate each right car block
  gsap.utils.toArray('.car_infoR').forEach((block) => {
    gsap.fromTo(block, 
      { x: 100, opacity: 0 }, 
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false
        }
      }
    );
  });

gsap.from('.text_page', {
  y: 100,
  opacity: 0,
  duration: 0.3,
  delay: 0.1,
  stagger: 0.15,
  scrollTrigger: {
    trigger: '.text_page',
    start: 'top 50%',
    end: 'bottom 40%',
    markers: false
  }
});

// const firstPage=document.querySelector('.sec1');
// const header=document.querySelector('.header_container');

// function scrollHeader(){
// const pos=firstPage.getBoundingClientRect();
// console.log(pos)
// if(pos.y<0){
//  header.classList.add('header_container2')
// }
// else{
//   header.classList.remove('header_container2')
// }
// }

// document.addEventListener('scroll',()=>{
// console.log("hii")
// scrollHeader()

// });
  
