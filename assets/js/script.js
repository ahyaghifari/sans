$(document).ready(function () {

    var owl = $(".owl-carousel").owlCarousel({
        items: 1,
        center: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768 : {
                items: 3,
            }
        }
    });

    let iceCreams = []
    let filteredIceCreams = []

    function appendIceCreams() {
        $('.owl-carousel div').remove()
        $.each(filteredIceCreams, function (i, d) { 
             $('.owl-carousel').append(`<div class="w-full h-[45vh] flex items-center justify-center">
                        <input type="hidden" class="ice-cream-name" value="${d.name}">
                        <input type="hidden" class="ice-cream-description" value="${d.description}">
                        <div class="w-[160px] xl:w-[190px] h-max">
                            <img src="assets/ice-creams/${d.image}" alt="">
                        </div>
                    </div>`)
        });
        owl.owlCarousel('initialize')
    }
    
    $.getJSON("assets/ice-creams/data.json", function (data, textStatus, jqXHR) {
        iceCreams = data
        filteredIceCreams = data
        appendIceCreams()
        }
    );


    let mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
        gsap.to('#images-header', {
            scrollTrigger: {   
                trigger: '#images-header',
                start: 'top top',
                end: '+=500',
                scrub: true
            },
            scale: 0.5,
            rotate: -180,
            y: '40vh',
            opacity: 0,
            duration: 1
        })
        gsap.from('#what-the-extension-image', {
            scrollTrigger :{
                trigger: '#what-the-extension-image',
                start: 'top 58%', 
                end: 'bottom center',
                scrub: true,
            },
            rotate: 140,
            opacity: 0,
            duration: 3,
            scale: 0,
            transformOrigin: 'left',
            ease: 'back.out(2)',
        })
    })

    mm.add('(max-width: 768px)', () => {
        gsap.to('#images-header', {
            scrollTrigger: {   
                trigger: '#images-header',
                start: 'top 15%',
                end: '+=500',
                scrub: true
            },
            scale: 0.5,
            rotate: -180,
            y: '40vh',
            opacity: 0,
            duration: 1
        })
        gsap.from('#what-the-extension-image', {
            scrollTrigger :{
                trigger: '#what-the-extension-image',
                start: 'top 80%', 
                end: 'bottom 70%',
                scrub: true,
            },
            rotate: 140,
            opacity: 0,
            duration: 1.5,
            scale: 0,
            transformOrigin: 'left',
            ease: 'back.out(2)',
        })
    })

    // ---------- HEADER ---------

    gsap.from('header h1', {
        text: {
            value: ''
        },
        duration: 1,
        ease: "power.out"
    })
    gsap.from('header h3', {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 1
    })

    // ---------- OUR SAY ---------
    gsap.from('#our-say-image', {
        scrollTrigger :{
            trigger: '#our-say-image',
            start: 'top 80%', 
            end: 'bottom center',
            scrub: true,
        },
        rotate: 85,
        opacity: 0,
        duration: 1.5,
        scale: 0,
        ease: 'power.out'
    })

    gsap.from('#our-say div h2', {
        scrollTrigger: {
            trigger: '#our-say',
            start: 'top 70%',
            end: 'bottom 80%',
        },
        text: {
            value: ''
        },
        duration: 1
    })
    gsap.from('#our-say div p', {
        scrollTrigger: {
            trigger: '#our-say',
            start: 'top 80%',
            end: 'bottom 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1
    })

    // ---------- WHAT THE  ---------

    gsap.from('#what-the-extension div h2', {
        scrollTrigger: {
            trigger: '#what-the-extension',
            start: 'top 60%',
            end: 'bottom 40%'
        },
        text: {
            value: ''
        },
        duration: 1
    })

    gsap.from('#what-the-extension div p', {
        scrollTrigger: {
            trigger: '#what-the-extension',
            start: 'top 60%',
            end: 'bottom 40%'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 1
    })

    // ---------- ICE CREAMS ---------
    
    $('.ice-cream-carousel-prev-btn').click(function () {
        owl.trigger('prev.owl.carousel')
    })

    $('.ice-cream-carousel-next-btn').click(function () {
        owl.trigger('next.owl.carousel')
    })

    owl.on('change.owl.carousel', function (event) {
        setTimeout(() => {
            let name = $('.owl-item.active.center .ice-cream-name').val()
            let description = $('.owl-item.active .ice-cream-description').val()
            $('#ice-cream-name-preview').html(name)
            $('#ice-cream-description-preview').html(description)
        }, 100);
    })

    $('.ice-cream-filter-btn').click(function () {
        if ($(this).html() != 'all') {   
            filteredIceCreams = iceCreams.filter((i) => i.category == $(this).html())
        } else {
            filteredIceCreams = iceCreams
        }

        appendIceCreams()
        $('.ice-cream-filter-btn').removeClass('font-semibold')
        $(this).addClass('font-semibold')
    })

    let horizontalPanel = gsap.utils.toArray('.horizontal-panels')

    gsap.to(horizontalPanel, {
        xPercent: -100 * (horizontalPanel.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: '#thanks-contact',
            // start: 'top top',
            pin: true,
            scrub: true,
            snap: 1 / (horizontalPanel.length - 1),
            end: () => {
                document.querySelector('#thanks-contact').offsetWidth
            }
        }
    })


});
       