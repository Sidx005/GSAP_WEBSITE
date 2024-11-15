

function page1animation(){
    // gsap.from("nav h1",{
//     y:-10,
//     opacity:0,
//     delay:1,
//     duration:1
// })


var tl=gsap.timeline(
    
)

tl.from("nav h1,nav h4,nav button",{
    y:-30,
    duration:.7,
    delay:.5,
    opacity:0,
    stagger:.2
},"-=0.3")

tl.from(".hero1 h1",{
    x:-300,
    opacity:0,
    duration:.5
},"-=0.2")
tl.from(".hero1 p",{
    x:-100,
    opacity:0,
    duration:.4
})
tl.from(".hero1 button",{
    x:-100,
    opacity:0,
    duration:.4
})

tl.from(".wrapper",{
    opacity:0,
    duration:0.5
},"-=0.5")
tl.from(".section1bottom h2",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.5
},"-=0.5")
}
page1animation()

function page2animation(){gsap.from(".services h3", {
    x: -100,
    opacity: 0,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".services h3",
        scroller: "body", // or another scroll container
        start: "top 80%", // Trigger when 80% of the element is visible
        end: "top 30%", // Animation ends when the element reaches 30% of the viewport
         // Keep it for debugging
    }
});


var tl2=gsap.timeline({
    delay:.2,
    duration:2,
    scrollTrigger:{
        trigger:".section2"
        ,
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scrub:2,
    }
})
tl2.from(".services",{
    y:30,
    opacity:0
})
tl2.from(".elem.line1.left",{
x:-300,
delay:1,
duration:3,
    opacity:0
},"line1")
tl2.from(".elem.line1.right",{
x:300,
delay:1,
duration:3,
    opacity:0
},"line1")
tl2.from(".elem.line2.left",{
    delay:1,
duration:3,
x:-300,
    opacity:0
},"line2")
tl2.from(".elem.line2.right",{
x:300,
delay:1,
duration:3,
    opacity:0
},"line2")
}
page2animation()


let btn=document.getElementsByClassName('.open')
let btn2=document.querySelector('.close')

let nav=document.querySelector('.navlinks')
let links=document.querySelectorAll('.links h4')

function openNav(){
  nav.style.transform='translateX(0px)'
  nav.style.width='90%'
  console.log('clicked');
  
}
btn2.addEventListener("click",()=>{
   nav.style.transform="translateX(100%)"
    nav.style.transition=' transform 0.8s ease-in-out'
    console.log('clicked');

    
})

// for(i=0;i<links.length;i++){
//     links[i].addEventListener("click",(e)=>{
//     // e.style.margin='2px solid black'
//     console.log(e.target);
//     e.target.style.borderBottom='1px solid black'

    

//     }





// )
// }

links.forEach(link=>{
   link.addEventListener("click",()=>{
    links.forEach(l=>l.style.borderBottom='0px')
    
    link.style.borderBottom='2px solid black'
    link.style.transition='border-bottom 0.5s ease-in-out'

   })

})


// var body=document.getElementsByTagName('h1')

