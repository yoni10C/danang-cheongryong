import Image from "next/image";

export default function Home() {
  const courses = [
    {
      name: "A 코스",
      price: "1,600,000 VND",
      label: "BASIC",
      description:
        "마사지 또는 이발소 케어를 선택할 수 있는 기본 코스입니다.",
    },
    {
      name: "B 코스",
      price: "2,000,000 VND",
      label: "SIGNATURE",
      description:
        "청룡열차의 대표적인 시그니처 코스입니다.",
    },
    {
      name: "C 코스",
      price: "3,000,000 VND",
      label: "PREMIUM",
      description:
        "직원 사진 프로필 확인 및 선택이 가능한 프리미엄 코스입니다.",
    },
  ];

  const barberServices = [
    "면도",
    "세안",
    "얼굴 각질 제거",
    "마스크팩",
    "머리 감기",
    "귀 청소",
    "손발톱 정리",
  ];

  const gallery = [
    {
      src: "/interior-1.jpg",
      alt: "청룡열차가 위치한 건물 외관",
    },
    {
      src: "/interior-2.jpg",
      alt: "청룡열차 내부 대기 공간",
    },
    {
      src: "/interior-3.jpg",
      alt: "청룡열차 마사지룸",
    },
    {
      src: "/interior-4.jpg",
      alt: "청룡열차 리셉션",
    },
  ];

  const faqs = [
    {
      question: "A, B, C 코스는 어떤 차이가 있나요?",
      answer:
        "A코스는 1,600,000 VND, B코스는 2,000,000 VND, C코스는 3,000,000 VND입니다. 코스에 따라 이용 방식과 직원 배정 방식이 달라질 수 있습니다.",
    },
    {
      question: "마사지와 이발소 중 선택할 수 있나요?",
      answer:
        "네. 코스 이용 시 마사지 또는 이발소 케어 중 원하는 프로그램을 선택할 수 있습니다.",
    },
    {
      question: "C코스는 직원 선택이 가능한가요?",
      answer:
        "네. C코스는 직원 사진 프로필을 확인한 뒤 선택할 수 있습니다.",
    },
    {
      question: "A코스와 B코스도 직원 선택이 가능한가요?",
      answer:
        "A코스와 B코스는 기본적으로 직원이 랜덤으로 배정됩니다.",
    },
    {
      question: "이발소 코스에는 어떤 서비스가 포함되나요?",
      answer:
        "면도, 세안, 얼굴 각질 제거, 마스크팩, 머리 감기, 귀 청소, 손발톱 정리 등이 포함됩니다.",
    },
    {
      question: "예약은 어떻게 하나요?",
      answer:
        "카카오톡으로 방문 날짜, 인원, 원하는 코스를 보내주시면 예약 가능 여부를 안내해드립니다.",
    },
    {
      question: "당일 예약도 가능한가요?",
      answer:
        "당일 예약도 가능하지만 예약 상황에 따라 이용 시간이 달라질 수 있으므로 방문 전 카카오톡으로 확인해주세요.",
    },
    {
      question: "건강 상태나 피부 상태가 좋지 않아도 이용할 수 있나요?",
      answer:
        "피부 질환이나 건강 상태에 따라 일부 서비스가 제한될 수 있으므로 이용 전에 미리 알려주세요.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#06162b] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#d7ad58]/20 bg-[#06162b]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
          <a
            href="#top"
            className="text-xl font-black tracking-tight md:text-2xl"
          >
            <span className="text-[#e7c06e]">청룡열차</span>
          </a>

          <nav className="flex items-center gap-4 text-xs font-semibold text-gray-300 sm:gap-6 sm:text-sm">
            <a href="#price" className="transition hover:text-[#e7c06e]">
              가격
            </a>

            <a href="#gallery" className="transition hover:text-[#e7c06e]">
              내부
            </a>

            <a href="#service" className="transition hover:text-[#e7c06e]">
              서비스
            </a>

            <a href="#faq" className="transition hover:text-[#e7c06e]">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <Image
          src="/cheongryong-hero.png"
          alt="다낭 청룡열차 마사지 이발소"
          width={1672}
          height={941}
          priority
          className="h-[330px] w-full object-cover sm:h-[430px] md:h-[580px]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06162b]/80 via-[#06162b]/35 to-black/10" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-8 md:px-6 md:pb-14">
            <div className="max-w-xl rounded-3xl border border-[#d7ad58]/25 bg-[#06162b]/75 p-5 shadow-2xl backdrop-blur-md md:p-8">
              <p className="text-xs font-black tracking-[0.3em] text-[#e7c06e]">
                DANANG CHEONGRYONG
              </p>

              <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
                다낭 청룡열차
              </h1>

              <p className="mt-3 text-base text-gray-200 md:text-lg">
                마사지 & 이발소 공식 홈페이지
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#price"
                  className="rounded-xl bg-[#d7ad58] px-6 py-3 text-center font-black text-[#06162b] transition hover:bg-[#e8c676]"
                >
                  코스 가격 보기
                </a>

                <a
                  href="https://open.kakao.com/o/spDLeJPi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#d7ad58]/60 px-6 py-3 text-center font-black text-[#e7c06e] transition hover:bg-[#d7ad58]/10"
                >
                  예약 문의
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-14 text-center md:px-6 md:py-20">
          <p className="text-xs font-black tracking-[0.3em] text-[#d7ad58]">
            CHEONGRYONG
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            청룡열차 마사지 & 이발소
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300">
            마사지와 이발소 케어를 한곳에서 편리하게 이용할 수 있도록
            코스와 이용 정보를 안내합니다.
          </p>
        </div>
      </section>

      {/* PRICE */}
      <section
        id="price"
        className="border-y border-[#d7ad58]/15 bg-[#091d38]"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <div className="text-center">
            <p className="text-xs font-black tracking-[0.3em] text-[#d7ad58]">
              COURSE & PRICE
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              코스 안내
            </h2>

            <p className="mt-4 text-gray-400">
              이용 목적과 예산에 맞춰 코스를 선택해보세요.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.name}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#d7ad58]/25 bg-[#06162b] p-6 shadow-xl"
              >
                {course.label === "SIGNATURE" && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#d7ad58] px-3 py-1 text-xs font-black text-[#06162b]">
                    BEST
                  </div>
                )}

                <p className="text-xs font-black tracking-[0.2em] text-[#d7ad58]">
                  {course.label}
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  {course.name}
                </h3>

                <p className="mt-5 text-3xl font-black text-[#e7c06e]">
                  {course.price}
                </p>

                <p className="mt-5 min-h-[60px] text-sm leading-7 text-gray-400">
                  {course.description}
                </p>

                <a
                  href="https://open.kakao.com/o/spDLeJPi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block rounded-xl border border-[#d7ad58]/40 px-5 py-3 text-center font-bold text-[#e7c06e] transition hover:bg-[#d7ad58] hover:text-[#06162b]"
                >
                  예약 문의
                </a>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-[#d7ad58]/20 bg-[#06162b] p-5 text-center">
            <p className="text-sm leading-7 text-gray-300">
              코스 이용 시 마사지 또는 이발소 케어 중 원하는 프로그램을
              선택할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <p className="text-xs font-black tracking-[0.3em] text-[#d7ad58]">
            GALLERY
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            청룡열차 내부 안내
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            청룡열차가 위치한 건물 외관과 내부 공간을 사진으로 확인해보세요.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((image) => (
              <div
                key={image.src}
                className="group overflow-hidden rounded-2xl border border-[#d7ad58]/20 bg-[#091d38]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={700}
                  height={700}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 md:h-72"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BARBER SERVICE */}
      <section
        id="service"
        className="border-y border-[#d7ad58]/15 bg-[#091d38]"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <p className="text-xs font-black tracking-[0.3em] text-[#d7ad58]">
            BARBER SERVICE
          </p>

          <h2 className="mt-3 text-3xl font-black">
            이발소 코스 포함 서비스
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            여행 중 간편하게 이용할 수 있는 다양한 그루밍 케어가 포함됩니다.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {barberServices.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-[#d7ad58]/20 bg-[#06162b] px-4 py-5 text-center font-bold text-gray-200"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAFF */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <p className="text-xs font-black tracking-[0.3em] text-[#d7ad58]">
            STAFF GUIDE
          </p>

          <h2 className="mt-3 text-3xl font-black">
            직원 안내
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d7ad58]/20 bg-[#091d38] p-6">
              <p className="text-sm font-black text-[#d7ad58]">
                A · B 코스
              </p>

              <p className="mt-2 text-lg font-bold">
                직원 랜덤 배정
              </p>
            </div>

            <div className="rounded-2xl border border-[#d7ad58]/20 bg-[#091d38] p-6">
              <p className="text-sm font-black text-[#d7ad58]">
                C 코스
              </p>

              <p className="mt-2 text-lg font-bold">
                직원 사진 프로필 선택 가능
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            마사지와 이발소 프로그램은 담당 직원이 구분되어 운영될 수
            있습니다.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-y border-[#d7ad58]/15 bg-[#091d38]"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <p className="text-xs font-black tracking-[0.3em] text-[#d7ad58]">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            자주 묻는 질문
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            방문 전에 많이 문의하시는 내용을 정리했습니다.
          </p>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#d7ad58]/20 bg-[#06162b] p-5 md:p-6"
              >
                <h3 className="font-bold leading-7 text-[#e7c06e]">
                  Q. {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  A. {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTICE */}
      <section id="notice">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <p className="text-xs font-black tracking-[0.3em] text-[#d7ad58]">
            NOTICE
          </p>

          <h2 className="mt-3 text-3xl font-black">
            이용 전 확인해주세요
          </h2>

          <div className="mt-8 space-y-3">
            <div className="rounded-2xl border border-[#d7ad58]/20 bg-[#091d38] p-5 text-sm leading-7 text-gray-300">
              피부 질환이나 피부 상태에 따라 일부 서비스 이용이 제한될 수
              있습니다.
            </div>

            <div className="rounded-2xl border border-[#d7ad58]/20 bg-[#091d38] p-5 text-sm leading-7 text-gray-300">
              건강 상태나 시술 이력 등 서비스 진행에 영향을 줄 수 있는
              사항은 이용 전에 알려주세요.
            </div>

            <div className="rounded-2xl border border-[#d7ad58]/20 bg-[#091d38] p-5 text-sm leading-7 text-gray-300">
              현장 상황이나 이용 조건에 따라 프로그램 내용이 일부 변경될 수
              있습니다.
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section id="reservation" className="bg-[#091d38]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <div className="rounded-3xl border border-[#d7ad58]/30 bg-[#06162b] p-7 text-center shadow-2xl md:p-12">
            <p className="text-xs font-black tracking-[0.3em] text-[#d7ad58]">
              RESERVATION
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              청룡열차 예약 문의
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
              방문 날짜, 인원, 원하는 코스를 말씀해주시면 예약 가능 여부를
              안내해드립니다.
            </p>

            <a
              href="https://open.kakao.com/o/spDLeJPi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block w-full rounded-xl bg-[#d7ad58] px-8 py-4 font-black text-[#06162b] transition hover:bg-[#e8c676] sm:w-auto"
            >
              카카오톡 예약 문의
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d7ad58]/15 bg-[#06162b] py-8 text-center text-sm text-gray-500">
        © 2026 청룡열차. All Rights Reserved.
      </footer>

      {/* FLOATING KAKAO BUTTON */}
      <a
        href="https://open.kakao.com/o/spDLeJPi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 예약 문의"
        className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-[#FEE500] px-4 py-3 font-black text-[#191919] shadow-xl transition hover:scale-105 md:bottom-7 md:right-7"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#191919] text-[10px] font-black text-[#FEE500]">
          TALK
        </span>

        <span className="text-sm">
          예약 문의
        </span>
      </a>
    </main>
  );
}