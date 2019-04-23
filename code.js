$(document).ready(function() {
    if ($(window).scroll(function() {
            $(this).scrollTop() > $("header .htop").outerHeight(!0) + 150 ? $(".htop2").show() : $(this).scrollTop() < $("header .htop").outerHeight(!0) + 150 && $(".htop2").hide()
        }), $(window).width() > 1049) $(".owl-item").css("width", "auto");
    else {
        $(".button-mob").click(function() {
            $(".button-mob").fadeOut(0).promise().done(function() {
                $("p.m-hidden").fadeIn()
            })
        });
        var scrollPosM = $(".market-header").offset().top - 200,
            onceM = !1;
        $(window).scroll(function() {
            var scrolled;
            if ($(window).scrollTop() > scrollPosM && !onceM) {
                onceM = !0;
                var once = !1;

                function ggg() {
                    animateOn(1), once = !0
                }

                function animateOn(activeTxt) {
                    1 == activeTxt && (activeTxt = 2), 9 == activeTxt && animateOn((activeTxt = 1) + 1), once && 1 == activeTxt || ($(".m-fuctions-item[data-id=" + activeTxt + "]").addClass("active"), $(".m-fuctions-item[data-id=" + activeTxt + "]").find(".m-fuctions-img").addClass("active"), setTimeout(function() {
                        $(".m-fuctions-item[data-id=" + activeTxt + "]").removeClass("active"), $(".m-fuctions-item[data-id=" + activeTxt + "]").find(".m-fuctions-img").removeClass("active"), (once || 1 != activeTxt) && animateOn(activeTxt + 1)
                    }, 2e3))
                }
                ggg()
            }
        })
    }

    function SendFile(email, phone) {
        $.ajax({
            type: "POST",
            url: "send-file.php",
            data: {
                email: email,
                phone: phone
            },
            success: function() {
                $(".cform-block").animate({
                    opacity: 0
                }, 500, function() {
                    $(".conversion .cform").append('<div class="transform" style="position: absolute;top: 50%;left: 50%;width: 100%;text-align:  center;">На указанную почту отправлено письмо с вложением!</div>')
                })
            }
        })
    }

    function SendFile2(email, phone) {
        $.ajax({
            type: "POST",
            url: "send-file.php",
            data: {
                email: email,
                phone: phone
            },
            success: function() {
                $(".mail-modal ul").animate({
                    opacity: 0
                }, 500, function() {
                    $(".mail-modal").append('<div class="transform" style="position: absolute;top: 50%;left: 50%;width: 100%;text-align:  center;">На указанную почту отправлено письмо с вложением!</div>')
                })
            }
        })
    }

    function SendInfo(email, phone, keyword, link, source) {
        $.ajax({
            type: "POST",
            url: "mail2.php",
            data: {
                email: email,
                phone: phone,
                keyword: keyword,
                link: link,
                source: source
            }
        })
    }

    function afterReveal() {
        var currentCount = 1,
            doStuff = function() {
                $(".queue[data-id=" + currentCount + "]").animate({
                    opacity: 1
                }, 50).promise().done(function() {
                    currentCount++, doStuff(), 45 == currentCount && ($(".first-q .step2-gif").hide(), $(".first-q .step3-gif").show())
                })
            };
        ! function loopingFunction() {
            doStuff()
        }()
    }
    $(".sostav-item").hover(function() {
        $(this).find(".sostav-body").addClass("active")
    }, function() {
        $(this).find(".sostav-body").removeClass("active")
    }), $(".m-item").hover(function() {
        $(this).addClass("active"), $(this).find("span").css("opacity", "1")
    }, function() {
        $(this).removeClass("active"), $(this).find("span").css("opacity", "0")
    }), $("body").on("click", "#cbtn", function() {
        var email = $(".email-now").val(),
            phone = $(".phone-now").val(),
            keyword = $(".keyword2").val(),
            link = $(".link").val(),
            source = $(".source").val(),
            error = 0;
        "" != phone && "" != email || ($(".email-now, .phone-now").css("background", "#D66161"), error++), 0 == error && (SendFile(email, phone), SendInfo(email, phone, keyword, link, source))
    }), $("body").on("click", "#sendMailButton", function() {
        var email = $(".mail-email").val(),
            phone = $(".mail-phone").val(),
            keyword = $(".mail-phone").val(),
            link = $(".link").val(),
            source = $(".source").val(),
            error = 0;
        "" != phone && "" != email || ($(".mail-email, .mail-phone").css("background", "#D66161"), error++), 0 == error && (SendFile2(email, phone), SendInfo(email, phone, keyword, link, source))
    }), $("body").on("click", ".wpp-href", function(e) {
        e.preventDefault();
        var id = $(this).data("id");
        $(".modal2[data-id=" + id + "]").fadeIn(), $(".wpp-modal-block").css("opacity", "1").addClass("animated zoomIn")
    }), $("#topluch1, #top_luch1").animate({
        opacity: 1
    }, 1500, function() {
        $("#topluch2").animate({
            opacity: 1
        }, 1e3, function() {
            $("#topluch3").animate({
                opacity: 1
            }, 1e3), $("#topluch1, #top_luch1").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
        })
    }), $("body").on("click", ".cont-label", function() {
        var firstq = $(".first-q input[type=radio]:checked").val(),
            secondq = $(".second-q input[type=radio]:checked").val(),
            thirdq = $(".third-q input[type=radio]:checked").val();
        $(".next-btn").css("border", "2px solid #00b5ff").removeClass("wpulse-button").addClass("pulse-button")
    }), $("body").on("click", ".check_input", function() {
        $(".next-btn2").css("border", "2px solid #00b5ff").removeClass("wpulse-button").addClass("pulse-button")
    }), $(".game-phone").keyup(function() {
        var a = $(this).val().length,
            val = $(this).val();
        a >= 11 && $(".next-btn3").css("border", "2px solid #00b5ff").removeClass("wpulse-button").addClass("pulse-button")
    }), $("body").on("click", "#start-btn, .white", function() {
        $(".fadeOut-block").fadeOut().promise().done(function() {
            $(".game-center,.next-btn, .close-btn").fadeIn(), $(".first-q .step2-gif").show(), setTimeout(function() {
                afterReveal()
            }, 300)
        }), count = 0
    }), $("body").on("click", ".check_input", function(e) {
        e.preventDefault();
        var id = $(this).data("id");
        $(".radio" + id + " input:radio").prop("checked") ? $(".radio" + id + "  input:radio").prop("checked", !1) : $(".radio" + id + "  input:radio").prop("checked", !0)
    });
    var count = 0,
        time1, time2, time3;

    function afterReveal2() {
        var currentCount2 = 1,
            doStuff2 = function() {
                $(".queue2[data-id=" + currentCount2 + "]").animate({
                    opacity: 1
                }, 50).promise().done(function() {
                    currentCount2++, doStuff2(), 45 == currentCount2 && ($(".second-q .step2-gif").hide(), $(".second-q .step3-gif").show())
                })
            };
        ! function loopingFunction() {
            doStuff2()
        }()
    }

    function afterReveal3() {
        var currentCount3 = 1,
            doStuff3 = function() {
                $(".queue3[data-id=" + currentCount3 + "]").animate({
                    opacity: 1
                }, 100).promise().done(function() {
                    currentCount3++, doStuff3(), 39 == currentCount3 && ($(".third-q .step2-gif").hide(), $(".third-q .step3-gif").show())
                })
            };
        ! function loopingFunction() {
            doStuff3()
        }()
    }

    function afterReveal4() {
        var currentCount4 = 1,
            doStuff4 = function() {
                $(".queue4[data-id=" + currentCount4 + "]").animate({
                    opacity: 1
                }, 100).promise().done(function() {
                    currentCount4++, doStuff4(), 31 == currentCount4 && ($(".last-q .step4-gif").hide(), $(".last-q .step3-gif").show(), setTimeout(function() {
                        $(".manager").animate({
                            opacity: 1
                        }, 1e3)
                    }, 500))
                })
            };
        ! function loopingFunction() {
            doStuff4()
        }()
    }

    function SendOrder(firstq, secondq1, secondq2, secondq3, secondq4, secondq5, secondq6, secondq7, game_phone, keyword, link, source) {
        $.ajax({
            type: "POST",
            url: "game.php",
            data: {
                firstq: firstq,
                secondq1: secondq1,
                secondq2: secondq2,
                secondq3: secondq3,
                secondq4: secondq4,
                secondq5: secondq5,
                secondq6: secondq6,
                secondq7: secondq7,
                game_phone: game_phone,
                keyword: keyword,
                link: link,
                source: source
            },
            success: function() {}
        })
    }
    if ($("body").on("click", ".next-btn", function() {
            $(".second-q .step2-gif").show(), $(".second-q .step3-gif").hide(), $(".quiz1 input:radio").is(":checked") ? ($(".next-btn").hide(), $(".next-btn2, .back-btn1, .close-btn").show(), $(".check-radio").empty(), $("#percent33").css("top", "58%"), $("#percent33").css("width", "75%"), $(".first-q").addClass("animated slideOutRight").fadeOut().promise().done(function() {
                $(".second-q").addClass("animated slideInLeft").fadeIn(), $(".first-q").removeClass("slideOutRight")
            }), time1 = setInterval(function() {
                count < 34 && ($(".percent").empty().append(count + "%"), count++)
            }, 35), setTimeout(function() {
                afterReveal2()
            }, 1e3)) : ($(".check-radio").empty(), $(".check-radio").append("Пожалуйста, выберете один из представленных вариантов!"))
        }), $("body").on("click", ".next-btn2", function() {
            $(".third-q .step2-gif").show(), $(".third-q .step3-gif").hide(), $(".quiz2 input:radio").is(":checked") ? ($(".next-btn2, .back-btn1").hide(), $(".next-btn3, .back-btn2, .close-btn").show(), $("#percent33").css("display", "none"), $("#percent66").fadeIn(0).promise().done(function() {
                $("#percent66").css("top", "51%"), $("#percent66").css("width", "85%")
            }), $(".second-q").removeClass("slideInleft").addClass("slideOutRight").fadeOut().promise().done(function() {
                $(".third-q").addClass("animated slideInLeft").fadeIn(), $(".second-q").removeClass("slideOutRight")
            }), time2 = setInterval(function() {
                count < 67 && ($(".percent").empty().append(count + "%"), count++)
            }, 35), setTimeout(function() {
                afterReveal3()
            }, 1e3)) : ($(".check-radio").empty(), $(".check-radio").append("Пожалуйста, выберете один из представленных вариантов!"))
        }), $("body").on("click", ".next-btn3", function() {
            var phone;
            if ($(".last-q .step3-gif").hide(), $(".last-q .step4-gif").show(), "" == $(".game-phone").val()) $(".game-phone").css("background", "#D66161");
            else {
                $(".next-btn3, .next-btn, .back-btn2, .close-btn").hide(), $(".ok-btn, .step4-gif").show(), $("#percent66").fadeOut().promise().done(function() {
                    $("#percent100").fadeIn()
                }), $(".third-q").removeClass("slideInleft").addClass("slideOutRight").fadeOut().promise().done(function() {
                    $(".last-q").addClass("animated slideInLeft").fadeIn()
                }), time3 = setInterval(function() {
                    count < 101 && ($(".percent").empty().append(count + "%"), count++)
                }, 35), setTimeout(function() {
                    afterReveal4()
                }, 1e3);
                var firstq = $(".first-q input[type=radio]:checked").val(),
                    secondq1 = $(".radio1 input[type=radio]:checked").val(),
                    secondq2 = $(".radio2 input[type=radio]:checked").val(),
                    secondq3 = $(".radio3 input[type=radio]:checked").val(),
                    secondq4 = $(".radio4 input[type=radio]:checked").val(),
                    secondq5 = $(".radio5 input[type=radio]:checked").val(),
                    secondq6 = $(".radio6 input[type=radio]:checked").val(),
                    secondq7 = $(".radio7 input[type=radio]:checked").val(),
                    game_phone = $(".game-phone").val(),
                    keyword = $(".keyword").val(),
                    link = $(".link").val(),
                    source;
                SendOrder(firstq, secondq1, secondq2, secondq3, secondq4, secondq5, secondq6, secondq7, game_phone, $(".source").val(), keyword, link)
            }
        }), $("body").on("click", ".back-btn1", function() {
            $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button"), $(".second-q").addClass("animated slideOutRight").fadeOut().promise().done(function() {
                $(".first-q").addClass("slideInLeft").fadeIn(), $(".second-q").removeClass("slideOutRight"), $(".next-btn2, .back-btn1").hide(), $(".next-btn, .close-btn").show(), $(".first-q .step2-gif").show(), $(".first-q .step3-gif").hide()
            })
        }), $("body").on("click", ".back-btn2", function() {
            count = 66, $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button"), $(".third-q").addClass("animated slideOutRight").fadeOut().promise().done(function() {
                $(".second-q").addClass("slideInLeft").fadeIn(), $(".third-q").removeClass("slideOutRight"), $(".next-btn3, .back-btn2").hide(), $(".next-btn2, .back-btn1, .close-btn").show(), $(".second-q .step2-gif").show(), $(".second-q .step3-gif").hide()
            })
        }), $("body").on("click", ".close-btn", function() {
            setTimeout(function() {
                count = 0
            }, 1e3), clearInterval(time1), clearInterval(time2), clearInterval(time3), $(".game-center").fadeOut().promise().done(function() {
                $(".fadeOut-block").fadeIn(), $(".first-q, .second-q, .third-q, .last-q").removeClass("animated slideInLeft slideOutRight").fadeOut().promise().done(function() {
                    $(".first-q").fadeIn(), $(".next-btn").show(), $(".next-btn2, .next-btn3, .back-btn1, .back-btn2, .ok-btn").hide(), $("#percent33").show().css("top", "77%").css("width", "50%"), $("#percent66").hide().css("top", "60%").css("width", "70%"), $(".queue, .queue2, .queue3, .queue4").css("opacity", "0"), $(".game-phone").val(""), $(".percent").empty().append("0%"), $("#percent100").fadeOut(), $("input:radio").prop("checked", !1), $(".first-q .step2-gif, .second-q .step2-gif, .third-q .step2-gif, .last-q .step4-gif").show(), $(".first-q .step3-gif, .second-q .step3-gif, .third-q .step3-gif").hide(), $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button")
                })
            })
        }), $("body").on("click", ".ok-btn", function() {
            setTimeout(function() {
                count = 0
            }, 1e3), clearInterval(time1), clearInterval(time2), clearInterval(time3), $(".game-center").fadeOut().promise().done(function() {
                $(".fadeOut-block").fadeIn(), $(".first-q, .second-q, .third-q, .last-q").removeClass("animated slideInLeft slideOutRight").fadeOut().promise().done(function() {
                    $(".first-q").fadeIn(), $(".first-q .step2-gif, .second-q .step2-gif, .third-q .step2-gif, .last-q .step4-gif").show(), $(".first-q .step3-gif, .second-q .step3-gif, .third-q .step3-gif").hide(), $(".next-btn").show(), $(".next-btn2, .next-btn3, .back-btn1, .back-btn2, .ok-btn").hide(), $(".queue, .queue2, .queue3, .queue4").css("opacity", "0"), $("#percent33").show().css("top", "77%").css("width", "50%"), $("#percent66").hide().css("top", "60%").css("width", "70%"), $(".game-phone").val(""), $(".percent").empty().append("0%"), $("#percent100").fadeOut(), $("input:radio").prop("checked", !1), $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button")
                })
            })
        }), $("body").on("mouseenter", ".green_block", function() {
            var id = $(this).data("id");
            $(".green_block[data-id=" + id + "]").css("opacity", "1"), $(".black_block[data-id=" + id + "]").css("opacity", "0"), $(".text_block[data-id=" + id + "]").css("fill", "#000"), $(".text_block[data-id=" + id + "]").css("text-shadow", "0 0 10px rgba(0, 0 ,0 ,0.5)")
        }), $("body").on("mouseleave", ".green_block", function() {
            var id = $(this).data("id");
            $(".green_block[data-id=" + id + "]").css("opacity", "0"), $(".black_block[data-id=" + id + "]").css("opacity", "1"), $(".text_block[data-id=" + id + "]").css("fill", "#60ff00")
        }), $("body").on("mouseenter", ".text_block", function() {
            var id = $(this).data("id");
            $(".green_block[data-id=" + id + "]").css("opacity", "1"), $(".black_block[data-id=" + id + "]").css("opacity", "0"), $(".text_block[data-id=" + id + "]").css("fill", "#000")
        }), $("body").on("mouseleave", ".text_block", function() {
            var id = $(this).data("id");
            $(".green_block[data-id=" + id + "]").css("opacity", "0"), $(".black_block[data-id=" + id + "]").css("opacity", "1"), $(".text_block[data-id=" + id + "]").css("fill", "#60ff00")
        }), $("body").on("click", "#mobOffer", function() {
            var id = $(this).data("id");
            $("body").addClass("body-fix"), $(".modal2[data-id=" + id + "]").fadeIn(), $(".order-modal-block").css("opacity", "1").addClass("animated zoomIn")
        }), $(window).scroll(function() {
            $("#mobOffer").stop().animate({
                marginTop: $(window).scrollTop() + "px",
                marginLeft: $(window).scrollLeft() + "px"
            }, "fast")
        }), $(".mvfade[data-id=1]").show(), $(window).width() < 670 && $("body").on("click", ".mvclick", function() {
            var id = $(this).data("id");
            $(".mvfade").hide().promise().done(function() {
                $(".mvfade[data-id=" + id + "]").show()
            })
        }), $("body").on("click", ".read-more", function() {
            $(".ac_text").show(), $(".read-more").hide().promise().done(function() {
                $(".read-more2").show()
            })
        }), $("body").on("click", ".read-more2", function() {
            $(".ac_text").hide(), $(".read-more2").hide().promise().done(function() {
                $(".read-more").show()
            })
        }), $("body").on("click", ".share", function(e) {
            e.preventDefault(), $(".share_block").fadeToggle()
        }), $(window).width() < 1049) {
        var scrollPos = $("#statistics").offset().top,
            once = !1;
        $(window).scroll(function() {
            var scrolled;
            $(window).scrollTop() > scrollPos && !once && (once = !0, $(".st-anim[data-id=1]").css({
                top: "0",
                transform: "rotate(0"
            }).promise().done(function() {
                $(".st-anim[data-id=1]").animate({
                    opacity: 1
                }, 1e3, function() {
                    $(".st-txt[data-id=1]").animate({
                        opacity: 1
                    }, 1e3, function() {
                        $(".st-anim[data-id=2]").css({
                            top: "0",
                            transform: "rotate(0"
                        }).promise().done(function() {
                            $(".st-anim[data-id=2]").animate({
                                opacity: 1
                            }, 1e3, function() {
                                $(".st-txt[data-id=2]").animate({
                                    opacity: 1
                                }, 1e3, function() {
                                    $(".st-anim[data-id=3]").css({
                                        top: "0",
                                        transform: "rotate(0"
                                    }).promise().done(function() {
                                        $(".st-anim[data-id=3]").animate({
                                            opacity: 1
                                        }, 1e3, function() {
                                            $(".st-txt[data-id=3]").animate({
                                                opacity: 1
                                            }, 1e3, function() {
                                                $(".st-anim[data-id=4]").css({
                                                    top: "0",
                                                    transform: "rotate(0"
                                                }).promise().done(function() {
                                                    $(".st-anim[data-id=4]").animate({
                                                        opacity: 1
                                                    }, 1e3, function() {
                                                        $(".st-txt[data-id=4]").animate({
                                                            opacity: 1
                                                        }, 1e3)
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }))
        });
        var scrollPos2 = $("#kinds").offset().top,
            once2 = !1;

        function ggg() {
            $(window).scroll(function() {
                var scrolled2;
                $(window).scrollTop() > scrollPos2 && !once && ($(".mlamp_block").hasClass("a-check") || ($(".mlamp_block").addClass("a-check"), animateOn(1), once2 = !0))
            })
        }

        function animateOn(activeTxt) {
            1 == activeTxt && (activeTxt = 2), 10 == activeTxt && animateOn((activeTxt = 1) + 1), once2 && 1 == activeTxt || ($(".mlb[data-id=" + activeTxt + "] img").css({
                filter: "brightness(0) invert(1)"
            }), $(".mlb[data-id=" + activeTxt + "] div:last-child").css({
                color: "#60ff00"
            }), activeTxt % 2 == 0 ? $("#mlamp_luch").fadeIn() : $("#mlamp_luch").fadeOut(), setTimeout(function() {
                $(".mlb img").css({
                    filter: "none"
                }), $(".mlb div:last-child").css({
                    color: "#fff"
                }), (once2 || 1 != activeTxt) && animateOn(activeTxt + 1)
            }, 2e3))
        }
        ggg()
    }
});