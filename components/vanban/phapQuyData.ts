export type PhapQuyDoc = {
  slug: string | null
  icon: string
  title: string
  pdf?: string
  externalHref?: string
}

export const phapQuyDocs: PhapQuyDoc[] = [
  {
    slug: 'quy-che-thi-danh-gia-nang-luc-ngoai-ngu',
    icon: 'bi-journal-text',
    title: 'Quy chế thi đánh giá năng lực ngoại ngữ',
    pdf: '/vanbangphapquy/vbhn-232017-242021tt-bgddt-qc-ky-xt.pdf',
  },
  {
    slug: 'dinh-dang-de-thi-bac-3-den-bac-5',
    icon: 'bi-file-earmark-ruled',
    title: 'Định dạng đề thi đánh giá năng lực ngoại ngữ (Bậc 3 – 5)',
    pdf: '/vanbangphapquy/Quyet-dinh-Ban-hanh-dinh-dang-de-thi-danh-gia-nang-luc-su-dung-tieng-Anh-tu-bac-3-den-bac-5-theo-Khung-nang-luc-ngoai-ngu-6-bac-dung-cho-Viet-Nam1.pdf',
  },
  {
    slug: 'de-an-to-chuc-thi-dgnl-tieng-anh-6-bac',
    icon: 'bi-file-earmark-text',
    title: 'Đề án tổ chức thi ĐGNL Tiếng Anh theo Khung NLNN 6 bậc',
    pdf: '/vanbangphapquy/DEAN-ANHVAN-6-BAC-UP-WEB.pdf',
  },
  {
    slug: null,
    icon: 'bi-envelope-paper',
    title: 'Công văn cho phép tổ chức thi ĐGNL Tiếng Anh',
    externalHref: 'https://moet.gov.vn/van-ban/vbdh/Pages/chi-tiet-van-ban.aspx?ItemID=3294',
  },
]

export function getDocBySlug(slug: string): PhapQuyDoc | undefined {
  return phapQuyDocs.find((d) => d.slug === slug)
}
