const swiper = new Swiper('.mySwiper', {
  loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    slidesPerView: "1.15"
  });

var fotos = [
  './fotos/Bitmaplenovo.svg',
  './fotos/Bitmapsamsung.svg',
  './fotos/Bitmapapple.svg',
  './fotos/Bitmapview.svg',
  './fotos/Bitmapbosh.svg',
  './fotos/Bitmaphp.svg',
  './fotos/Bitmapapple.svg',
  './fotos/Bitmaphp.svg',
  './fotos/Bitmapacer.svg',
  './fotos/Bitmapsony.svg'
]

var list = document.querySelector('.main__ul');
var items = list.children;
var btnUp = document.querySelector('.pocaz')
var btnPrev = document.querySelector('.scrit')
var taskTemplate = document.querySelector('#main__li').content;
var newItemTempalte = taskTemplate.querySelector('.main__li')


var def = 6;

if (window.innerWidth < 1120) {
  def = 6
} else {
  def = 8
}

for (var i = 0; i < def; i++) {
  var form = newItemTempalte.cloneNode(true)
  var image = form.querySelector('.main__logo')
  image.src = fotos[i]
  
  list.appendChild(form)
}


btnUp.addEventListener('click', () => {
  def = fotos.length;

  for (var i = 6; i < def; i++) {
    var form = newItemTempalte.cloneNode(true)
    var image = form.querySelector('.main__logo')
    image.src = fotos[i]
    
    list.appendChild(form)

    deleteEl(items[i])
  }

    btnUp.classList.add('none')
    btnPrev.style.display = 'block'
})

function deleteEl(item) {
  btnPrev.addEventListener('click', () => {
      item.remove()
      btnUp.classList.remove('none');
      btnPrev.style.display = 'none';
  })
}



/*
var def = 6;

for (var i = 0; i < def; i++) {
  var form = newItemTempalte.cloneNode(true)
  var image = form.querySelector('.main__logo')
  image.src = fotos[i]
  
  list.appendChild(form)
}


btnUp.addEventListener('click', (foto) => {
  def = fotos.length;

  for (var i = 6; i < def; i++) {
    var form = newItemTempalte.cloneNode(true)
    var image = form.querySelector('.main__logo')
    image.src = fotos[i]
    
    list.appendChild(form)
  }

    btnUp.classList.add('none')
    btnPrev.style.display = 'block'
})



for (var i = 6; i < fotos.length; i++) {
  deleteEl(items[i])
}

function deleteEl(item) {
  btnPrev.addEventListener('click', () => {
      console.log(item)
      btnUp.classList.remove('none');
      btnPrev.style.display = 'none';
  })
}



*/