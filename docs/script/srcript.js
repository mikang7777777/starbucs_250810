console.clear();

// 공지사항 배너 스와이퍼
function noticeSwiper__init() {
	const swiper = new Swiper(".notice-swiper-wrap", {
		direction: "vertical",
		slidesPerView: 1,
		loop: true,
		speed: 600,
		autoplay: {
			// 자동 재생 (선택사항)
			delay: 2500,
			disableOnInteraction: false
		}
	});
}

noticeSwiper__init();
