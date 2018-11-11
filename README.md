# 14/10: add API localhost:7777/events
# 21/10: add login and register to view, add api to serve static file.
# 12/11: Danh sách APIs:
- localhost:7777/events : trả về tất cả các phiên hiện có và thông tin của chúng.
- localhost:7777/events/:idEvent: trả về phiên có idEvent = ? và thông tin của nó.
- localhost:7777/events/:idEvent/comments: trả về tất cả câu hỏi của phiên có idEvent = ?
# Cài đặt
- Cài đặt git, nodejs và npm
- Tạo folder mới, clone repo này về, cd đến folder vừa tạo, chạy "npm init".
- Chạy lệnh "npm install" để cài đặt app.
- Chạy lệnh "node index.js" để khởi động app.
- Mặc định app chạy trên cổng 7777, vào trình duyệt và vào "localhost:7777"
