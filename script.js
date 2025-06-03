document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

function showProject() {
    document.body.innerHTML = `
    <div class="container">


    <br /><br /><br /><br /><br /><br /><br />
        <nav>
            <div class="logo">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <a href="index.html">
                    <img src="hinh/Logo_ten-removebg-preview.png" alt="Thiết kế" class="logo-image">
                </a>
            </div>
            <ul>
                <li><a href="index.html">Giới thiệu</a></li>
                <li><a href="index.html">Dự án</a></li>
                <li><a href="index.html">Liên hệ</a></li>
            </ul>
        </nav>
       
                    <label class="highlight-textttt">WEB SHOPPING SECOND HAND MTK</label> <br /><br /><br />
                    <label class="highlight-textttt">Chức năng quản lý bán hàng</label><br /><br />
                    <p>Chức năng quản lý và thống kê giúp tối ưu hóa hoạt động kinh doanh trên nền tảng MTK Second Hand, đảm bảo việc theo dõi đơn hàng, doanh thu và tình trạng sản phẩm một cách chính xác. 
                    Hệ thống được lập trình bằng HTML, CSS, JavaScript và sử dụng ASP.NET kết hợp SQL Server để quản lý dữ liệu. Người dùng có thể xem chi tiết sản phẩm, thêm vào giỏ hàng và lựa chọn các phương thức thanh toán linh hoạt như COD, chuyển khoản ngân hàng hoặc trả thẻ. Sau khi hoàn tất giao dịch, hệ thống tự động cập nhật hóa đơn và thống kê doanh thu theo thời gian thực, hỗ trợ quản lý hiệu quả. 
</p>
<div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/videobanhang.mp4" type="video/mp4">
            </video>
        </div>                 
<br />
<br />
<br />


                    <label class="highlight-textttt">Chức năng chăm sóc khách hàng</label><br /><br />
                    <p>Chức năng chăm sóc khách hàng của MTK Second Hand giúp tối ưu hóa trải nghiệm người dùng, đảm bảo hỗ trợ nhanh chóng và hiệu quả. 
                    Hệ thống cho phép khách hàng đăng ký tài khoản để lưu trữ thông tin cá nhân, theo dõi đơn hàng và quản lý giỏ hàng. Người dùng có thể chỉnh sửa hồ sơ, bao gồm tên, địa chỉ, email, nhưng tài khoản và số điện thoại được bảo mật nhằm đảm bảo an toàn. Chức năng đổi mật khẩu được xác minh qua số điện thoại liên kết, giúp bảo vệ quyền riêng tư. 
                    Ngoài ra, khách hàng có thể liên hệ trực tiếp với đội ngũ hỗ trợ thông qua hotline để giải đáp thắc mắc và xử lý khiếu nại. Hệ thống được phát triển bằng HTML, CSS, JavaScript, kết hợp với ASP.NET và SQL Server để quản lý dữ liệu, bảo mật thông tin, và tích hợp các giải pháp xác thực giúp giao dịch diễn ra an toàn. 
</p>
<div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/videochamsoc.mp4" type="video/mp4">
            </video>
        </div>

<br /><br />
<br />


                    <label class="highlight-textttt">Chức năng quản lý hoạt động kinh doanh</label><br /><br />
                    <p>Chức năng thống kê và quản lý đơn hàng trên hệ thống MTK Second Hand giúp nhân viên giám sát hoạt động kinh doanh, theo dõi tình trạng đơn hàng và doanh thu theo thời gian thực. 
                    Nhân viên được quyền truy cập các giao diện quản lý để kiểm tra đơn hàng, xử lý trạng thái như "Chưa thanh toán", "Trả hàng" hoặc "Đã hủy", quản lý tài khoản khách hàng và nhân viên, xem kết quả thống kê doanh thu và in báo cáo. Hệ thống được phát triển bằng HTML, CSS, JavaScript và ASP.NET kết hợp với SQL Server để lưu trữ và xử lý thông tin.               
</p>
<div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/videoquanly.mp4" type="video/mp4">
            </video>
        </div>

                         
</div>

<br />
<br />
<br /><br />
<br />
<br />

<div class="boxessss">
        <div class="boxx">
            <h3></h3>
            <p><label class="highlight-textt">BẮT ĐẦU DỰ ÁN MỚI?</label>  &nbsp;</p>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<label class="highlight-texttt">Bạn đang có một ý tưởng tuyệt vời và muốn cùng hợp tác? <br />Ta nên sắp xếp một cuộc gặp mặt. Liên lạc nha</label>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

           <button class="view-project" onclick="showProject()">🤙 Let's do this</button>

        </div>
        </div>
 </section>


    <section id="aboutt">
        <br/> <br/>
        <div class="logo">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="index.html">

            <img src="hinh/chu ky K trang.png" alt="Thiết kế" class="logo-image">
</a>
 <p>Living, learning, & leveling up one day at a time.</p>  
        </div>
    <div class="boxesss">
        <div class="boxxx">
            
           <button class="view-projectt" onclick="sendEmail()">
</button>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/th%C3%A1i-kha-23a08a366/" target="_blank">
 

           <button class="view-projecttt" onclick="showProject()"></button> </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <a href="https://www.facebook.com/thai.kha.698629" target="_blank">
  
    <button class="view-projectttt" onclick="showProject()"></button> </a>

        </div>
        </div>

        <br/>
        <p><Label class="highlight-textt">Handcrafted by me</Label></p>
    </section>

    `;
    // Cuộn lên đầu trang ngay sau khi thay đổi nội dung
    window.scrollTo(0, 0);


}

