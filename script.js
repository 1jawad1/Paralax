let paralax_items = document.querySelectorAll(".paralax")


function paralax(item, movementX, movementY, speedX=1, speedY=1, speedZ, speedDeg){

    let screen_width = window.innerWidth
    let screen_height = window.innerHeight
    let translateX = (movementX-screen_width/2)*speedX
    let translateY = (movementY-screen_height/2)*speedY
    let test = document.querySelector('.portail')
    let isInLeft = parseFloat(getComputedStyle(item).left) < screen_width/2 ?  1 : -1
    let translateZ = (movementX - parseFloat(getComputedStyle(item).left))*isInLeft*speedZ
    let rotateDegree = ((movementX-screen_width/2)/(screen_width/2))*20
    item.style.transform = `translateX(calc(-50% + ${
        -translateX
    }px)) translateY(calc(-50% + ${
        translateY
    }px)) rotateY(${
        rotateDegree*speedDeg
    }deg) perspective(1000px) translateZ(${
        translateZ
    }px)`;

    // console.log(`${item.getAttribute("class")} : ${translateZ}`)
    // console.log(rotateDegree)
    // `${(screen_width/2-movementX)/(screen_width/40)} ${(screen_height/2-movementY)/(screen_height/40)} `

}

paralax_items.forEach(element => {
    document.querySelector('.paralax_container').addEventListener('mousemove', (e)=>{
        let mouseX = e.clientX
        let mouseY = e.clientY
        let speedX = element.dataset.speedx
        let speedY = element.dataset.speedy
        let speedZ = element.dataset.speedz
        let rotateDegree = element.dataset.rotate
        paralax(element, mouseX, mouseY, parseFloat(speedX), parseFloat(speedY), parseFloat(speedZ), parseFloat(rotateDegree))
    })
});



let buttuns = document.querySelectorAll(".buttun")

let currunt = document.querySelector('.current')
buttuns.forEach(buttun=>{

    buttun.addEventListener("click", ()=>{
        currunt.classList.remove('current');
        currunt = buttun
        currunt.classList.add('current')
    })
})

let nav =document.querySelector(".navigation")
document.addEventListener("scroll", ()=>{
    if(scrollY>=(window.innerHeight-parseFloat(getComputedStyle(nav).height))){
        nav.style.color = 'rgb(14, 32, 14)'
    }else{
        nav.style.color = 'white'

    }

})
