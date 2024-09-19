import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import gsap from 'gsap';
import $ from 'jquery'; // For Bootstrap functionality
import './../styles/hero.css';
import './../styles/intro.css';
import './../styles/style.css'; // Include your style.css

function HeroNavi() {
    useEffect(() => {
        // GSAP Timeline for Intro Animation
        const introTL = gsap.timeline();
        introTL
            .to('.intro', 0.1, { fontFamily: 'Anton' })
            .to('.intro', 0.1, { fontFamily: 'Jost' })
            .to('.intro', 0.1, { fontFamily: 'Alkatra' })
            .to('.intro', 0.1, { fontFamily: 'Nova Oval' })
            .to('.intro', 0.1, { fontFamily: 'Oswald' })
            .to('.intro', 0.1, { fontFamily: 'PT Serif' })
            .to('.intro', 0.1, { fontFamily: 'Lexend' })
            .to('.intro', 0.1, { fontFamily: 'Poppins' })
            .to('.intro', 0.1, { fontFamily: 'Titillium Web' })
            .to('.intro', 1, { scaleY: 0, ease: 'expo.inOut' })
            .to('.intro__red', 1, { scaleY: 2, ease: 'expo.inOut' }, '-=1.25')
            .to('.hero_new', { opacity: 1, duration: 1 }, '-=0.5')
            .set('.intro', { display: 'none' }, '-=0.25');

        // Bootstrap functionality and jQuery
        $(document).ready(function () {
            const window_width = $(window).width();
            $('[data-toggle="tooltip"]').tooltip();

            if ($('.navbar[color-on-scroll]').length !== 0) {
                $(window).on('scroll', pk.checkScrollForTransparentNavbar);
            }

            $('.form-control').on('focus', function () {
                $(this).parent('.input-group').addClass('input-group-focus');
            }).on('blur', function () {
                $(this).parent('.input-group').removeClass('input-group-focus');
            });

            pk.initPopovers();
            pk.initSliders();
        });

        $(document).on('click', '.navbar-toggler', function () {
            const $toggle = $(this);
            if (pk.misc.navbar_menu_visible === 1) {
                $('html').removeClass('nav-open');
                pk.misc.navbar_menu_visible = 0;
                setTimeout(function () {
                    $toggle.removeClass('toggled');
                    $('#bodyClick').remove();
                }, 550);
            } else {
                setTimeout(function () {
                    $toggle.addClass('toggled');
                }, 580);

                const div = '<div id="bodyClick"></div>';
                $(div).appendTo('body').click(function () {
                    $('html').removeClass('nav-open');
                    pk.misc.navbar_menu_visible = 0;
                    $('#bodyClick').remove();
                    setTimeout(function () {
                        $toggle.removeClass('toggled');
                    }, 550);
                });

                $('html').addClass('nav-open');
                pk.misc.navbar_menu_visible = 1;
            }
        });

        const pk = {
            misc: {
                navbar_menu_visible: 0,
            },

            checkScrollForTransparentNavbar: debounce(function () {
                if ($(document).scrollTop() > $('.navbar').attr('color-on-scroll')) {
                    if (transparent) {
                        transparent = false;
                        $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
                    }
                } else {
                    if (!transparent) {
                        transparent = true;
                        $('.navbar[color-on-scroll]').addClass('navbar-transparent');
                    }
                }
            }, 17),

            initPopovers: function () {
                if ($('[data-toggle="popover"]').length !== 0) {
                    $('body').append('<div class="popover-filter"></div>');
                    $('[data-toggle="popover"]').popover().on('show.bs.popover', function () {
                        $('.popover-filter').click(function () {
                            $(this).removeClass('in');
                            $('[data-toggle="popover"]').popover('hide');
                        });
                        $('.popover-filter').addClass('in');
                    }).on('hide.bs.popover', function () {
                        $('.popover-filter').removeClass('in');
                    });
                }
            },

            initSliders: function () {
                if ($('#sliderRegular').length !== 0) {
                    const rangeSlider = document.getElementById('sliderRegular');
                    noUiSlider.create(rangeSlider, {
                        start: [5000],
                        range: {
                            min: [2000],
                            max: [10000],
                        },
                    });
                }
                if ($('#sliderDouble').length !== 0) {
                    const slider = document.getElementById('sliderDouble');
                    noUiSlider.create(slider, {
                        start: [20, 80],
                        connect: true,
                        range: {
                            min: 0,
                            max: 100,
                        },
                    });
                }
            },
        };

        function debounce(func, wait, immediate) {
            let timeout;
            return function () {
                const context = this,
                    args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                }, wait);
                if (immediate && !timeout) func.apply(context, args);
            };
        }
    }, []);

    return (
        <main className="">
            {/* Navbar */}
            <nav className="menu flex navbar navbar-toggleable-md fixed-top navbar-transparent" color-on-scroll="500">
                <div className="container">
                    <div className="navbar-translate">
                        <button
                            className="navbar-toggler navbar-toggler-right"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarToggler"
                            aria-controls="navbarToggler"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-bar"></span>
                            <span className="navbar-toggler-bar"></span>
                            <span className="navbar-toggler-bar"></span>
                        </button>

                        <a className="navbar-brand" href="https://www.example.com">Martrexa</a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                    <p className="hidden-lg-up">Twitter</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/" target="_blank">
                                    <i className="fa fa-facebook-square"></i>
                                    <p className="hidden-lg-up">Facebook</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/" target="_blank">
                                    <i className="fa fa-instagram"></i>
                                    <p className="hidden-lg-up">Instagram</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Star on GitHub" data-placement="bottom" href="https://www.github.com/" target="_blank">
                                    <i className="fa fa-github"></i>
                                    <p className="hidden-lg-up">GitHub</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.example.com" target="_blank" className="btn btn-danger btn-round">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Intro Animation */}
            <section className="flex__col intro flex">
                Loading
                <div className="intro__red flex">
                    <div>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="hero_new" style={{ opacity: 0 }}>
                <div className="wrapper">
                    <div className="page-header section-dark" style={{ backgroundImage: 'url("http://demos.creative-tim.com/paper-kit-2/assets/img/antoine-barres.jpg")' }}>
                        <div className="filter"></div>
                        <div className="content-center">
                            <div className="container">
                                <div className="title-brand">
                                    <h1 className="presentation-title">Martrexa</h1>
                                    <div className="fog-low">
                                        <img src="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png" alt="fog" />
                                    </div>
                                    <div className="fog-low right">
                                        <img src="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png" alt="fog" />
                                    </div>
                                </div>

                                <h2 className="presentation-subtitle text-center">...where shopping is at it's best</h2>
                            </div>
                        </div>
                        <div className="moving-clouds" style={{ backgroundImage: 'url("http://demos.creative-tim.com/paper-kit-2/assets/img/clouds.png")' }}>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HeroNavi;
