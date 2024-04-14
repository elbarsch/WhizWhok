function header(){
    let menu = _('toggleMobileMenu');
    _('openMenu').addEventListener('click',()=>{
        menu.classList.toggle('hidden');
    })
}
header();


function Scroll(){
    window.addEventListener('scroll',()=>{
        let scrollUp = _('scroll-up');
        let scrollY = window.scrollY;
        if(scrollY > 400){
            scrollUp.classList.remove('bottom-full')
            scrollUp.classList.add('bottom-10')
        }
        else{
            scrollUp.classList.remove('bottom-10')
            scrollUp.classList.add('bottom-full') 
        }
    })
}
Scroll();


function returnDate(){
    const newDate = new Date();
    let date = newDate.getFullYear() + "/" + (newDate.getMonth() + 1) + "/" + newDate.getDate();
    let dateArray = date.split("/");
    let dayOfMonth = dateArray[0]
    _('date').innerHTML = `© ${dayOfMonth} | <span class="text-orange-500">Wiz</span>Whok | All Rights Reserved`;

}
returnDate();

function _(element){
    return document.getElementById(element);
}



