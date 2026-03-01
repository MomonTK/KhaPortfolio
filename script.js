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
       
        <label class="highlight-textttt">WEB SHOPPING SECOND HAND MTK (ASP.NET Core 8 & SQL Server)</label> <br /><br /><br />
        
        <label class="highlight-textttt">1. Hệ thống quản trị (Admin Dashboard) & Xử lý nghiệp vụ</label><br /><br />
        <p>Tôi đã xây dựng hệ thống quản lý tập trung sử dụng <b>ASP.NET Core Web API</b> kết hợp với <b>Entity Framework Core</b>. Hệ thống cho phép theo dõi trạng thái đơn hàng và tồn kho theo thời gian thực. 
        Đặc biệt, tôi đã tối ưu hóa các câu truy vấn <b>LINQ</b> để thống kê doanh thu một cách chính xác, hỗ trợ xuất báo cáo định kỳ. Người dùng có thể trải nghiệm quy trình mua hàng khép kín từ khâu chọn sản phẩm, quản lý giỏ hàng đến tích hợp các cổng thanh toán linh hoạt (COD, Bank Transfer).</p>
        
        <div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/videobanhang.mp4" type="video/mp4">
            </video>
        </div>                 
        <br /><br /><br />

        <label class="highlight-textttt">2. Giải pháp Bảo mật thông tin & Quản lý người dùng</label><br /><br />
        <p>Dự án chú trọng vào tính an toàn dữ liệu khách hàng. Tôi triển khai cơ chế <b>Authentication & Authorization</b> để phân quyền chặt chẽ giữa khách hàng và nhân viên. 
        Thông tin cá nhân và mật khẩu được mã hóa an toàn trong <b>SQL Server</b>. Tôi cũng tự phát triển logic xác thực qua số điện thoại liên kết khi người dùng yêu cầu đổi mật khẩu, giúp giảm thiểu rủi ro bị chiếm đoạt tài khoản. Giao diện được thiết kế bằng <b>JavaScript thuần</b> kết hợp <b>CSS Grid/Flexbox</b> để đảm bảo độ phản hồi (Responsive) tốt nhất.</p>
        
        <div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/videochamsoc.mp4" type="video/mp4">
            </video>
        </div>
        <br /><br /><br />

        <label class="highlight-textttt">3. Thống kê kinh doanh & Kiểm soát luồng dữ liệu</label><br /><br />
        <p>Sử dụng <b>T-SQL</b> để thiết kế cấu trúc database tối ưu, cho phép nhân viên giám sát mọi hoạt động kinh doanh từ chi tiết đến tổng thể. 
        Hệ thống tự động hóa việc cập nhật trạng thái đơn hàng (Chờ xử lý, Đã thanh toán, Hoàn trả) và cập nhật số lượng tồn kho ngay lập tức. Điều này giúp bộ phận vận hành giảm thiểu sai sót thủ công và tăng hiệu suất làm việc lên đáng kể.</p>
        
        <div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/videoquanly.mp4" type="video/mp4">
            </video>
        </div>
    </div>

    <br /><br /><br /><br /><br /><br />

    <div class="boxessss">
        <div class="boxx">
            <p><label class="highlight-textt">BẮT ĐẦU DỰ ÁN MỚI?</label> &nbsp;</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label class="highlight-texttt">Bạn đang có một ý tưởng tuyệt vời và muốn cùng hợp tác? <br />Ta nên sắp xếp một cuộc gặp mặt. Liên lạc nha</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="view-project" onclick="showProject()">🤙 Let's do this</button>
        </div>
    </div>

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
                <button class="view-projectt" onclick="sendEmail()"></button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/thái-kha-23a08a366/" target="_blank">
                    <button class="view-projecttt" onclick="showProject()"></button> 
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.facebook.com/thai.kha.698629" target="_blank">
                    <button class="view-projectttt" onclick="showProject()"></button> 
                </a>
            </div>
        </div>
        <br/>
        <p><Label class="highlight-textt">Handcrafted by me</Label></p>
    </section>
    `;
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
       
        <label class="highlight-textttt">MTK SHOPPING MOBILE (Android Native & PHP API)</label> <br /><br /><br />
        
        <label class="highlight-textttt">1. Phát triển Mobile App & Tích hợp API</label><br /><br />
        <p>Ứng dụng được xây dựng trên nền tảng <b>Android Native</b> (Java), kết nối với Backend thông qua hệ thống <b>RESTful API</b> viết bằng PHP. 
        Tôi đã xử lý việc đồng bộ hóa dữ liệu từ <b>MySQL</b> để thông tin sản phẩm nội thất, giá cả và các chương trình khuyến mãi luôn được cập nhật theo thời gian thực. Trải nghiệm người dùng được tối ưu hóa qua luồng tìm kiếm thông minh và quy trình thanh toán tinh gọn trên thiết bị di động.</p>
        
        <div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/video-ban-hang-du-an-2.mp4" type="video/mp4">
            </video>
        </div>

        <p>Mỗi khách hàng có một không gian lưu trữ riêng biệt (Personal Account). Tôi sử dụng kỹ thuật xác thực API để quản lý giỏ hàng và lịch sử mua hàng cá nhân hóa. Tính năng bảo mật được đặt lên hàng đầu với quy trình đăng ký/đăng nhập nghiêm ngặt và cơ chế đổi mật khẩu an toàn, đảm bảo quyền riêng tư cho mọi giao dịch của người dùng.</p>
        <br /><br /><br />

        <label class="highlight-textttt">2. Quản lý hệ thống & Phân tích dữ liệu kinh doanh</label><br /><br />
        <p>Phần mềm tích hợp bộ công cụ dành riêng cho nhân viên để quản lý danh mục sản phẩm. Tôi đã thiết kế tính năng <b>CRUD (Create, Read, Update, Delete)</b> mạnh mẽ, cho phép cập nhật hàng hóa ngay trên điện thoại. 
        Đặc biệt, hệ thống cung cấp các <b>biểu đồ thống kê doanh thu</b> trực quan, giúp bộ phận quản lý nhận diện xu hướng mua sắm của khách hàng và điều chỉnh chiến lược kinh doanh dựa trên dữ liệu thực tế thu thập được.</p>
        
        <div class="video-container">
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/videoquanlyduan2.mp4" type="video/mp4">
            </video>
        </div>
    </div>

    <div class="boxessss">
        <div class="boxx">
            <p><label class="highlight-textt">BẮT ĐẦU DỰ ÁN MỚI?</label> &nbsp;</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label class="highlight-texttt">Bạn đang có một ý tưởng tuyệt vời và muốn cùng hợp tác? <br />Ta nên sắp xếp một cuộc gặp mặt. Liên lạc nha</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="view-project" onclick="showProject()">🤙 Let's do this</button>
        </div>
    </div>

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
                <button class="view-projectt" onclick="sendEmail()"></button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/thái-kha-23a08a366/" target="_blank">
                    <button class="view-projecttt" onclick="showProject()"></button> 
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.facebook.com/thai.kha.698629" target="_blank">
                    <button class="view-projectttt" onclick="showProject()"></button> 
                </a>
            </div>
        </div>
        <br/>
        <p><Label class="highlight-textt">Handcrafted by me</Label></p>
    </section>
    `;
    window.scrollTo(0, 0);
}

