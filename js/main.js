$(function () {
    // --------------------------------------------------
    // ① Slick スライダー（顔の悩みエリア: .face-slider）
    // --------------------------------------------------
    $('.slick-area').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        swipe: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        variableWidth: true, // CSSで指定した幅（240px〜280px）をそのまま滑らかに流す
        responsive: [
            {
                breakpoint: 901, // 900px以下（タブレット）
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 651, // 650px以下（スマホ）
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    });

    // --------------------------------------------------
    // ② よくあるご質問：アコーディオン（.question）
    // --------------------------------------------------
    $('.js-ac').on('click', function () {
        $(this).next('.acc-body').slideToggle(300);
        $(this).toggleClass('is-open');
    });

    // --------------------------------------------------
    // ③ スクロール連動フェードイン（IntersectionObserver）
    // --------------------------------------------------
    const fadeElements = document.querySelectorAll('.list-fadein');

    if (fadeElements.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target); // 一度表示されたら監視解除
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        });

        fadeElements.forEach(el => observer.observe(el));
    }
});