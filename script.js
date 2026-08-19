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
            <video id="banhang-video" controls autoplay muted loop playsinline>
                <source src="video/videobanhang.mp4" type="video/mp4">
            </video>
        </div>                 
        <br /><br /><br />

        <label class="highlight-textttt">2. Giải pháp Bảo mật thông tin & Quản lý người dùng</label><br /><br />
        <p>Dự án chú trọng vào tính an toàn dữ liệu khách hàng. Tôi triển khai cơ chế <b>Authentication & Authorization</b> để phân quyền chặt chẽ giữa khách hàng và nhân viên. 
        Thông tin cá nhân và mật khẩu được mã hóa an toàn trong <b>SQL Server</b>. Tôi cũng tự phát triển logic xác thực qua số điện thoại liên kết khi người dùng yêu cầu đổi mật khẩu, giúp giảm thiểu rủi ro bị chiếm đoạt tài khoản. Giao diện được thiết kế bằng <b>JavaScript thuần</b> kết hợp <b>CSS Grid/Flexbox</b> để đảm bảo độ phản hồi (Responsive) tốt nhất.</p>
        
        <div class="video-container">
            <video id="banhang-video" controls autoplay muted loop playsinline>
                <source src="video/videochamsoc.mp4" type="video/mp4">
            </video>
        </div>
        <br /><br /><br />

        <label class="highlight-textttt">3. Thống kê kinh doanh & Kiểm soát luồng dữ liệu</label><br /><br />
        <p>Sử dụng <b>T-SQL</b> để thiết kế cấu trúc database tối ưu, cho phép nhân viên giám sát mọi hoạt động kinh doanh từ chi tiết đến tổng thể. 
        Hệ thống tự động hóa việc cập nhật trạng thái đơn hàng (Chờ xử lý, Đã thanh toán, Hoàn trả) và cập nhật số lượng tồn kho ngay lập tức. Điều này giúp bộ phận vận hành giảm thiểu sai sót thủ công và tăng hiệu suất làm việc lên đáng kể.</p>
        
        <div class="video-container">
            <video id="banhang-video" controls autoplay muted loop playsinline>
                <source src="video/videoquanly.mp4" type="video/mp4">
            </video>
        </div>
    </div>

    <br /><br /><br /><br /><br /><br />

   <section id="lienhe">
    <script src="script.js"></script>
 <div class="boxess">
        <div class="boxx">
            <h3></h3>
            <p><label class="highlight-textt">BẮT ĐẦU DỰ ÁN MỚI?</label>  &nbsp;</p>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<label class="highlight-texttt">Bạn đang có một ý tưởng tuyệt vời và muốn cùng hợp tác? <br />Ta nên sắp xếp một cuộc gặp mặt. Liên lạc nha</label>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

           <button class="view-project" onclick="sendEmail()">🤙 Let's do this</button>

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
            <button class="view-projectt" onclick="sendEmail()"></button>
            <a href="https://www.linkedin.com/in/thái-kha-23a08a366/" target="_blank">
                <button class="view-projecttt"></button> 
            </a>
            <a href="https://www.facebook.com/thai.kha.698629" target="_blank">
                <button class="view-projectttt"></button> 
            </a>
        </div>
    </div>
    <p class="highlight-textt">Handcrafted by me</p>
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
            <video id="banhang-video" controls autoplay muted loop playsinline>
                <source src="video/video-ban-hang-du-an-2.mp4" type="video/mp4">
            </video>
        </div>

        <p>Mỗi khách hàng có một không gian lưu trữ riêng biệt (Personal Account). Tôi sử dụng kỹ thuật xác thực API để quản lý giỏ hàng và lịch sử mua hàng cá nhân hóa. Tính năng bảo mật được đặt lên hàng đầu với quy trình đăng ký/đăng nhập nghiêm ngặt và cơ chế đổi mật khẩu an toàn, đảm bảo quyền riêng tư cho mọi giao dịch của người dùng.</p>
        <br /><br /><br />

        <label class="highlight-textttt">2. Quản lý hệ thống & Phân tích dữ liệu kinh doanh</label><br /><br />
        <p>Phần mềm tích hợp bộ công cụ dành riêng cho nhân viên để quản lý danh mục sản phẩm. Tôi đã thiết kế tính năng <b>CRUD (Create, Read, Update, Delete)</b> mạnh mẽ, cho phép cập nhật hàng hóa ngay trên điện thoại. 
        Đặc biệt, hệ thống cung cấp các <b>biểu đồ thống kê doanh thu</b> trực quan, giúp bộ phận quản lý nhận diện xu hướng mua sắm của khách hàng và điều chỉnh chiến lược kinh doanh dựa trên dữ liệu thực tế thu thập được.</p>
        
        <div class="video-container">
            <video id="banhang-video" controls autoplay muted loop playsinline>
                <source src="video/videoquanlyduan2.mp4" type="video/mp4">
            </video>
        </div>
    </div>

    <section id="lienhe">
    <script src="script.js"></script>
 <div class="boxess">
        <div class="boxx">
            <h3></h3>
            <p><label class="highlight-textt">BẮT ĐẦU DỰ ÁN MỚI?</label>  &nbsp;</p>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<label class="highlight-texttt">Bạn đang có một ý tưởng tuyệt vời và muốn cùng hợp tác? <br />Ta nên sắp xếp một cuộc gặp mặt. Liên lạc nha</label>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

           <button class="view-project" onclick="sendEmail()">🤙 Let's do this</button>

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
            <button class="view-projectt" onclick="sendEmail()"></button>
            <a href="https://www.linkedin.com/in/thái-kha-23a08a366/" target="_blank">
                <button class="view-projecttt"></button> 
            </a>
            <a href="https://www.facebook.com/thai.kha.698629" target="_blank">
                <button class="view-projectttt"></button> 
            </a>
        </div>
    </div>
    <p class="highlight-textt">Handcrafted by me</p>
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
            <video id="videoKLTN1" controls autoplay muted loop playsinline>
                <source src="video/videoKLTN1.mp4" type="video/mp4">
            </video>
        </div>                
        <br /><br /><br />

        <label class="highlight-textttt">2. Quản trị Trung tâm trên Desktop (C# WinForms)</label><br /><br />
        <p>Phần mềm máy tính được thiết kế dành riêng cho Quản lý và Thu ngân với khả năng chịu tải cao. Tôi đã lập trình logic quản lý <b>Phiên làm việc (Shift Management)</b> chặt chẽ: nhân viên bắt buộc phải 'Vào Ca' để kích hoạt hệ thống và 'Ra Ca' để đối soát tiền mặt. 
        Giao diện Quản lý bàn ăn (Table Mapping) trực quan, cho phép mở bàn, gộp/tách bàn và gọi món nhanh chóng. Hệ thống còn tích hợp thư viện vẽ biểu đồ và xuất báo cáo doanh thu ra định dạng <b>PDF/Excel</b>, cung cấp cái nhìn toàn cảnh về tình hình kinh doanh.</p>
        
        <div class="video-container">
            <!-- Đặt tên video thao tác trên PC vào đây -->
            <video id="videoKLTN2" controls autoplay muted loop playsinline>
                <source src="video/videoKLTN2.mp4" type="video/mp4">
            </video>
        </div>
        <br /><br />

        <label class="highlight-textttt">3. Ứng dụng Di động Native (Android - Kotlin)</label><br /><br />
        <p>App Android đóng vai trò là cầu nối trực tiếp với khách hàng và hỗ trợ nhân viên di động. Tôi sử dụng <b>Kotlin</b> kết hợp với thư viện <b>Retrofit</b> để xử lý giao tiếp API một cách mượt mà và an toàn. 
        Ứng dụng có cơ chế phân quyền (Authorization) thông minh: Khách hàng có thể tìm hiểu menu, đặt bàn trước và thu thập Voucher; trong khi Nhân viên đăng nhập sẽ thấy giao diện riêng để gọi món tại bàn, đăng ký lịch làm việc và thao tác nhập kho ngay trên điện thoại. UI/UX được tuân thủ theo chuẩn <b>Material Design</b> của Google.</p>
        
        <div class="video-phone-container">
            <!-- Đặt tên video thao tác trên App Android vào đây -->
            <video id="videoKLTN3" controls autoplay muted loop playsinline>
                <source src="video/videoKLTN3.mp4" type="video/mp4">
            </video>
        </div>
    </div>

    <br /><br /><br /><br /><br /><br />

     <section id="lienhe">
    <script src="script.js"></script>
 <div class="boxess">
        <div class="boxx">
            <h3></h3>
            <p><label class="highlight-textt">BẮT ĐẦU DỰ ÁN MỚI?</label>  &nbsp;</p>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<label class="highlight-texttt">Bạn đang có một ý tưởng tuyệt vời và muốn cùng hợp tác? <br />Ta nên sắp xếp một cuộc gặp mặt. Liên lạc nha</label>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

           <button class="view-project" onclick="sendEmail()">🤙 Let's do this</button>

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
            <button class="view-projectt" onclick="sendEmail()"></button>
            <a href="https://www.linkedin.com/in/thái-kha-23a08a366/" target="_blank">
                <button class="view-projecttt"></button> 
            </a>
            <a href="https://www.facebook.com/thai.kha.698629" target="_blank">
                <button class="view-projectttt"></button> 
            </a>
        </div>
    </div>
    <p class="highlight-textt">Handcrafted by me</p>
</section>
    `;
    window.scrollTo(0, 0);
}

function showProject4() {
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
        
        <label class="highlight-textttt">TRELLO CLONE - WORKSPACE MANAGEMENT (React, Node.js & MongoDB)</label> <br /><br /><br />
        
        <label class="highlight-textttt">1. Kiến trúc Single Source of Truth & Đa góc nhìn (Multi-Views)</label><br /><br />
        <p>Thách thức lớn nhất của dự án này là việc hiển thị cùng một khối lượng dữ liệu dưới nhiều hình thức khác nhau mà không làm sai lệch trạng thái. Tôi đã xây dựng kiến trúc <b>Single Source of Truth</b> bằng React Hooks, giúp đồng bộ hóa dữ liệu lập tức. Người dùng có thể linh hoạt chuyển đổi giữa 4 dạng xem: <b>Kanban Board</b> (trực quan), <b>Table View</b> (quản lý nhanh), <b>Calendar View</b> (quản lý thời hạn) và <b>Timeline Matrix 2D</b> (phân bổ tài nguyên phức tạp).</p>
        
        <div class="video-container">
            <video id="trello-video-1" controls autoplay muted loop playsinline>
                <source src="video/trello-vd1.mp4" type="video/mp4">
            </video>
        </div>                
        <br /><br /><br />

        <label class="highlight-textttt">2. Xử lý Kéo thả (Drag & Drop) & Ma trận Lịch trình 2D</label><br /><br />
        <p>Thay vì sử dụng các thư viện có sẵn gây nặng ứng dụng, tôi tự code toàn bộ logic Drag & Drop bằng API <b>HTML5 Native</b>. Hệ thống xử lý mượt mà từ việc kéo thả thẻ (Card) giữa các cột, đổi thứ tự danh sách (List), cho đến thao tác kéo thả siêu việt trên <b>Ma trận Lịch trình (Timeline)</b>: khi thả thẻ vào một ô trên lưới, hệ thống tự động tính toán và cập nhật cùng lúc cả Ngày hết hạn (Trục X) và Nhóm phân loại (Trục Y) thông qua Backend Node.js.</p>
        
        <div class="video-container">
            <video id="trello-video-2" controls autoplay muted loop playsinline>
                <source src="video/trello-vd2.mp4" type="video/mp4">
            </video>
        </div>
        <br /><br /><br />

        <label class="highlight-textttt">3. Tối ưu UX/UI & Quản lý Trạng thái phức tạp</label><br /><br />
        <p>Trải nghiệm người dùng (UX) được đặt lên hàng đầu với các tính năng <b>Optimistic UI Update</b> (Giao diện phản hồi ngay lập tức trước khi Database xác nhận lưu) để triệt tiêu độ trễ. Ứng dụng tích hợp hệ thống Menu ngữ cảnh (Context Menu) bằng chuột phải tự code, Modal chỉnh sửa chi tiết thẻ (Checklist, Đính kèm File/Link, Nhãn màu) và bộ lọc thẻ thông minh. Giao diện được thiết kế pixel-perfect bằng <b>Tailwind CSS</b>, mang lại cảm giác thân thuộc như bản gốc.</p>
        
        <div class="video-container">
            <video id="trello-video-3" controls autoplay muted loop playsinline>
                <source src="video/trello-vd3.mp4" type="video/mp4">
            </video>
        </div>
    </div>

    <br /><br /><br /><br /><br /><br />

     <section id="lienhe">
    <script src="script.js"></script>
 <div class="boxess">
        <div class="boxx">
            <h3></h3>
            <p><label class="highlight-textt">BẮT ĐẦU DỰ ÁN MỚI?</label>  &nbsp;</p>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<label class="highlight-texttt">Bạn đang có một ý tưởng tuyệt vời và muốn cùng hợp tác? <br />Ta nên sắp xếp một cuộc gặp mặt. Liên lạc nha</label>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

           <button class="view-project" onclick="sendEmail()">🤙 Let's do this</button>

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
            <button class="view-projectt" onclick="sendEmail()"></button>
            <a href="https://www.linkedin.com/in/thái-kha-23a08a366/" target="_blank">
                <button class="view-projecttt"></button> 
            </a>
            <a href="https://www.facebook.com/thai.kha.698629" target="_blank">
                <button class="view-projectttt"></button> 
            </a>
        </div>
    </div>
    <p class="highlight-textt">Handcrafted by me</p>
</section>
    `;
    window.scrollTo(0, 0);
}
function showProject5() {
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
       
        <label class="highlight-textttt">DEPARTMENT-WIDE REPORTING OPTIMIZATION & SUPPLY CHAIN ANALYTICS (Lean Pareto, Power Query, VBA, Power BI & Power Automate)</label> <br /><br /><br />
        
        <!-- PHẦN 1: TỔNG QUAN DỰ ÁN & KEY METRICS -->
        <label class="highlight-textttt">1. Tổng quan Dự án & Tác động Quy mô Lớn (Project Overview & Baseline)</label><br /><br />
        <p>Tại phòng ban P1 (được bảo trợ bởi <b>Head of PNP</b>), hệ thống báo cáo vận hành vật tư và chuỗi cung ứng gặp tình trạng phình to về khối lượng và phân mảnh nghiêm trọng. Qua khảo sát chẩn đoán toàn diện, toàn bộ phòng ban có <b>52/56 báo cáo</b> đang vận hành thủ công bởi <b>12 Report Owners</b>, bao gồm <b>463 bước công việc (Work Elements)</b> và tiêu tốn tới <b>40.550 phút/tháng (tương đương 676 giờ/tháng)</b>.</p>
        
        <p>Với vai trò <b>Data & Process Automation Analyst</b>, tôi đã chủ trì khảo sát định lượng hiện trạng, áp dụng nguyên lý <b>Pareto (Quy luật 80/20)</b> để cô lập nhóm báo cáo trọng yếu chiếm 88.7% khối lượng công việc, từ đó thiết kế giải pháp số hóa toàn diện kết hợp hệ sinh thái <b>Power Query, VBA Engine, Power BI và Power Automate</b>.</p>

        <!-- Thẻ tóm tắt chỉ số KPI thực tế -->
        <div class="kpi-container">
            <div class="kpi-card green">
                <span class="kpi-value">676 Giờ/Tháng</span>
                <span class="kpi-label">Tổng thời gian vận hành ban đầu trên 52 báo cáo (40.550 phút)</span>
            </div>
            <div class="kpi-card blue">
                <span class="kpi-value">88.7% Tải Công Việc</span>
                <span class="kpi-label">Khối lượng tập trung tại Top 6 báo cáo trọng điểm (35.972 phút)</span>
            </div>
            <div class="kpi-card orange">
                <span class="kpi-value">~1 FTE Saved</span>
                <span class="kpi-label">Cắt giảm 28.670 phút/tháng (~30% tổng thời gian toàn phòng ban)</span>
            </div>
        </div>

        <div class="video-container">
            <img src="hinh/Optimal_Triumph/phan1.png" alt="P1 Report Optimization Overview" class="project-img">
        </div>
        <br /><br /><br />

        <!-- PHẦN 2: KHÁM PHÁ HIỆN TRẠNG & PHÂN TÍCH PARETO -->
        <label class="highlight-textttt">2. Chẩn đoán Định lượng Hiện trạng & Phân tích Pareto (AS-IS Diagnostic)</label><br /><br />
        <p>Bằng phương pháp chuẩn hóa dữ liệu vận hành thành các <b>Work Elements</b> độc lập, phân tích hiện trạng đã chỉ ra hai nghịch lý lớn trong cách thức vận hành của phòng ban:</p>
        <ul>
            <li><b>Quy luật Pareto 88.7/11.3:</b> Trong tổng số 52 báo cáo, chỉ riêng <b>Top 6 báo cáo</b> đã chiếm tới <b>88.7% tổng thời gian làm việc (35.972 / 40.550 phút/tháng)</b> qua 142 bước công việc. 46 báo cáo còn lại chỉ đóng góp 11.3% thời lượng.</li>
            <li><b>Điểm nghẽn phương thức thao tác (Method Breakdown):</b> Trong Top 6 báo cáo, có tới <b>92.83% thời gian là thao tác thủ công (Manual - 33.394 phút)</b> và <b>2.82% là Copy-Paste (1.013 phút)</b>. Tổng cộng <b>95.7% thời gian</b> bị lãng phí vào các thao tác lặp lại, trong khi tỷ lệ tự động hóa hiện hữu chỉ chiếm vỏn vẹn <b>~1% (344 phút)</b>.</li>
        </ul>

        <p>Bảng phân bổ chi tiết khối lượng công việc Top 6 báo cáo trọng yếu:</p>
        
        <div class="table-responsive">
            <table class="project-table">
                <thead>
                    <tr>
                        <th>Tên Báo Cáo (Top 6 Reports)</th>
                        <th>Thời Lượng (Phút/Tháng)</th>
                        <th>Tỷ Lệ Thủ Công (Manual %)</th>
                        <th>Phương Thức Chính</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>1. Allocate RM Status</b> (from MSR Master new)</td>
                        <td><b>24.960</b></td>
                        <td class="text-orange">98.72%</td>
                        <td>Manual Data Allocation & Email</td>
                    </tr>
                    <tr>
                        <td><b>2. Alteration Report</b></td>
                        <td><b>4.818</b></td>
                        <td>82.65%</td>
                        <td>Manual, Copy-Paste, Access, Formulas</td>
                    </tr>
                    <tr>
                        <td><b>3. ++SMS RM Report</b></td>
                        <td><b>2.132</b></td>
                        <td>89.49%</td>
                        <td>Manual Processing & Excel Formula</td>
                    </tr>
                    <tr>
                        <td><b>4. Monthly RMs Surplus Report</b> (TIV + VIE)</td>
                        <td><b>1.630</b></td>
                        <td>94.48%</td>
                        <td>Manual Verification & Copy-Paste</td>
                    </tr>
                    <tr>
                        <td><b>5. MSR Master Report</b></td>
                        <td><b>1.332</b></td>
                        <td>52.73%</td>
                        <td>Excel Formula (VLOOKUP 200k rows) & Copy</td>
                    </tr>
                    <tr>
                        <td><b>6. MSR Master New</b></td>
                        <td><b>1.100</b></td>
                        <td>55.86%</td>
                        <td>Copy-Paste, Automated & Manual</td>
                    </tr>
                    <tr style="background: #eef2f5; font-weight: bold;">
                        <td>TỔNG CỘNG TOP 6 (Chiếm 88.7% Phòng Ban)</td>
                        <td class="text-green">35.972 Phút</td>
                        <td class="text-orange">92.83% Manual</td>
                        <td>Cơ hội tối ưu hóa trọng tâm</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="video-container">
            <img src="hinh/Optimal_Triumph/phan2.png" alt="Pareto and Method Breakdown" class="project-img">
        </div>
        <br /><br /><br />

        <!-- PHẦN 3: ĐỊNH HÌNH GIẢI PHÁP & PHÂN BỔ CÔNG CỤ -->
        <label class="highlight-textttt">3. Định hướng Giải pháp & Phân bổ Công nghệ (Solution Strategy)</label><br /><br />
        <p>Dựa trên kết quả phân tích phương thức, tôi đã đề xuất chiến lược loại bỏ thao tác lặp lại và định hướng công cụ tự động hóa trực tiếp cho <b>142 Work Elements</b> thuộc Top 6 báo cáo:</p>
        <ul>
            <li><b>VBA Macro Engine (Trọng tâm cốt lõi):</b> Đảm nhận <b>117 bước công việc (82.39%)</b>, giúp giải phóng trực tiếp <b>35.101 phút/tháng (97.58% thời lượng Top 6)</b> thông qua xử lý mảng dữ liệu RAM và tự động hóa bảng tính tốc độ cao.</li>
            <li><b>Power Automate Flow:</b> Đảm nhận <b>11 bước công việc (7.75%)</b>, tự động hóa <b>527 phút/tháng</b> cho các khâu gửi email báo cáo, dispatch thông báo định kỳ qua Outlook.</li>
            <li><b>Tối ưu quy trình sẵn có:</b> Giữ lại và chuẩn hóa 14 bước công việc (9.86%) mang tính phán đoán nghiệp vụ trực tiếp của Report Owners.</li>
        </ul>

        <div class="video-container">
            <img src="hinh/Optimal_Triumph/phan3.png" alt="Key Direction and Expected Outcomes" class="project-img">
        </div>
        <br /><br /><br />

        <!-- PHẦN 4: HỆ SINH THÁI TỰ ĐỘNG HÓA 4 TRỤ CỘT -->
        <label class="highlight-textttt">4. Kiến trúc Hệ thống Tự động hóa 4 Trụ cột (Automation Ecosystem)</label><br /><br />
        <p>Hệ thống chuyển đổi được xây dựng dựa trên sự phối hợp chặt chẽ giữa 4 công cụ chuyên biệt để triệt tiêu toàn diện các mắt xích thủ công:</p>
        
        <p><b>1. Power Query (ETL & Chuẩn hóa dữ liệu nguồn):</b><br/>
        • Tự động quét và hợp nhất dữ liệu từ nhiều thư mục nguồn phân tán (Auto-scan & merge all files).<br/>
        • Tự động lọc bỏ các cột dữ liệu thừa và xử lý làm sạch kiểu dữ liệu thô (Clean redundant columns & standardize raw data).</p>

        <p><b>2. VBA Engine (Tính toán tốc độ cao & Giao diện bảng tính):</b><br/>
        • Tự động khởi tạo Pivot Table và tổng hợp dữ liệu chỉ bằng 1 nút bấm (1-click Pivot Table creation).<br/>
        • Xử lý format màu sắc, căn chỉnh giao diện báo cáo chuẩn quy cách và xuất dữ liệu cuối cùng tức thì.</p>

        <p><b>3. Power BI (Trực quan hóa & Báo cáo Quản trị cấp cao):</b><br/>
        • Kết nối trực tiếp vào nguồn Master Data, tự động làm mới các Executive Dashboards theo thời gian thực.<br/>
        • Triệt tiêu hoàn toàn nhu cầu tạo các sheet tính phụ và tệp dữ liệu trung gian (Eliminate helper & intermediate sheets).</p>

        <p><b>4. Power Automate (Tự động hóa luồng phân phối):</b><br/>
        • Tự động gửi báo cáo hoàn tất đến các bên liên quan qua Outlook/Gmail theo đúng lịch trình định kỳ.<br/>
        • Tự động gửi thông báo điều phối, tiết kiệm 100% thời gian soạn và đính kèm email thủ công.</p>

        <div class="video-container">
            <img src="hinh/Optimal_Triumph/phan4.png" alt="4-Pillar Automation Tool Architecture" class="project-img">
        </div>
        <br /><br /><br />

        <!-- PHẦN 5: CHUẨN HÓA SOP & QUẢN TRỊ THAY ĐỔI -->
        <label class="highlight-textttt">5. Chuẩn hóa Vận hành & Quản trị Thay đổi (Change Management & Rollout)</label><br /><br />
        <p>Để đảm bảo 12 Report Owners và các nhóm nghiệp vụ tiếp nhận quy trình mới một cách dễ dàng và đồng nhất:</p>
        <ul>
            <li><b>Quy chuẩn 1-Click SOP:</b> Xây dựng tài liệu hướng dẫn vận hành chuẩn tinh gọn cho từng báo cáo, chuyển đổi toàn bộ quy trình phức tạp thành thao tác nạp file vào thư mục và nhấn <b>1-Click Run/Refresh</b>.</li>
            <li><b>Kiểm thử song song & Đối soát (Parallel Testing):</b> Thực hiện chạy thử nghiệm song song hệ thống mới cùng quy trình cũ trong nhiều chu kỳ báo cáo để đảm bảo tính toàn vẹn và độ chính xác 100% số liệu.</li>
            <li><b>Cơ chế bẫy lỗi ngoại lệ (Exception Handling):</b> Các dòng dữ liệu thiếu mã, hàng nội địa hoặc đơn ưu tiên đặc thù được tự động trích xuất ra bảng riêng để nhân viên chỉ cần tập trung xử lý đúng các trường hợp ngoại lệ trong vài phút.</li>
        </ul>

        <div class="video-container">
            <video id="videoMSR1" controls autoplay muted loop playsinline>
                <source src="video/phan5.mp4" type="video/mp4">
            </video>
        </div>
        <br /><br /><br />

        <!-- PHẦN 6: KẾT QUẢ ĐỊNH LƯỢNG & TÁC ĐỘNG DOANH NGHIỆP -->
        <label class="highlight-textttt">6. Kết quả Định lượng & Tác động Doanh nghiệp (Targeted Business Impact)</label><br /><br />
        <p>Bảng tổng hợp kết quả cải tiến vượt bậc trên quy mô toàn bộ hệ thống báo cáo phòng ban P1:</p>

        <div class="table-responsive">
            <table class="project-table">
                <thead>
                    <tr>
                        <th>Chỉ Số Đánh Giá (Key Metrics)</th>
                        <th>Hiện Trạng Ban Đầu (AS-IS)</th>
                        <th>Mục Tiêu Sau Tối Ưu (TO-BE)</th>
                        <th>Tác Động Cải Tiến (Impact)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Tổng thời gian làm báo cáo</b></td>
                        <td>40.550 phút / tháng (676 giờ)</td>
                        <td class="text-green"><b>28.670 phút / tháng</b></td>
                        <td class="text-green"><b>Tiết kiệm ~30% (~1 FTE)</b></td>
                    </tr>
                    <tr>
                        <td><b>Tổng số bước công việc</b></td>
                        <td>463 Work Elements</td>
                        <td class="text-green"><b>335 Work Elements</b></td>
                        <td class="text-green"><b>Cắt giảm ~27% bước thao tác</b></td>
                    </tr>
                    <tr>
                        <td><b>Tỷ lệ tự động hóa Top 6 báo cáo</b></td>
                        <td>0.96% (~1% thời lượng)</td>
                        <td class="text-blue"><b>> 97% tự động hóa</b></td>
                        <td class="text-blue"><b>Chuyển đổi số toàn diện</b></td>
                    </tr>
                    <tr>
                        <td><b>Thao tác thủ công & Copy-Paste</b></td>
                        <td>95.7% tổng thời gian (34.407 phút)</td>
                        <td class="text-blue"><b>1-Click Macro & Auto-Flow</b></td>
                        <td class="text-blue"><b>Triệt tiêu lãng phí thao tác</b></td>
                    </tr>
                    <tr>
                        <td><b>Hệ thống giám sát cấp Quản lý</b></td>
                        <td>Bảng tính Excel rời rạc qua email</td>
                        <td class="text-orange"><b>Power BI Executive Dashboard</b></td>
                        <td class="text-orange"><b>Real-time & Single Source of Truth</b></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="video-container">
            <video id="videoMSR2" controls autoplay muted loop playsinline>
                <source src="video/phan7.mp4" type="video/mp4">
            </video>
        </div>
    </div>

    <br /><br /><br /><br /><br /><br />

    <!-- PHẦN LIÊN HỆ VÀ FOOTER -->
    <div class="boxess">
        <div class="boxx">
            <div class="boxx-text">
                <p class="highlight-textt">BẮT ĐẦU DỰ ÁN MỚI?</p>
                <label class="highlight-texttt">
                    Bạn đang có một ý tưởng tuyệt vời và muốn cùng hợp tác? <br />
                    Ta nên sắp xếp một cuộc gặp mặt. Liên lạc nha
                </label>
            </div>
            <button class="view-project" onclick="sendEmail()">🤙 Let's do this</button>
        </div>
    </div>

    <section id="aboutt">
        <div class="logo">
            <a href="index.html">
                <img src="hinh/chu ky K trang.png" alt="Thiết kế" class="logo-image">
            </a>
            <p>Living, learning, & leveling up one day at a time.</p>  
        </div>
        <div class="boxesss">
            <div class="boxxx">
                <button class="view-projectt" onclick="sendEmail()"></button>
                <a href="https://www.linkedin.com/in/thái-kha-23a08a366/" target="_blank">
                    <button class="view-projecttt"></button> 
                </a>
                <a href="https://www.facebook.com/thai.kha.698629" target="_blank">
                    <button class="view-projectttt"></button> 
                </a>
            </div>
        </div>
        <p class="highlight-textt">Handcrafted by me</p>
    </section>
    `;
    window.scrollTo(0, 0);
}

function sendEmail() {
    window.location.href = "mailto:thaikha14102003@gmail.com";
}