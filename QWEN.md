# Qwen Coding Agent Instructions

## 🎯 Goal
Bạn là coding agent. Nhiệm vụ của bạn là tạo một website portfolio cá nhân `username.github.io` 
sử dụng **HTML + TailwindCSS**. Nội dung của từng section được định nghĩa trong các file Markdown 
trong thư mục `/descriptions`.

## 📂 Input
- Các file `.md` trong thư mục `/descriptions/`:
  - `hero.md`
  - `about.md`
  - `projects.md`
  - `contact.md`
  - `blog.md` (tùy chọn)
  
Mỗi file chứa mô tả **layout + nội dung** cho một section.

## 📤 Output
- File `index.html` hoàn chỉnh, bao gồm các section được generate theo đúng mô tả.  
- Code HTML phải:
  - Sử dụng **TailwindCSS** class để style.
  - Responsive (desktop, tablet, mobile).
  - Có id cho từng section (`id="hero"`, `id="about"`, `id="projects"`, `id="contact"`, `id="blog"`).
  - Giữ style thống nhất (font Inter, màu primary xanh dương, bo tròn, shadow mềm).
- Nếu có link GitHub, LinkedIn, Email → thêm icon (ví dụ: Lucide hoặc Heroicons).
- Nếu có CTA button → render `<a>` hoặc `<button>` với class Tailwind chuẩn (`px-4 py-2 rounded-lg shadow hover:scale-105 transition`).
- Các ảnh phải có đường dẫn rõ ràng trogn thư mục `assests/img`. Nếu thiếu tôi sẽ tự thêm sau. Nhưng bạn phải chú thích rõ chỗ sửa ảnh được.

## 🔑 Coding Rules
1. Mỗi section bắt đầu bằng `<section id="...">` với padding (`py-16`).
2. Layout dùng grid hoặc flex, tránh inline-style.
3. Font: `Inter` (Google Fonts).
4. Màu chủ đạo: xanh dương Tailwind (`blue-600`) + tím (`purple-600`) cho gradient.
5. Tất cả ảnh (avatar, project) đặt từ `assets/img/`.
6. CV file: `assets/cv.pdf`.

## ✅ Validation Checklist
Trước khi xuất `index.html`, hãy kiểm tra:
- [ ] Tất cả section được sinh ra đúng thứ tự: Hero → About → Projects → Contact → Blog.
- [ ] Code HTML hợp lệ (có thẻ `<html>`, `<head>`, `<body>`).
- [ ] Có link Tailwind CSS (CDN hoặc build).
- [ ] Responsive test: grid tự động xuống 1 cột trên mobile.
- [ ] Buttons và links hoạt động đúng.
- [ ] Không để lại placeholder thừa hoặc comment mô tả.

## 📌 Example Flow
1. Đọc file `hero.md` → Sinh Hero section HTML.
2. Đọc file `about.md` → Sinh About section HTML.
3. Đọc tiếp các file còn lại.
4. Gắn tất cả section vào `index.html`.
5. Xuất bản file `index.html`.
