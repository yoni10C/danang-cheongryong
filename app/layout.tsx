import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://danangcheongryong.com"),

  title: {
    default: "다낭 청룡열차 공식 홈페이지 | 마사지·이발소 가격 및 예약",
    template: "%s | 다낭 청룡열차",
  },

  description:
    "다낭 청룡열차 공식 홈페이지입니다. 청룡열차 마사지·이발소 A·B·C 코스 가격, 내부 시설, 이용 안내와 카카오톡 예약 정보를 확인하세요.",

    verification: {
  other: {
    "naver-site-verification":
      "b0d383ce6bd9d0e9ffa78c34559b040c1df6d605",
  },
},
    
  keywords: [
    "다낭 청룡열차",
    "다낭 청룡열차 공식 홈페이지",
    "청룡열차 마사지",
    "청룡열차 이발소",
    "다낭 청룡열차 가격",
    "다낭 청룡열차 예약",
    "다낭 마사지",
    "다낭 이발소",
  ],
  
icons: {
  icon: "https://danangcheongryong.com/favicon.png",
  shortcut: "https://danangcheongryong.com/favicon.png",
},

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "다낭 청룡열차 공식 홈페이지",
    description:
      "청룡열차 마사지·이발소 코스 가격, 내부 시설, 이용 안내 및 예약 정보를 확인하세요.",
    url: "https://danangcheongryong.com",
    siteName: "다낭 청룡열차",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/cheongryong-hero.png",
        width: 1672,
        height: 941,
        alt: "다낭 청룡열차 공식 홈페이지",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "다낭 청룡열차 공식 홈페이지",
    description:
      "청룡열차 마사지·이발소 코스 가격과 이용 및 예약 정보를 확인하세요.",
    images: ["/cheongryong-hero.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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