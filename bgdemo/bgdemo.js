var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "50% 95%",
        end: "70% 50%",
        scrub: true,
        markers: true,
    }
})
tl1.to(".bgpngimg", {
    top: "200%",
    transform: ` rotate(115deg)`

    // left:"70%",
    // width:"500px"
},)
tl1.to(".kiwi", {
    top: "200%",
    transform: ` rotate(115deg)`

    // left:"70%",
    // width:"500px"
},)