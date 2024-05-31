import { useEffect, useRef } from "react"
// import {
// 	Pagination,
// 	Navigation,
// 	Scrollbar,
// 	A11y,
// 	EffectCube,
// } from "swiper/modules"
import "./homeSlides.css"
import { register } from "swiper/element/bundle"
register()
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { assets, homeCorosal } from "../../assets/asset"
const HomeSlides = () => {
	const swiperRef = useRef(null)

	useEffect(() => {
		const swiperContainer = swiperRef.current
		const params = {
			navigation: true,
			pagination: { clickable: true },
			// These are new...
			injectStyles: [
				`
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
						width:20px;
						height:20px;
            padding: 10px;
            border-radius: 100%;
            border: 1px solid black;
            color: red;
						font-size:18px;
          }
          .swiper-pagination-bullet{
						margin-bottom:150px;
            width: 10px;
            height: 10px;
						
            background-color: red;
          }
				  .swiper-button-next{
						margin-right:80px;
						}
						 .swiper-button-prev{
						margin-left:80px;
						}


						 @media (max-width: 1000px) {

					.swiper-button-next,
          .swiper-button-prev {
            background-color: white;
						width:20px;
						height:20px;
            padding: 10px;
						font-weight:blod;
            border-radius: 100%;
            border: 1px solid black;
            color: red;
						font-size:18px;
          }

            .swiper-button-next {
              margin-right: 40px;
            }
            .swiper-button-prev {
              margin-left: 40px;
            }
          }
          @media (max-width: 800px) {
            .swiper-button-next,
            .swiper-button-prev {
              margin-right: 10px;
              margin-left: 10px;
							
            }
								.swiper-button-next,
          .swiper-button-prev {
						margin-top:25px;
            background-color: white;
						width:15px;
						height:15px;
            padding: 10px;
						font-weight:blod;
            border-radius: 100%;
            border: 1px solid black;
            color: red;
						font-size:16px;
          }
          }
					
					       @media (max-width: 600px) {
            .swiper-button-next,
            .swiper-button-prev {
              margin-right: 0px;
              margin-left: 0px;
            }
					}

      `,
			],
		}

		Object.assign(swiperContainer, params)
		swiperContainer.initialize()
	}, [])

	const navigate = useNavigate()

	const handleClick = () => {
		window.scrollTo(0, 0)
	}
	return (
		// <div>
		<swiper-container
			className="homeSlider"
			// pagination={{
			// 	clickable: true,
			// 	dynamicBullets: true,
			// }}
			// scrollbar={{ draggable: true }}
			// navigation
			// modules={[Pagination, Navigation, Scrollbar, A11y, EffectCube]}
			// className="mySwiper"

			ref={swiperRef}
			init="false"
		>
			{homeCorosal.map((item) => {
				return (
					<SwiperSlide className="slider-container">
						<div className="home-slides">
							<img
								src={item.image}
								alt="web development"
							/>
							<h2
								onClick={() => {
									navigate(item.link)
									handleClick()
								}}
							>
								Click Here
							</h2>
							<h1>{item.title}</h1>
							<div className="slide-border"></div>
						</div>
					</SwiperSlide>
				)
			})}
		</swiper-container>
		// </div>
	)
}

export default HomeSlides
