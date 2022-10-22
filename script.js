const menu = [
    {
        id: 1,
        img: 'images/image-1.jpg',
        category: 'meal',
        name: 'All in One',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 50
    },
    {
        id: 2,
        img: 'images/image-2.jpg',
        category: 'meal',
        name: 'Nuggets',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 5
    },
    {
        id: 3,
        img: 'images/image-3.jpg',
        category: 'snacks',
        name: 'French Fries',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 7
    },
    {
        id: 4,
        img: 'images/image-4.jpg',
        category: 'drink',
        name: 'Sprite',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 10
    },
    {
        id: 5,
        img: 'images/image-5.jpg',
        category: 'drink',
        name: 'Coca-Cola',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 10
    },
    {
        id: 6,
        img: 'images/image-6.jpg',
        category: 'drink',
        name: 'Mc Cafe Shake',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 25
    },
    {
        id: 7,
        img: 'images/image-7.jpg',
        category: 'meal',
        name: '4 in 1',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 30
    },
    {
        id: 8,
        img: 'images/image-8.jpg',
        category: 'snacks',
        name: 'Hamburger',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 8
    },
    {
        id: 9,
        img: 'images/image-9.jpg',
        category: 'snacks',
        name: 'Regular Fries',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.',
        price: 4
    }
]

const sectionItems = document.querySelector('.menu-container');
const buttonContainer = document.querySelector('.button-container');

window.addEventListener('DOMContentLoaded', () => {
    viewMenuItems(menu);
    viewMenuButtons();
});

//VIEW MENU FUNCTION!!!!!!!!!
function viewMenuItems(items) {
    let viewMenu = items.map(item => {
    
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
}
//VIEW MENU FUNCTION!!!!!!

function viewMenuButtons() {
    const categories = menu.reduce(
        (values, item) => {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );

    let categoryBtns = categories.map(category => {
        return `<button type="button" class="button" data-id=${category}>${category}</button>`;
    })
    categoryBtns = categoryBtns.join("");
    buttonContainer.innerHTML = categoryBtns;


    const buttons = buttonContainer.querySelectorAll('.button');

    buttons.forEach(btn => {
        btn.addEventListener('click', filteredId => {
            const category = filteredId.currentTarget.dataset.id;
            const menuItemsCategory = menu.filter(items => {
    
                if (items.category === category) {
                    return items;
                }
            });
            (category === 'all') ? viewMenuItems(menu) : viewMenuItems(menuItemsCategory);
        });
    });
}