function showProject3() {
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
       
        <label class="highlight-textttt">MEAT & MEET ECOSYSTEM (WinForms, Android Kotlin & Web API)</label> <br /><br /><br />
        
        <label class="highlight-textttt">1. Kiến trúc Hệ sinh thái & Đồng bộ Thời gian thực (Real-time Sync)</label><br /><br />
        <p>Đây là dự án tâm huyết nhất của tôi với mô hình Client-Server toàn diện. Hệ thống lấy <b>ASP.NET Core RESTful API</b> làm trung tâm, kết nối luồng dữ liệu giữa Ứng dụng quản lý trên Desktop và Ứng dụng đặt hàng trên Mobile. 
        Tôi đã thiết kế cơ sở dữ liệu <b>SQL Server</b> phức tạp, sử dụng các <b>Triggers và Stored Procedures</b> để tự động hóa việc trừ hao nguyên vật liệu trong kho theo định lượng công thức (Recipe) và tính toán doanh thu ngay khi có đơn hàng mới. Mọi thao tác trên điện thoại đều được phản hồi lập tức lên màn hình máy tính của thu ngân.</p>
        
        <div class="video-container">
            <!-- Đặt tên video đồng bộ API của bạn vào đây -->
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/video-dong-bo-api.mp4" type="video/mp4">
            </video>
        </div>                
        <br /><br /><br />

        <label class="highlight-textttt">2. Quản trị Trung tâm trên Desktop (C# WinForms)</label><br /><br />
        <p>Phần mềm máy tính được thiết kế dành riêng cho Quản lý và Thu ngân với khả năng chịu tải cao. Tôi đã lập trình logic quản lý <b>Phiên làm việc (Shift Management)</b> chặt chẽ: nhân viên bắt buộc phải 'Vào Ca' để kích hoạt hệ thống và 'Ra Ca' để đối soát tiền mặt. 
        Giao diện Quản lý bàn ăn (Table Mapping) trực quan, cho phép mở bàn, gộp/tách bàn và gọi món nhanh chóng. Hệ thống còn tích hợp thư viện vẽ biểu đồ và xuất báo cáo doanh thu ra định dạng <b>PDF/Excel</b>, cung cấp cái nhìn toàn cảnh về tình hình kinh doanh.</p>
        
        <div class="video-container">
            <!-- Đặt tên video thao tác trên PC vào đây -->
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/video-quan-ly-pc.mp4" type="video/mp4">
            </video>
        </div>
        <br /><br /><br />

        <label class="highlight-textttt">3. Ứng dụng Di động Native (Android - Kotlin)</label><br /><br />
        <p>App Android đóng vai trò là cầu nối trực tiếp với khách hàng và hỗ trợ nhân viên di động. Tôi sử dụng <b>Kotlin</b> kết hợp với thư viện <b>Retrofit</b> để xử lý giao tiếp API một cách mượt mà và an toàn. 
        Ứng dụng có cơ chế phân quyền (Authorization) thông minh: Khách hàng có thể tìm hiểu menu, đặt bàn trước và thu thập Voucher; trong khi Nhân viên đăng nhập sẽ thấy giao diện riêng để gọi món tại bàn, đăng ký lịch làm việc và thao tác nhập kho ngay trên điện thoại. UI/UX được tuân thủ theo chuẩn <b>Material Design</b> của Google.</p>
        
        <div class="video-container">
            <!-- Đặt tên video thao tác trên App Android vào đây -->
            <video id="banhang-video" autoplay muted loop playsinline>
                <source src="video/video-app-android.mp4" type="video/mp4">
            </video>
        </div>
    </div>

    <br /><br /><br /><br /><br /><br />

    <!-- Phần Liên hệ và Footer (Giữ nguyên form của bạn) -->
    <div class="boxessss">
        <div class="boxx">
            <p><label class="highlight-textt">BẮT ĐẦU DỰ ÁN MỚI?</label> &nbsp;</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label class="highlight-texttt">Bạn đang có một ý tưởng tuyệt vời và muốn cùng hợp tác? <br />Ta nên sắp xếp một cuộc gặp mặt. Liên lạc nha</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="view-project" onclick="showProject()">🤙 Let's do this</button>
        </div>
    </div>

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
                <button class="view-projectt" onclick="sendEmail()"></button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/thái-kha-23a08a366/" target="_blank">
                    <button class="view-projecttt"></button> 
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.facebook.com/thai.kha.698629" target="_blank">
                    <button class="view-projectttt"></button> 
                </a>
            </div>
        </div>
        <br/>
        <p><Label class="highlight-textt">Handcrafted by me</Label></p>
    </section>
    `;
    window.scrollTo(0, 0);
}

function sendEmail() {
    window.location.href = "mailto:thaikha14102003@gmail.com";
}