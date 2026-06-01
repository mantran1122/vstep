// data/interviews.ts
// Dữ liệu giả (tiếng Việt) cho trang phỏng vấn nhân sự.
// Công ty hư cấu: "Công ty Cơ khí Tinh Hoa".

export type Interview = {
  id: string;
  index: string; // "01", "02", "03"
  quote: string; // câu trích dẫn lớn
  department: string;
  name: string;
  joinedYear: string;
  tag: string;
  image: string; // ảnh placeholder – thay bằng ảnh trong /public khi triển khai
  href: string;
};

export const interviews: Interview[] = [
  {
    id: "member-01",
    index: "01",
    quote: "Những chi tiết chúng tôi tạo ra đang vận hành trên khắp thế giới.",
    department: "Phòng Sản xuất",
    name: "N.M.A",
    joinedYear: "Gia nhập 2017",
    tag: "Trưởng nhóm",
    image: "https://picsum.photos/seed/tinhhoa-a/800/1000",
    href: "/interview/member-01",
  },
  {
    id: "member-02",
    index: "02",
    quote: "Vì là nơi trân trọng con người, tôi tin mình sẽ gắn bó thật lâu.",
    department: "Phòng Quản lý Sản xuất",
    name: "L.K.H",
    joinedYear: "Gia nhập 2023",
    tag: "Nhân viên",
    image: "https://picsum.photos/seed/tinhhoa-b/800/1000",
    href: "/interview/member-02",
  },
  {
    id: "member-03",
    index: "03",
    quote: "Mỗi ngày làm nghề chế tạo, tôi đều cảm nhận rõ sự trưởng thành.",
    department: "Phòng Sản xuất · Chi nhánh Bắc Ninh",
    name: "T.R.U",
    joinedYear: "Gia nhập 2020",
    tag: "Kỹ thuật viên",
    image: "https://picsum.photos/seed/tinhhoa-c/800/1000",
    href: "/interview/member-03",
  },
];

export const navLinks = [
  { label: "Trang chủ", en: "TOP", href: "/" },
  { label: "Thế mạnh của chúng tôi", en: "STRENGTH", href: "/strengths" },
  { label: "Ngành nghề & quy trình", en: "OUR BUSINESS", href: "/business" },
  { label: "Câu chuyện tương lai", en: "FUTURE VISION", href: "/crosstalk" },
  { label: "Lắng nghe người trong nghề", en: "INTERVIEW", href: "/interview" },
  { label: "Đào tạo & phúc lợi", en: "WELFARE", href: "/welfare" },
  { label: "Môi trường làm việc", en: "FACILITIES", href: "/facilities" },
];
