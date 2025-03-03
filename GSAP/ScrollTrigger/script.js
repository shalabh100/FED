gsap.from("#circle1" , {
    scale:0,
    duration:2,
    rotate:720,

})
gsap.from("#circle3" , {
    scale:0,
    duration:2,
    rotate:720,
    scrollTrigger: "#circle3"
})
gsap.from("#circle2" , {
    scale:0,
    duration:2,
    rotate:720,
    scrollTrigger: {
        trigger:"#circle2",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:5
    }
})

gsap.to("#page4 img" , {
    width:"80%",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})

gsap.to("#page5 h1", {
    transform:"translateX(-115%)",
    scrollTrigger:{
        trigger:"#page5 h1",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})