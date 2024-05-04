
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

    // Hàm để chuyển đổi đến mục tiếp theo trong carousel
    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    // Hàm để hiển thị mục trong carousel
    function showItem(index) {
        items.hide();
        items.eq(index).show();
    }

    // Bắt đầu tự động chạy carousel
    intervalId = setInterval(nextItem, 1000); // Thay đổi 2000 thành khoảng thời gian bạn muốn

    // Xử lý khi người dùng click vào nút prev
    $(".prev").click(function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
        clearInterval(intervalId); // Dừng tự động chạy khi người dùng click
    });

    // Xử lý khi người dùng click vào nút next
    $(".next").click(function () {
        nextItem();
        clearInterval(intervalId); // Dừng tự động chạy khi người dùng click
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
        }else {
            $('#serviceError').empty(); // Xóa nội dung của phần tử hiển thị lỗi
        }

        // Kiểm tra địa chỉ email
        var email = $('#email').val().trim();
        if (email === '') {
            $('#emailError').text('Vui lòng nhập địa chỉ email.').css({ outline: 'none', color: 'red', position: 'absolute', top: '40px', 'font-size': '11px', right: '5px' });
            return;
        } else if (!validateEmail(email)) {
            $('#emailError').text('Địa chỉ email không hợp lệ.').css({ outline: 'none', color: 'red', position: 'absolute', top: '40px', 'font-size': '11px', right: '5px' });
            return;
        }else {
            $('#serviceError').empty(); // Xóa nội dung của phần tử hiển thị lỗi
        }

        // Kiểm tra việc chọn dịch vụ
        var service = $('#service').val();
        
        if (service === '0') {
            $('#serviceError').text('Vui lòng chọn một dịch vụ.').css({position: 'absolute', top: '40px', left: '6px', 'font-size': '11px', 'outline': 'none', color: 'red'});
            return;
        }else {
            $('#serviceError').empty(); // Xóa nội dung của phần tử hiển thị lỗi
        }

        // Kiểm tra ngày phục vụ
        var serviceDate = $('#serviceDate').val().trim();
        if (serviceDate === '') {
            $('#serviceDateError').text('Vui lòng nhập ngày phục vụ dưới dạng số.').css({position: 'absolute', 'font-size': '11px', color: 'red', top: '40px', right: '42px'});
            return;
        } else if (isNaN(serviceDate)) {
            $('#serviceDateError').text('Vui lòng nhập ngày phục vụ dưới dạng số.').css({position: 'absolute', 'font-size': '11px', color: 'red', top: '40px', right: '42px'});
            return;
        }else {
            $('#serviceError').empty(); // Xóa nội dung của phần tử hiển thị lỗi
        }
       

       
        alert('Form đã gửi!');
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
    // Biến để lưu trữ chỉ số của phần tử hiện tại
    var currentIndex = 0;
    // Biến để lưu trữ tất cả các phần tử testimonial-item
    var items = $('.testimonial-item');
    // Tổng số phần tử
    var totalItems = items.length;
    // Hàm tự động chuyển slide sang phải
    function moveRight() {
        if (currentIndex < totalItems - 1) {
            items.eq(currentIndex).removeClass('active');
            currentIndex++;
            items.eq(currentIndex).addClass('active');
        } else {
            items.removeClass('active');
            currentIndex = 0;
            items.eq(currentIndex).addClass('active');
        }
    }
    // Hàm tự động chạy slide sau một khoảng thời gian
    var autoSlide = setInterval(function () {
        moveRight();
    }, 3000); // Thời gian tự động chuyển slide (ms)    


    // // ---------------------------------------------------------footer------------------------------------------------------------
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Click event handler for SignUp button
    $('button').click(function(){
        var email = $('.form-email input[type="email"]').val();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức chính quy kiểm tra định dạng email
        if (!emailPattern.test(email)) {
            alert('Vui lòng nhập đúng định dạng email.');
            return false; // Ngăn form được submit
        }
        // Nếu email hợp lệ, bạn có thể thực hiện các hành động tiếp theo ở đây
    });
});


