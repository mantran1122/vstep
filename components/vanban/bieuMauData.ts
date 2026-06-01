export type BieuMauKind = 'image' | 'pdf' | 'download'

export type BieuMauItem = {
  icon: string
  title: string
  file: string
  kind: BieuMauKind
  slug?: string
}

export type BieuMauGroup = {
  heading: string
  items: BieuMauItem[]
}

export const bieuMauGroups: BieuMauGroup[] = [
  {
    heading: 'Quy trình',
    items: [
      {
        icon: 'bi-clipboard-check',
        title: 'Quy trình đăng ký dự thi',
        file: '/vanban_bieumau/Quy_trinh_dang_ky_du_thi.png',
        kind: 'image',
        slug: 'quy-trinh-dang-ky-du-thi',
      },
      {
        icon: 'bi-award',
        title: 'Quy trình nhận chứng chỉ',
        file: '/vanban_bieumau/Quy_trinh_nhan_chung_chi.png',
        kind: 'image',
        slug: 'quy-trinh-nhan-chung-chi',
      },
      {
        icon: 'bi-arrow-repeat',
        title: 'Quy trình phúc khảo',
        file: '/vanban_bieumau/Quy_trinh_cham_phuc_khao.jpg',
        kind: 'image',
        slug: 'quy-trinh-phuc-khao',
      },
    ],
  },
  {
    heading: 'Hướng dẫn',
    items: [
      {
        icon: 'bi-shield-check',
        title: 'Nội quy phòng thi đánh giá NLNN',
        file: '/vanban_bieumau/Noi_quy_phong_thi.png',
        kind: 'image',
        slug: 'noi-quy-phong-thi',
      },
      {
        icon: 'bi-exclamation-circle',
        title: 'Vấn đề cần lưu ý trong quá trình thi',
        file: '/vanban_bieumau/Mot_so_van_de_can_luu_y_danh_cho_TS.png',
        kind: 'image',
        slug: 'van-de-can-luu-y',
      },
      {
        icon: 'bi-list-check',
        title: 'Các bước làm bài thi đánh giá NLNN',
        file: '/vanban_bieumau/huong_dan_cac_buoc_thi.pdf',
        kind: 'pdf',
        slug: 'huong-dan-cac-buoc-thi',
      },
    ],
  },
  {
    heading: 'Biểu mẫu',
    items: [
      {
        icon: 'bi-file-earmark-text',
        title: 'Phiếu đăng ký lớp bồi dưỡng/ôn thi',
        file: '/vanban_bieumau/1-_Phieu_dang_ky_lop_boi_duong.docx',
        kind: 'download',
      },
      {
        icon: 'bi-file-earmark-person',
        title: 'Mẫu phiếu đăng ký dự thi',
        file: '/vanban_bieumau/2-_Phieu_dang_ky_du_thi.docx',
        kind: 'download',
      },
      {
        icon: 'bi-calendar-x',
        title: 'Mẫu giấy đăng ký hoãn thi',
        file: '/vanban_bieumau/3-_Don-xin-hoan-thi-cap-Chung-chi.doc',
        kind: 'download',
      },
      {
        icon: 'bi-pencil-square',
        title: 'Mẫu phiếu điều chỉnh thông tin',
        file: '/vanban_bieumau/4-_Phieu_dieu_chinh_thong_tin.docx',
        kind: 'download',
      },
      {
        icon: 'bi-person-check',
        title: 'Mẫu giấy ủy quyền',
        file: '/vanban_bieumau/5-_Giay_uy_quyen.doc',
        kind: 'download',
      },
      {
        icon: 'bi-file-earmark-arrow-up',
        title: 'Đơn xin phúc khảo',
        file: '/vanban_bieumau/6-_Don_xin_phuc_khao_diem_thi.doc',
        kind: 'download',
      },
    ],
  },
]

export function findBieuMauBySlug(slug: string): BieuMauItem | undefined {
  for (const group of bieuMauGroups) {
    const found = group.items.find((it) => it.slug === slug)
    if (found) return found
  }
  return undefined
}