function showProject2() {
    document.body.innerHTML = `
    <div class="container">


    <br /><br /><br /><br /><br /><br /><br />
        <nav>
            <div class="logo">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <a href="index.html">
                    <img src="hinh/Logo_ten-removebg-preview.png" alt="Thiết kế" class="logo-image">
                </a>
            </div>
            <ul>
                <li><a href="index.html">Giới thiệu</a></li>
                <li><a href="index.html">Dự án</a></li>
                <li><a href="index.html">Liên hệ</a></li>
            </ul>
        </nav>
       
                    <label class="highlight-textttt">MTK SHOPPING MOBILE</label> <br /><br /><br />
                    <label class="highlight-textttt">Chức năng bán hàng và quản lý tài khoản</label><br /><br />
                    <p>Ứng dụng bán đồ nội thất giúp khách hàng dễ dàng tìm kiếm, lựa chọn và đặt mua sản phẩm ngay trên điện thoại. Người dùng có thể duyệt qua danh mục sản phẩm, xem chi tiết từng món, kiểm tra các chương trình khuyến mãi hấp dẫn, thêm sản phẩm vào giỏ hàng và thực hiện thanh toán với nhiều phương thức linh hoạt. Hệ thống hỗ trợ xem lịch sử đơn hàng, cho phép khách hàng theo dõi trạng thái đặt hàng và quản lý giao dịch một cách minh bạch.
                    <br/>
                    Ứng dụng được phát triển trên Android, sử dụng XAMPP, PHP, MySQL để quản lý dữ liệu và đảm bảo tốc độ xử lý cao. Nhờ tích hợp API, thông tin sản phẩm luôn được cập nhật theo thời gian thực. Hệ thống cũng tối ưu hóa giao diện giúp trải nghiệm mua sắm trực quan, dễ dàng từ tìm kiếm sản phẩm đến thanh toán.


</p>
<div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/video-ban-hang-du-an-2.mp4" type="video/mp4">
            </video>
        </div>

Khách hàng có thể đăng ký tài khoản cá nhân, giúp việc mua sắm trở nên thuận tiện hơn. Với tài khoản riêng, người dùng có thể lưu danh sách sản phẩm yêu thích, quản lý giỏ hàng và xem lịch sử mua hàng. Hệ thống hỗ trợ đổi mật khẩu, đảm bảo tính bảo mật khi sử dụng.
<br/>
Trong quá trình đăng ký, người dùng nhập các thông tin cần thiết như email, mật khẩu, số điện thoại, đảm bảo tính xác thực và bảo vệ tài khoản. Khi cần thay đổi thông tin cá nhân, khách hàng có thể cập nhật tên, địa chỉ giao hàng, nhưng số điện thoại và tài khoản sẽ được bảo mật. Nhờ xác thực qua API, mọi thao tác liên quan đến tài khoản đều an toàn.


                 
<br />
<br />
<br />
    <label class="highlight-textttt">Chức năng quản lý sản phẩm và thống kê doanh thu</label><br /><br />
                    <p>Ứng dụng bán đồ nội thất giúp nhân viên quản lý sản phẩm và theo dõi doanh thu một cách hiệu quả. Chỉ nhân viên được cấp quyền mới có thể thêm, sửa, xóa sản phẩm, cập nhật thông tin hàng hóa và kiểm tra tình hình kinh doanh.
                    <br/>
Hệ thống cung cấp biểu đồ thống kê doanh thu theo danh mục sản phẩm, giúp nhân viên đánh giá sản phẩm bán chạy và điều chỉnh chiến lược kinh doanh phù hợp. Các dữ liệu được cập nhật theo thời gian thực, giúp cửa hàng tối ưu hóa hoạt động quản lý và tăng hiệu suất bán hàng.

<br/>
</p>
<div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/videoquanlyduan2.mp4" type="video/mp4">
            </video>
        </div>
               
</div>

<div class="boxessss">
        <div class="boxx">
            <h3></h3>
            <p><label class="highlight-textt">BẮT ĐẦU DỰ ÁN MỚI?</label>  &nbsp;</p>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<label class="highlight-texttt">Bạn đang có một ý tưởng tuyệt vời và muốn cùng hợp tác? <br />Ta nên sắp xếp một cuộc gặp mặt. Liên lạc nha</label>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

           <button class="view-project" onclick="showProject()">🤙 Let's do this</button>

        </div>
        </div>
 </section>
    <section id="aboutt">
        <br/> <br/>
        <div class="logo">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="index.html">

            <img src="hinh/chu ky K trang.png" alt="Thiết kế" class="logo-image">
</a>
 <p>Living, learning, & leveling up one day at a time.</p>  
        </div>
    <div class="boxesss">
        <div class="boxxx">
            
           <button class="view-projectt" onclick="sendEmail()">
</button>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/th%C3%A1i-kha-23a08a366/" target="_blank">
 

           <button class="view-projecttt" onclick="showProject()"></button> </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <a href="https://www.facebook.com/thai.kha.698629" target="_blank">
  
    <button class="view-projectttt" onclick="showProject()"></button> </a>

        </div>
        </div>

        <br/>
        <p><Label class="highlight-textt">Handcrafted by me</Label></p>
    </section>

    `;
    // Cuộn lên đầu trang ngay sau khi thay đổi nội dung
    window.scrollTo(0, 0);


}

function sendEmail() {
    window.location.href = "mailto:thaikha14102003@gmail.com";
}