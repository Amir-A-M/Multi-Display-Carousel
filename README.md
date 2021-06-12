# Multi-Display Carousel
Carousel manufacturer with multi-container capability

![](https://user-images.githubusercontent.com/60928821/121765209-82fe4b80-cb5e-11eb-9b25-a0df445d08b7.png)
 
- [Dependencies](#Dependencies)
- [Arguments](#Arguments)
- [Example](#Example)

### Setting up

Include files `carousel.pn.js`, `carousel.pn.css` and Jquery in your project


<a name="Dependencies"/>

### Dependencies

1. Jquery
2. Jquery Ui for Easing


<a name="Arguments"/>

### Arguments
Submit values to the carousel function as an object

| Arguments | Description | type |
| --- | --- | --- |
| `carouselPath` | (Necessary) Carousel address | String |
| `contents` | (Necessary) The content of the slides in HTML code.<br/>Content must be in the li tag | Array |
| `Duration` | Duration of  the transfer. &#160;&#160;&#160; default: &#160; 1000ms | Integer in milliseconds|
| `Easing` | Select an easing from [Jquery Ui](https://api.jqueryui.com/easings/) | String | 
| `Delay` | Delay the execution of the transfer. &#160;&#160;&#160; default: &#160; 0ms | Integer in milliseconds| 
| `startAnimation` | To add custom animations. path = `.carousel_container:nth-child(${i}) > ul` | Function(path, Duration) |  
| `finalAnimation` | When the transfer is complete | Function(path, Duration) |  

```javascript
carousel({
  carouselPath: '.carousel-1',
  contents: contents1 // ['<li class="content"> <img src="./assets/img/01.jpg"> </li>', ...]
});
```

<a name="Example"/>


### Example 

![](https://user-images.githubusercontent.com/60928821/121765189-67934080-cb5e-11eb-9aae-f478254a5314.png)

<details>
  <summary>HTML code</summary>
  
  ```html
  <div class="d-flex">
      <!-- carousel -->
      <div class="carousel carousel-2">
          <div class="carousel_container">
              <ul>
                  <!--  -->
              </ul>
          </div>
          <div class="carousel_container">
              <ul>
                  <!--  -->
              </ul>
          </div>
          <div class="carousel_container">
              <ul>
                  <!--  -->
              </ul>
          </div>
          <!-- controller -->
          <div class="control prev"><span>&#8249;</span></div>
          <div class="control next"><span>&#8250;</span></div>
      </div>
  </div>
  ```
  
</details>

<details>
  <summary>SCSS code</summary>
  
  ```scss
  .carousel .content img {
    user-select: none;
  
    border-radius: 0;
    width: 100%;
    height: 100%;
  
    object-fit: cover;
    object-position: center;
  }
  .card-title {
    overflow: hidden;
    
    span {
      position: relative;
    }
  }
  
  ```
  
</details>

<details>
  <summary>JS code</summary>
  <br>
  <details>
  <summary>value of contents2</summary>
  
  ```html
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
  
  ```
  
</details>
  
  ```javascript
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
  
  ```
  
</details>

