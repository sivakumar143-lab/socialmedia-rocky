//sidebar
const menuItems = document.querySelectorAll('.menu-item');



// remove active class from all menu items
const changeActiveItem = () => {
    menuitems.forEach(item => {
        item.classList.remove('active');

    })
}

menuItems.forEach(item =>{
    item.addEventlistener('click', () => {
        changeactiveitem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';

        }
    })
})
    
