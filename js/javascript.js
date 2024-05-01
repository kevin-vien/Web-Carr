
// -------------------------------------------------menu------------------------------------------------------------
$(document).ready(function () {
    $('#main-menu>li#booking>a').click(function () {
        $('#container').toggleClass('hidden');

        return false;
    });


    // -----------------------------------------header-------------------------------------------------------------
    $(window).scroll(function () {

        if ($(this).scrollTop() > 53) {
            $('#container').css('top', '0px');
            $('#header').stop().slideUp();
        }
        else {
            $('#container').css('top', '53px');
            $('#header').stop().slideDown(500);

        }
        return false;
    })




    // -------------------------------------------------service-out---------------------------------------------------
    $('button').click(function () {
        // Lấy chỉ số của nút button được click
        var clickBtn = parseInt($(this).attr("bt"));

        // Ẩn tất cả các ảnh trong .box-left>img
        $('.box-left>img').hide();

        // Hiển thị ảnh tương ứng với chỉ số của nút button được click
        $('.box-left>img[number="' + clickBtn + '"]').show();
    });


    $('.box-1 button:first-of-type').addClass('active-button');
    $('.box-1 button:first-of-type').children('h4').addClass('active-h4');
    $('.box-1 button:first-of-type').children('img').addClass('active-img');

    $('.box-1 button').click(function () {
        // Loại bỏ lớp active-button, active-h4, active-img từ tất cả các button, h4 và img trong .box-1
        $('.box-1 button').removeClass('active-button');
        $('.box-1 button h4').removeClass('active-h4');
        $('.box-1 button img').removeClass('active-img');

        // Thêm lớp active-button, active-h4, active-img cho button, h4 và img mà được click
        $(this).addClass('active-button');
        $(this).find('h4').addClass('active-h4');
        $(this).find('img').addClass('active-img');
    });


    // ---------------------------booking-------------------------------------
    $('#bookingForm').submit(function (event) {
        // Ngăn chặn hành động gửi form mặc định
        event.preventDefault();

        // Xóa các thông báo lỗi trước
        $('.error').text('');

        // Kiểm tra họ và tên
        var fullName = $('#fullName').val();
        if (fullName == '') {
            $('#fullNameError').text('Vui lòng nhập họ và tên.');
            return;
        }

        // Kiểm tra địa chỉ email
        var email = $('#email').val();
        if (email == '') {
            $('#emailError').text('Vui lòng nhập địa chỉ email.');
            return;
        }
        if (!validateEmail(email)) {
            $('#emailError').text('Địa chỉ email không hợp lệ.');
            return;
        }

        // Kiểm tra việc chọn dịch vụ
        var service = $('#service').val();
        if (service == 'Chọn một dịch vụ') {
            $('#serviceError').text('Vui lòng chọn một dịch vụ.');
            return;
        }

        // Kiểm tra ngày phục vụ
        var serviceDate = $('#serviceDate').val();
        if (serviceDate == '') {
            $('#serviceDateError').text('Vui lòng nhập ngày phục vụ.');
            return;
        }

        // Nếu tất cả kiểm tra thành công, bạn có thể gửi form đi
        // Ở đây bạn có thể thực hiện các hành động khác trước khi gửi form

        // Ví dụ: Hiển thị cảnh báo form đã sẵn sàng gửi
        alert('Form đã sẵn sàng gửi!');
    });

    // Hàm kiểm tra định dạng email
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    // -------------------------------------------------technocian----------------------------------------------------
    $('.wp-item-technicians').hover(
        function () {
            $(this).find('.more-active').toggleClass('hover-show-app');



        }
    );

    // -------------------------------------------testimonial-----------------------------------------------------
    $('.testimonial-item').first().addClass('active'); // Hiển thị phần tử đầu tiên mặc định

    $('.list-button .btn-item').click(function () {
        var index = $(this).index(); // Lấy chỉ số của nút được click

        // Loại bỏ lớp active khỏi tất cả các phần tử testimonial-item
        $('.testimonial-item').removeClass('active');

        // Thêm lớp active vào phần tử testimonial-item tương ứng với nút được click
        $('.testimonial-item').eq(index).addClass('active');

        // Loại bỏ lớp active khỏi tất cả các nút button
        $('.list-button .btn-item').removeClass('active-btn');

        // Thêm lớp active vào nút được click
        $(this).addClass('active-btn');

        // Loại bỏ lớp active-bg-p khỏi tất cả các phần tử testimonial-text
        $('.testimonial-text').removeClass('active-bg-p');

        // Thêm lớp active-bg-p vào phần tử testimonial-text tương ứng với phần tử testimonial-item được kích hoạt
        $('.testimonial-item.active .testimonial-text').addClass('active-bg-p');

        // Loại bỏ lớp active-p khỏi tất cả các phần tử p trong testimonial-text
        $('.testimonial-text p').removeClass('active-p');

        // Thêm lớp active-p vào phần tử p trong testimonial-text tương ứng với phần tử testimonial-item được kích hoạt
        $('.testimonial-item.active .testimonial-text p').addClass('active-p');
    });

    // // ---------------------------------------------------------footer------------------------------------------------------------
    // function validateEmail(email) {
    //     var re = /\S+@\S+\.\S+/;
    //     return re.test(email);
    // }

    // // Click event handler for SignUp button
    // $('button[type="button"]').click(function () {
    //     var email = $('input[type="email"]').val();
    //     if (validateEmail(email)) {
    //         alert('Email is valid');
    //         // Here you can add code to submit the form or perform other actions
    //     } else {
    //         // Display error message if email is not valid
    //         $('.error-message').text('Please enter a valid email').show();
    //     }
    // });
});
