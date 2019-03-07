function menuOn(x){
   x.setAttribute('onclick', 'menuOff(this)')
   document.getElementById('navigation').style.right ="0"
   document.getElementById('navigation').style.transform ="scaleY(1)"
   x.classList.add('menu-open')
}
function menuOff(x){
   x.setAttribute('onclick', 'menuOn(this)')
   document.getElementById('navigation').style.right ="-120vw"
   document.getElementById('navigation').style.transform ="scaleY(0)"
   x.classList.remove('menu-open')
}
