import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "위즈더플래닝 x SH인터내셔널 | 프리미엄 콘텐츠 제작",
  description: "음식점과 브랜드를 위한 전문 콘텐츠 제작 서비스. 사진 촬영, SNS 영상, 인플루언서 먹방, 유튜브 채널 운영까지. SH인터내셔널 제휴 30% 할인 혜택.",
  openGraph: {
    title: "프리미엄 콘텐츠 제작",
    description: "여기를 눌러 링크를 확인하세요.",
    url: "https://sh-psi-kohl.vercel.app",
    siteName: "위즈더플래닝 x SH인터내셔널",
    images: [
      {
        url: "/food-photography.png",
        width: 1200,
        height: 630,
        alt: "위즈더플래닝 콘텐츠 제작 서비스",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "프리미엄 콘텐츠 제작",
    description: "여기를 눌러 링크를 확인하세요.",
    images: ["/food-photography.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}