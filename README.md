# 14/10: add API localhost:7777/events
# 21/10: add login and register to view, add api to serve static file.
# link tải database: http://bit.ly/2DyNvb1, tải xong import vào localhost/phpmyadmin, nhớ config trong module nếu có lỗi connect db.
# 12/11: Danh sách APIs:
- localhost:7777/events : trả về tất cả các phiên hiện có và thông tin của chúng.
- localhost:7777/events/:idEvent: trả về phiên có id = idEvent và thông tin của nó.
- localhost:7777/events/:idEvent/comments: trả về tất cả câu hỏi của phiên có id = idEvent
- localhost:7777/events/:idEvent/questions/newQuestion: tạo mới câu hỏi trong phiên có id = idEvent
- localhost:7777/events/:idEvent/questions/delete/:idQuest: xoá câu hỏi trong phiên có id = idEvent và id câu hỏi = idQuest
# 13/11: 
- localhost:7777/register : tạo tài khoản mới, request body gồm username, password, email, type(admin/teacher/student)
- localhost:7777/accounts/detail/:id : thông tin tài khoản có id = id
- localhost:7777/accounts/detail/:id/change : thay đổi thông tin tài khoản có id = id, request body gồm hoặc password mới hoặc email mới hoặc cả 2.
# Cài đặt
- Cài đặt git, nodejs và npm
- Tạo folder mới, clone repo này về, cd đến folder vừa tạo, chạy "npm init".
- Chạy lệnh "npm install" để cài đặt app.
- Chạy lệnh "node index.js" để khởi động app.
- Mặc định app chạy trên cổng 7777, vào trình duyệt và vào "localhost:7777"

#Danh sách api cần thêm: 
- Thêm phiên hỏi đáp
- API trả về danh sách câu hỏi của mỗi user.
- API mở phiên hỏi đáp
- API đóng phiên hỏi đáp
- API xóa phiên hỏi đáp
- API vote question
- API them cau tra loi cho cau hoi
- API them	hản hồi về câu trả lời cho câu hỏi (Comment for answer)
- API tạo người dùng mới.
- API sửa đổi thông tin người dùng.