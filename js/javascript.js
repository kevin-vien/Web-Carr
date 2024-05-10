
// -------------------------------------------------menu------------------------------------------------------------
$(document).ready(function () {

    $('#main-menu>li#booking>a').click(function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a

        $('#container').toggleClass('hidden'); // Sử dụng toggleClass() để thêm hoặc loại bỏ lớp hidden

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
    // ---------------------------------------carousel-----------------------------------------------------------------------------
    var currentIndex = 0;
    var items = $(".item-carousel");
    var intervalId;

    // Function to move to the next item in the carousel
    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    // Function to show the item in the carousel with a fade effect
    function showItem(index) {
        items.fadeOut(800); // Fade out all items
        items.eq(index).fadeIn(2000); // Fade in the selected item
    }

    // Start automatic carousel
    intervalId = setInterval(nextItem, 2000); // Change 1000 to the desired interval time

    // Handling when the user clicks the previous button
    $(".prev").click(function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
        clearInterval(intervalId); // Stop automatic carousel when user clicks
    });

    // Handling when the user clicks the next button
    $(".next").click(function () {
        nextItem();
        clearInterval(intervalId); // Stop automatic carousel when user clicks
    });



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
    $('.container-form form').submit(function (event) {
        // Ngăn chặn hành động gửi form mặc định
        event.preventDefault();

        // Xóa các thông báo lỗi trước
        $('.error').text('');

        // Kiểm tra họ và tên
        var fullName = $('#fullName').val().trim();
        if (fullName === '') {
            $('#fullNameError').text('Vui lòng nhập họ và tên.').css({ outline: 'none', color: 'red', position: 'absolute', top: '40px', 'font-size': '11px', left: '5px' });
            return;
        } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
            $('#fullNameError').text('Họ và tên chỉ được chứa ký tự chữ.').css({ outline: 'none', color: 'red', position: 'absolute', top: '40px', 'font-size': '11px', left: '5px' });
            return;
        } else {
            $('#serviceError').empty(); // Xóa nội dung của phần tử hiển thị lỗi
        }

        // Kiểm tra địa chỉ email
        var email = $('#email').val().trim();
        if (email === '') {
            $('#emailError').text('Vui lòng nhập địa chỉ email.').css({ outline: 'none', color: 'red', position: 'absolute', top: '40px', 'font-size': '11px', right: '116px' });
            return;
        } else if (!validateEmail(email)) {
            $('#emailError').text('Địa chỉ email không hợp lệ.').css({ outline: 'none', color: 'red', position: 'absolute', top: '40px', 'font-size': '11px', right: '116px' });
            return;
        } else {
            $('#serviceError').empty(); // Xóa nội dung của phần tử hiển thị lỗi
        }

        // Kiểm tra việc chọn dịch vụ
        var service = $('#service').val();

        if (service === '0') {
            $('#serviceError').text('Vui lòng chọn một dịch vụ.').css({ position: 'absolute', top: '40px', left: '6px', 'font-size': '11px', 'outline': 'none', color: 'red' });
            return;
        } else {
            $('#serviceError').empty(); // Xóa nội dung của phần tử hiển thị lỗi
        }

        // Kiểm tra ngày phục vụ
        var serviceDate = $('#serviceDate').val().trim();
        if (serviceDate === '') {
            $('#serviceDateError').text('Vui lòng nhập ngày phục vụ dưới dạng số.').css({ position: 'absolute', 'font-size': '11px', color: 'red', top: '40px', right: '42px' });
            return;
        } else if (isNaN(serviceDate)) {
            $('#serviceDateError').text('Vui lòng nhập ngày phục vụ dưới dạng số.').css({ position: 'absolute', 'font-size': '11px', color: 'red', top: '40px', right: '42px' });
            return;
        } else {
            $('#serviceError').empty(); // Xóa nội dung của phần tử hiển thị lỗi
        }



        alert('Form đã gửi!');
        return false;
    });

    function validateEmail(email) {
        // Kiểm tra định dạng email bằng biểu thức chính quy
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
    $(".content-testimonial").owlCarousel({
        loop: true, // Cho phép vòng lặp
        margin: 30, // Khoảng cách giữa các item
        nav: true, // Hiển thị nút điều hướng
        dots: false, // Ẩn các chấm tròn chỉ mục
        autoplay: true, // Tự động chạy carousel
        autoplayTimeout: 5000, // Thời gian chờ giữa các lượt chạy tự động
        autoplayHoverPause: true, // Tạm dừng tự động chạy khi di chuột qua carousel
        responsive:{
            0:{
                items:1 // Hiển thị 1 item trên màn hình nhỏ
            },
            600:{
                items:2 // Hiển thị 2 item trên màn hình có độ rộng từ 600px trở lên
            },
            1000:{
                items:3 // Hiển thị 3 item trên màn hình có độ rộng từ 1000px trở lên
            }
        }
    });
    // // ---------------------------------------------------------footer------------------------------------------------------------
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Click event handler for SignUp button
    $('.form-email button').click(function () {
        var email = $('.form-email input[type="email"]').val();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức chính quy kiểm tra định dạng email
        if (!emailPattern.test(email)) {
            alert('Vui lòng nhập đúng định dạng email.');
            return false; // Ngăn form được submit
        }
        alert('ok');
        // Nếu email hợp lệ, bạn có thể thực hiện các hành động tiếp theo ở đây
        return false;
    });

});


