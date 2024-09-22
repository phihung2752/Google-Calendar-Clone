1 . yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
Lệnh này có mục đích cài đặt Tailwind CSS cùng với PostCSS phiên bản 7 và Autoprefixer phiên bản 9, cụ thể là:

tailwindcss@npm:@tailwindcss/postcss7-compat: Đây là phiên bản tương thích của Tailwind CSS với PostCSS phiên bản 7. Điều này thường cần thiết nếu bạn sử dụng PostCSS phiên bản cũ (vì Tailwind mới yêu cầu PostCSS 8).

postcss@^7: Cài đặt PostCSS phiên bản 7. Đây là một công cụ xử lý CSS để thực hiện các plugin như autoprefixer.

autoprefixer@^9: Cài đặt Autoprefixer phiên bản 9. Đây là một plugin cho PostCSS, tự động thêm tiền tố CSS (vendor prefixes) như -webkit-, -moz- cho các thuộc tính CSS để đảm bảo tính tương thích với các trình duyệt cũ.
2. yarn add @craco/craco dayjs

@craco/craco: CRACO (Create React App Configuration Override) là một công cụ cho phép bạn tùy chỉnh cấu hình của ứng dụng Create React App mà không cần phải eject. Nó cho phép bạn mở rộng cấu hình webpack, Babel, ESLint, và nhiều cài đặt khác mà không cần phải từ bỏ các lợi ích của Create React App.
dayjs: Đây là một thư viện JavaScript nhẹ để xử lý ngày tháng. Nó cung cấp một API tương tự như Moment.js nhưng nhẹ hơn và hiệu quả hơn.
Mục đích của lệnh này:
Thêm CRACO vào dự án, có thể để tùy chỉnh cấu hình của ứng dụng React mà không cần eject.
Thêm dayjs để xử lý các thao tác liên quan đến ngày tháng trong ứng dụng của bạn.
Trong ngữ cảnh của một dự án Google Calendar React, việc sử dụng các package này có thể giúp:
CRACO: Tùy chỉnh cấu hình webpack hoặc các cài đặt khác mà không cần eject dự án Create React App.
dayjs: Xử lý các thao tác liên quan đến ngày tháng, rất hữu ích khi làm việc với lịch và sự kiện.
Sau khi chạy lệnh này, các package sẽ được thêm vào package.json của dự án và được cài đặt trong thư mục node_modules.


3. yarn add @tailwindcss/forms
@tailwindcss/forms: Đây là một plugin Tailwind CSS để xử lý các form HTML. Nó cung cấp một số các class để điều chỉnh các biểu mẫu form, như nhập vào, nhập vào nhập, và nhiều hơn.

4. npx tailwindcss-cli@latest init
được dùng để khởi tạo một tệp cấu hình Tailwind CSS (thường là tailwind.config.js) trong dự án của bạn. Cụ thể: