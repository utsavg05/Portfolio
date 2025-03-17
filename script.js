// const num = [1,2,3,4]
// num[100] = 500
// console.log(num);

// function abc() {
//     console.log(abc.xyz);
    
// }
// abc()
// abc.xyz = 400
// abc.xyz = 200
// abc()


// console.log(typeof typeof 100);



gsap.from(".page2 .card", {
    x:400,
    scale:0,
    duration:0.5,
    // y:30,
    stagger:0.1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        scrub:2,
        // markers:true,
        // start:"top 60%",
        // end:"top -150%",
        pin:true
    }
})
gsap.from(".page2 h1", {
    x:-400,
    scale:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        scrub:2,
        // markers:true,
        // start:"top 60%",
        // end:"top -150%",
        // pin:true
    }
})

