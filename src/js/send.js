"use strict";
define(["jquery"], function($) {
    
console.log(11);
$(function () {
    $("[name=send]").click(function () {

        $(":input.error").removeClass('error');
        $(".allert").remove();
        var error;
        var btn = $(this);
        var ref = btn.closest('form').find('[required]');
        var msg = btn.closest('form').find('input, textarea');
        var send_btn = btn.closest('form').find('[name=send]');

         $(ref).each(function() {
            if ($(this).val() == '') {
                var errorfield = $(this);
                $(this).addClass('error').parent('.field').append('<span class="allert">Заполните это поле</span>');
                error = 1;
                $(":input.error:first").focus();
                return;
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if ($(this).attr("type") == 'email') {
                    if(!pattern.test($(this).val())) {
                        $("[name=email]").val('');
                        $(this).addClass('error').parent('.field').append('<span class="allert">Укажите коректный e-mail</span>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
                var patterntel = /^()[0-9]{9,18}/i;
                if ( $(this).attr("type") == 'tel') {
                    if(!patterntel.test($(this).val())) {
                        $("[name=phone]").val('');
                        $(this).addClass('error').parent('.field').append('<span class="allert">Укажите коректный номер телефона</span>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
            }
        })


        if (!(error == 1)) {
            $(send_btn).each(function () {
                $(this).attr('disabled', true);
            });
            $(function () {
                var form = $(this).closest('form'),
					name = form.find('.name').val();
                if ($(this).val() == '') {
                    $.ajax({
                        type: 'POST',
						url: '#',
						data: msg, success: function () {

                         

// 							  setTimeout(function () {
// 							 $(".fancybox-close-small").click();

// 								      }, 1500);



                        }, error: function (xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });

//		-------------------------------------------------------------------					
					
					  $.ajax({
                        type: 'POST',
						url: '#',
						data: msg, success: function () {

                         

// 							  setTimeout(function () {
// 							 $(".fancybox-close-small").click();

// 								      }, 1500);


                        }, error: function (xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });

                } else {
					
                    $.ajax({
                        type: 'POST',
                        url: '#',
                        data: msg,
                        success: $.ajax({
                            type: 'POST',

                            data: msg,


                            statusCode: {
                                0: function () {

                               


// 							  setTimeout(function () {
// 							 $(".fancybox-close-small").click();

// 								      }, 1500);

                                }
                            }
                        }),
                        error: function (xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
		
//		-------------------------------------------------------------------

					  $.ajax({
                        type: 'POST',
                   	url: '#',
                        data: msg,
                        success: $.ajax({
                            type: 'POST',

                            data: msg,


                            statusCode: {
                                0: function () {

                                

// 							  setTimeout(function () {
// 							 $(".fancybox-close-small").click();

// 								      }, 1500);

                                }
                            }
                        }),
                        error: function (xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });

//		-------------------------------------------------------------------

                }
            });
        } ;


        return false;
    })
});

});

