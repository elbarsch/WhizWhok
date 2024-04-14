function header(){
    let menu = _('toggleMobileMenu');
    _('openMenu').addEventListener('click',()=>{
        menu.classList.toggle('hidden');
    })
}
header();


function _(element){
    return document.getElementById(element);
}

const menu = [
    {
        id: 1,
        title: 'Pasta alle vongole',
        alt: 'Pasta alle vongole image',
        price:24.99,
        description: 'Spaghetti with clams and garlic',
        img:'https://www.sanpellegrino.com/sites/g/files/xknfdk1986/files/veal-milanese.jpg',
        category:'breakfast'
    },
    {
        id: 2,
        title: 'Bami Goreng',
        alt: 'Bami Goreng image',
        price: 19.99,
        description: 'Tomato, mozzarella, basil',
        img:'https://www.kokenmetmaarten.nl/wp-content/uploads/2022/07/Bami-Goreng3.jpg',
        category:'lunch'
        
    },
    {
      id: 2,
      title: 'Bami Goreng',
      alt: 'Bami Goreng image',
      price: 19.99,
      description: 'Tomato, mozzarella, basil',
      img:'https://www.kokenmetmaarten.nl/wp-content/uploads/2022/07/Bami-Goreng3.jpg',
      category:'dinner'
      
  }
]
const sectionMenu = _('section-menu')
const btnContainer = _('btn-container')


//load all menu items from array
window.addEventListener('DOMContentLoaded',function(){
    DisplayMenu(menu)
    displayMenuButtons()
})

function DisplayMenu(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<div id="menu-content" class="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
        <a href="#">
        <img class="h-60 rounded-t-lg object-cover" src="${item.img}" alt="${item.alt}" />
        </a>
        <!-- <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span> -->
        <div class="mt-4 px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-slate-900">${item.title}</h5>
          </a>
          <p class="text-xs text-gray-500 p-1">${item.description}</p>
          <div class="mt-2.5 mb-5 flex items-center">
            <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <div class="flex items-center justify-between">
            <p>
              <span class="text-3xl font-bold text-slate-900">${item.price}</span>
              <span class="text-sm text-slate-900 line-through">$299</span>
            </p>
            <a href="#" class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a
              >
          </div>
        </div>
      </div>`;
    })
    displayMenu = displayMenu.join('');
    sectionMenu.innerHTML = displayMenu;
}

function displayMenuButtons(){
  const categories = menu.reduce(function (values, item){
    if(!values.includes(item.category)){
        values.push(item.category)
    }
    return values
},['all'])

const categoryBtns = categories.map(function(category){
    return `<button data-id=${category} type="button" class="filter-btn text-white m-3 bg-orange-500 outline-none p-3 text-center border-none rounded-md">${category}</button>`
}).join('')
btnContainer.innerHTML = categoryBtns
const filterBtns = document.querySelectorAll('.filter-btn')

filterBtns.forEach(function(btn){
  btn.addEventListener('click',function(e){
      //get the button via dataset
      const category = e.currentTarget.dataset.id
      //filter the menu items
      const menuCategory = menu.filter(function(menuItem) {
          //if the menu item category is equal to the category return such menu item
          if(menuItem.category === category){
              return menuItem
          }
      })
      if(category === 'all'){
          DisplayMenu(menu)
      }
      else{
          DisplayMenu(menuCategory)
      }
  })
})
}