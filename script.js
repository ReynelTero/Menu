const menu = [
    {
        img: 'images/image-1.jpg',
        filter: 'meal',
        name: 'All in One',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 50
    },
    {
        img: 'images/image-2.jpg',
        filter: 'meal',
        name: 'Nuggets',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 5
    },
    {
        img: 'images/image-3.jpg',
        filter: 'appetizer',
        name: 'French Fries',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 7
    },
    {
        img: 'images/image-4.jpg',
        filter: 'drink',
        name: 'Sprite',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 10
    },
    {
        img: 'images/image-5.jpg',
        filter: 'drink',
        name: 'Coca-Cola',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 10
    },
    {
        img: 'images/image-6.jpg',
        filter: 'drink',
        name: 'Mc Cafe Shake',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 25
    },
    {
        img: 'images/image-7.jpg',
        filter: 'meal',
        name: '4 in 1',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 30
    },
    {
        img: 'images/image-8.jpg',
        filter: 'appetizer',
        name: 'Hamburger',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 8
    },
    {
        img: 'images/image-9.jpg',
        filter: 'appetizer',
        name: 'Regular Fries',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 4
    }
]

const sectionItems = document.querySelector('.menu-container');

window.addEventListener('DOMContentLoaded', () => {
    let viewMenu = menu.map(item => {
        
        return `<section class="menu-container">
                    <div class="menu">
                        <img src=${item.img} class="photo" alt=${item.img}>
                        <h3>${item.name}</h3>
                        <hr>
                        <p>${item.info}</p>
                        <h4>$${item.price}</h4>
                    </div>
                </section>`;
    })
    viewMenu = viewMenu.join('');
    sectionItems.innerHTML = viewMenu;
})