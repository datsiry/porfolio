window.onload = function () {
    var loc = window.location.href
    var url = loc.split('/')
    var competences = document.getElementById('competences_link')
    competences.addEventListener('click',(e)=>{
        location.reload()
    })
    console.log(url)
    if(url[9] == ''){
        var h1 = document.querySelector("h1.titre")
        var parts = h1.textContent.split('')
        h1.innerHTML = ''
        parts.forEach(function(e,i){
            var spans = document.createElement('p')
            spans.textContent = e
            spans.setAttribute('class','span')
            h1.append(spans)
        })
        var p = document.querySelector(".Bonjour")
        var parts = p.textContent.split('')
        p.innerHTML = ''
        parts.forEach(function(e,i){
            let spans = document.createElement('p')
            spans.textContent = e
            spans.setAttribute('class','span')
            p.append(spans)
        })
    }
    
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

}
