window.onload= function () {
    var competences = document.getElementById('competences_link')
    competences.addEventListener('click',(e)=>{
        location.reload()
    })
    const circles = document.querySelectorAll('.circle')
    circles.forEach(e => {
        var dots = e.getAttribute('data-dots');
        var marked = e.getAttribute('data-percent')
        var percent = Math.floor(dots * marked / 100);
        var rotate = 360 / dots
        var points = ""
        for (i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
        }
        e.innerHTML = points
        const pointsMarked = e.querySelectorAll('.points');
        for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add('marked')
        }
    })
    let svg_visible = document.getElementById('visible')
    let navs = document.querySelector('.navbar-collapse')
    let svg_non_visible = document.getElementById('non_visible')
    svg_visible.addEventListener('click',function(){
        this.style.display ='none'
        svg_non_visible.style.display='block'
        navs.style.display="block"
        navs.classList.add('show')
    })
    svg_non_visible.addEventListener('click',function(){
        this.style.display ='none'
        svg_visible.style.display='block'
        navs.style.display="none"
        navs.classList.remove('show')
    })
    console.log(window.screen.width)

}
