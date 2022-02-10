const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav_links');
    const navLinks = document.querySelector('.nav_links a');

    burger.addEventListener('click', () =>{
        //Toggle Nov
        nav.classList.toggle('nav_active');

        //Animete Links
        navLinks.forEatc((link, index) => {
            if(link.navbar.module.animation){
                link.navbar.module.animation ='';
            }else{
                link.navbar.module.animation = 'navLinkFabe 0,5s ease forward'
            }
        });
        //Burger Animatio
        burger.classList.toggle('toggle');

    });
}

navSlider();