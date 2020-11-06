AOS.init();

//Копирование в буфер обмена
function copyText(el){
    let $tmp = $("<input>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy")
    $tmp.remove();
    alert('Text copied..')
};


// Паралакс эфект
$(function(){
    if($(window).width() > 960)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.sparks_front',
                    'properties': {
                        'x': {
                            'rigth': {
                                'initial': -40,
                                'multiplier': 0.002,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'bottom': {
                                'initial': 1,
                                'multiplier': 1,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.sparks_back',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': -14,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'bottom': {
                                'initial': -10,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.witcher',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 120,
                                'multiplier': 0.0009,
                                'unit': 'px',
                                'invert': false
                            }
                        }
                    }
                },
            ]
        });
    };
});

// $(window).scroll(function(){
//     let scroll = $(window).scrollTop();
//     console.log(scroll);
//
//     $('.sparks_front').css({
//         left: - scroll/10 + "%",
//         bottom: - scroll/10 + "%",
//         width: 100 + scroll/20 + "%",
//         height: 60 + scroll/20 + "%",
//     })
//
//     $('.sparks_back').css({
//         right: - scroll/10 + "%",
//         bottom: - scroll/10 + "%",
//         width: 100 + scroll/20 + "%",
//         height: 70 + scroll/20 + "%",
//     })
//
//     $('.witcher').css({
//         left: - scroll/10 + "px",
//         bottom: - scroll/10 + "px",
//         width: 45 + scroll/20 + "%",
//         height: 95 + scroll/20 + "%",
//     })
//
//
//
//
// });