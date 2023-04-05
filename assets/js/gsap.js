// JavaScript Document
window.onload = function(){
    setTimeout(function(){
        var contents = document.getElementById("main");
        var loading = document.getElementById("loading");
        loading.style.display = "none";
        contents.style.display = "block";
    },2000);
};
const wrapper = document.querySelector('#wrapper');
if(wrapper) {
    const panels = gsap.utils.toArray('.scroll');
    const wrapperWidth = wrapper.offsetWidth;
    gsap.to( panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: wrapper,
            pin: true,
            scrub: 1,
            snap: {
                snapTo: 1 / ( panels.length - 1 ),
                duration: {min: .4, max: .6},
                ease: "none"
            },
            end: () => "+=" + wrapperWidth
        }
    })
}