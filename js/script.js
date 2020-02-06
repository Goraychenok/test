$(document).ready(function($) {



	//Timer
	let seconds = 0;

	$('.button').click(function My_timer(event) {
		seconds++;
		console.log(seconds);
		timeoutID = setTimeout(function(){My_timer()}, 1000);
		if(seconds == 5){
			clearTimeout(timeoutID);
			$('.header').addClass('display-none');

			  // Генерация слайдера

			  	const goodsWrapper = document.querySelector('body');
				const createCardGoods = () => {
				   const card = document.createElement('section');
				   card.className = 'section';
				   card.innerHTML = `
    		    	<div class="swiper-container">
    		    	    <div class="swiper-wrapper">
    		    	        <div class="section-one swiper-slide">
    		    	        	<div class="white"></div>
    		    	        	<div class="container">
    		    	        		<div class="row">
    		    	        			<div class="col-lg-6 offset-lg-6 col-sm-8 offset-sm-2 col-12 offset-0">
    		    	        				<h2 class="section-title">Этот текст добавлен для демонстрации на странице</h2>
    		    	        				<p class="section-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        				<p class="section-paragraph test">Тест на внимательность</p>
    		    	        				<button class="button-more button-section">Подробнее</button>
    		    	        				<button class="button-stock button-section">Все акции</button>
    		    	        			</div>
    		    	        		</div>
    		    	        		<div class="row">
    		    	        			<div class="col-md-3 ">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg slider-block-bg-active"></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_1pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        			<div class="col-md-3">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg "></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_2pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        			<div class="col-md-3">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg"></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_3pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        			<div class="col-md-3">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg"></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_4pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        		</div>
    		    	        	</div>
    		    	        </div>
    		    	        <div class="section-two swiper-slide">
    		    	        	<div class="white"></div>
    		    	        	<div class="container">
    		    	        		<div class="row">
    		    	        			<div class="col-lg-6 offset-lg-6  col-sm-8 offset-sm-2 col-12 offset-0">
    		    	        				<h2 class="section-title">Этот текст добавлен для демонстрации на странице</h2>
    		    	        				<p class="section-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        				<p class="section-paragraph test">Тест на внимательность</p>
    		    	        				<button class="button-more button-section">Подробнее</button>
    		    	        				<button class="button-stock button-section">Все акции</button>
    		    	        			</div>
    		    	        		</div>
    		    	        		<div class="row">
    		    	        			<div class="col-md-3 ">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg "></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_1pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        			<div class="col-md-3">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg slider-block-bg-active "></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_2pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        			<div class="col-md-3">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg"></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_3pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        			<div class="col-md-3">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg"></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_4pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        		</div>
    		    	        	</div>
    		    	        </div>
    		    	        <div class="section-three swiper-slide">
    		    	        	<div class="white"></div>
    		    	        	<div class="container">
    		    	        		<div class="row">
    		    	        			<div class="col-lg-6 offset-lg-6  col-sm-8 offset-sm-2 col-12 offset-0">
    		    	        				<h2 class="section-title">Этот текст добавлен для демонстрации на странице</h2>
    		    	        				<p class="section-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        				<p class="section-paragraph test">Тест на внимательность</p>
    		    	        				<button class="button-more button-section">Подробнее</button>
    		    	        				<button class="button-stock button-section">Все акции</button>
    		    	        			</div>
    		    	        		</div>
    		    	        		<div class="row">
    		    	        			<div class="col-md-3 ">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg "></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_1pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        			<div class="col-md-3">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg"></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_2pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        			<div class="col-md-3">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg slider-block-bg-active"></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_3pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        			<div class="col-md-3">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg"></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_4pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        		</div>
    		    	        	</div>
    		    	        </div>
    		    	        <div class="section-four swiper-slide">
    		    	        	<div class="white"></div>
    		    	        	<div class="container">
    		    	        		<div class="row">
    		    	        			<div class="col-lg-6 offset-lg-6  col-sm-8 offset-sm-2 col-12 offset-0">
    		    	        				<h2 class="section-title">Этот текст добавлен для демонстрации на странице</h2>
    		    	        				<p class="section-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        				<p class="section-paragraph test">Тест на внимательность</p>
    		    	        				<button class="button-more button-section">Подробнее</button>
    		    	        				<button class="button-stock button-section">Все акции</button>
    		    	        			</div>
    		    	        		</div>
    		    	        		<div class="row">
    		    	        			<div class="col-md-3 ">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg "></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_1pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        			<div class="col-md-3">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg "></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_2pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        			<div class="col-md-3">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg"></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_3pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        			<div class="col-md-3">
    		    	        				<div class="slider-block">
    		    	        					<div class="slider-block-bg slider-block-bg-active "></div>
    		    	        					<div class="slider-content">
    		    	        						<img src="img/slider/slider_4pre.jpg" alt="" class="slider-img">
    		    	        						<div class="slider-block-op">
    		    	        							<p class="slider-paragraph">Акция действует с 01.07.18 по 31.07.18</p>
    		    	        							<h3 class="slider-title">Этот текст добавлен для <br>демонстрации на странице</h3>
    		    	        						</div>
    		    	        					</div>
    		    	        				</div>
    		    	        			</div>
    		    	        		</div>
    		    	        	</div>
    		    	        </div>
    		    	    </div>

    		    	    <div class="swiper-pagination">
    		    	    </div>


    		    	    <div class="swiper-button-prev"></div>
    		    	    <div class="swiper-button-next"></div>

    		    	</div>`;
			  
				   return card;
			   };
			   goodsWrapper.appendChild(createCardGoods());
			   //initialize swiper when document ready
			   var mySwiper = new Swiper('.swiper-container', {
			       speed: 400,
			       spaceBetween: 100,
			       navigation: {
			              nextEl: '.swiper-button-next',
			              prevEl: '.swiper-button-prev',
			            },
			       pagination: {
			         el: '.projects-pagination',
			   		  bulletClass: 'slider-block',
			   		  bulletActiveClass: 'slider-block-active',
			   		  clickable: true
			       },     
			   });
		}
	});




});

