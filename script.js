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
                <source src="video/video ban hang.mp4" type="video/mp4">
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
                <source src="video/video cham soc khach hang.mp4" type="video/mp4">
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
                <source src="video/video quan tri he thong.mp4" type="video/mp4">
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
                    <label class="highlight-textttt">Chức năng mua sắm và quản lý tài khoản trong ứng dụng MTK Shopping</label><br /><br />
                    <p>Ứng dụng MTK Shopping mang đến trải nghiệm mua sắm hiện đại và tiện lợi trên di động. Người dùng có thể đăng ký và đăng nhập tài khoản khách hàng, mở ra quyền truy cập vào giỏ hàng cá nhân hóa và các tính năng hỗ trợ mua sắm linh hoạt.
</p>
<div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/video-ban-hang-du-an-2.mp4" type="video/mp4">
            </video>
        </div>



                    <p>Sau khi đăng nhập, khách hàng có thể lựa chọn nhiều mặt hàng khác nhau, từ đèn, ghế, tivi, tủ lạnh đến kệ sách, và dễ dàng thêm sản phẩm vào giỏ hàng để tiến hành thanh toán. Hệ thống hỗ trợ xác nhận đơn hàng, hiển thị hóa đơn ngay sau giao dịch, giúp khách hàng theo dõi và kiểm tra lại thông tin mua sắm.
</p>
<p>Ngoài ra, ứng dụng tích hợp chức năng đổi mật khẩu và quên mật khẩu, đảm bảo bảo mật tài khoản. Việc thay đổi mật khẩu được xác minh thông qua số điện thoại liên kết với tài khoản, giúp khách hàng quản lý thông tin cá nhân một cách an toàn.
 </p>
 <p>MTK Shopping được phát triển dựa trên HTML, CSS, JavaScript, kết hợp với ASP.NET và SQL Server, tối ưu khả năng lưu trữ và xử lý dữ liệu đơn hàng. Hệ thống thanh toán được liên kết với API ngân hàng, giúp giao dịch diễn ra nhanh chóng và bảo mật.
 </p>
<br />
<br />
<br />

               
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