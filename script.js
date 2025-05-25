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
                    <label class="highlight-textttt">Hệ thống bán hàng trực tuyến MTK Second Hand</label><br /><br />
                    <p>MTK Second Hand là nền tảng thương mại điện tử hiện đại, giúp khách hàng dễ dàng khám phá và mua sắm các sản phẩm thời trang second-hand chất lượng. Website cung cấp 5 danh mục sản phẩm chính: Shirt, Pant, Watch, Shoes, Jewelry, với đầy đủ thông tin chi tiết, số lượng sao đánh giá và bình luận từ khách hàng.
</p>
<div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/video ban hang.mp4" type="video/mp4">
            </video>
        </div>



                    <p>Người dùng có thể xem chi tiết sản phẩm, thêm vào giỏ hàng, và tiến hành thanh toán với 3 phương thức linh hoạt: Thanh toán khi nhận hàng, chuyển khoản ngân hàng hoặc trả thẻ. Sau khi hoàn tất giao dịch, hệ thống sẽ hiển thị hóa đơn chi tiết, giúp khách hàng kiểm tra đơn hàng một cách minh bạch.
</p>
<p>Website được xây dựng bằng HTML, CSS, JavaScript, kết hợp với ASP.NET và SQL Server để quản lý dữ liệu sản phẩm, đơn hàng và tài khoản người dùng. Quy trình thanh toán được tích hợp API ngân hàng, đảm bảo giao dịch diễn ra nhanh chóng và an toàn.
 </p>
 <p>MTK Second Hand không chỉ là một nền tảng mua sắm, mà còn là giải pháp công nghệ hỗ trợ kinh doanh, tối ưu trải nghiệm người dùng và đem lại sự tiện lợi, minh bạch trong từng giao dịch.
 </p>
<br />
<br />
<br />

                    <label class="highlight-textttt">Chức năng chăm sóc khách hàng trong hệ thống MTK Second Hand</label><br /><br />
                    <p>MTK Second Hand không chỉ là một nền tảng mua sắm mà còn tập trung vào chăm sóc khách hàng, tạo trải nghiệm cá nhân hóa và tiện lợi cho người dùng. Hệ thống cho phép đăng ký tài khoản khách hàng, giúp người dùng có giỏ hàng riêng để lưu trữ các sản phẩm yêu thích.
</p>
<div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/video cham soc khach hang.mp4" type="video/mp4">
            </video>
        </div>



                    <p>Sau khi đăng ký, khách hàng có thể truy cập hồ sơ cá nhân, hiển thị ở góc trên bên phải màn hình. Tại đây, người dùng có thể xem và chỉnh sửa thông tin cá nhân, bao gồm tên, địa chỉ, email, nhưng không thể thay đổi tài khoản và số điện thoại để đảm bảo tính bảo mật. Chức năng đổi mật khẩu được xác minh thông qua số điện thoại liên kết với tài khoản, giúp bảo vệ thông tin cá nhân.
</p>
<p>Ngoài hồ sơ cá nhân, hệ thống cung cấp trang quản lý đơn hàng, nơi khách hàng có thể theo dõi tình trạng các đơn hàng đã mua và đánh giá sản phẩm sau khi nhận hàng. Việc đánh giá này giúp nâng cao trải nghiệm cho cộng đồng mua sắm và hỗ trợ cải thiện chất lượng dịch vụ.
 </p>
 <p>MTK Second Hand xây dựng nền tảng chăm sóc khách hàng dựa trên công nghệ HTML, CSS, JavaScript cùng với ASP.NET và SQL Server để quản lý dữ liệu tài khoản, đơn hàng và bảo mật thông tin cá nhân. Hệ thống cũng tích hợp các giải pháp xác thực và mã hóa, đảm bảo an toàn khi khách hàng thay đổi thông tin hoặc thực hiện giao dịch.
 </p>
<br /><br />
<br />

                    <label class="highlight-textttt">Hệ thống bán hàng trực tuyến MTK Second Hand</label><br /><br />
                    <p>MTK Second Hand là nền tảng thương mại điện tử hiện đại, giúp khách hàng dễ dàng khám phá và mua sắm các sản phẩm thời trang second-hand chất lượng. Website cung cấp 5 danh mục sản phẩm chính: Shirt, Pant, Watch, Shoes, Jewelry, với đầy đủ thông tin chi tiết, số lượng sao đánh giá và bình luận từ khách hàng.
</p>
<div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/video ban hang.mp4" type="video/mp4">
            </video>
        </div>



                    <p>Người dùng có thể xem chi tiết sản phẩm, thêm vào giỏ hàng, và tiến hành thanh toán với 3 phương thức linh hoạt: Thanh toán khi nhận hàng, chuyển khoản ngân hàng hoặc trả thẻ. Sau khi hoàn tất giao dịch, hệ thống sẽ hiển thị hóa đơn chi tiết, giúp khách hàng kiểm tra đơn hàng một cách minh bạch.
</p>
<p>Website được xây dựng bằng HTML, CSS, JavaScript, kết hợp với ASP.NET và SQL Server để quản lý dữ liệu sản phẩm, đơn hàng và tài khoản người dùng. Quy trình thanh toán được tích hợp API ngân hàng, đảm bảo giao dịch diễn ra nhanh chóng và an toàn.
 </p>
 <p>MTK Second Hand không chỉ là một nền tảng mua sắm, mà còn là giải pháp công nghệ hỗ trợ kinh doanh, tối ưu trải nghiệm người dùng và đem lại sự tiện lợi, minh bạch trong từng giao dịch.
 </p>

        


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