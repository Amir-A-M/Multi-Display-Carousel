var contents1 = [
  '<li class="content"> <img src="./assets/img/01.jpg"> </li>',
  '<li class="content"> <img src="./assets/img/02.jpg"> </li>',
  '<li class="content"> <img src="./assets/img/03.jpg"> </li>',
  '<li class="content"> <img src="./assets/img/04.jpg"> </li>',
  '<li class="content"> <img src="./assets/img/05.jpg"> </li>'
]

var contents2 = [
  `<li class="card border-0 content rounded-0">
  <img class="card-img" src="./assets/img/05.jpg" alt="">
  <div class="card-img-overlay">
        <h5 class="card-title"><span>Title</span></h5>
      </div>
    </li>`,
  `<li class="card border-0 content rounded-0">
      <img class="card-img" src="./assets/img/04.jpg" alt="">
      <div class="card-img-overlay">
        <h5 class="card-title"><span>Title</span></h5>
      </div>
    </li>`,
  `<li class="card border-0 content rounded-0">
      <img class="card-img" src="./assets/img/02.jpg" alt="">
      <div class="card-img-overlay">
        <h5 class="card-title"><span>Title</span></h5>
      </div>
    </li>`,
  `<li class="card border-0 content rounded-0">
      <img class="card-img" src="./assets/img/01.jpg" alt="">
      <div class="card-img-overlay">
        <h5 class="card-title"><span>Title</span></h5>
      </div>
    </li>`,
  `<li class="card border-0 content rounded-0">
      <img class="card-img" src="./assets/img/03.jpg" alt="">
      <div class="card-img-overlay">
        <h5 class="card-title"><span>Title</span></h5>
      </div>
    </li>`
]


// carousel 1
carousel({
  carouselPath: '.carousel-1',
  contents: contents1
});


// carousel 2
carousel({
  carouselPath: '.carousel-2',
  contents: contents2,

  Duration: 2000,
  Easing: 'easeInOutBack',

  Delay: 500,

  startAnimation: function (path) {
    $(`${path} .card-title span`).each((index, element) => {
      $(element).delay(index * 100).animate({

        top: '1.1em'

      }, index * 200)
    });
  },

  finalAnimation: function (path) {
    $(`${path} .card-title span`).each((index, element) => {
      $(element).delay(index * 100).animate({

        top: 0

      }, index * 200)
    });
  }
});