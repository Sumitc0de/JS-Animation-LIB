const cursor  = document.getElementById("cursor");


window.addEventListener('mousemove',(dets)=>{
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y,
        ease: "circ.out",
    })
})