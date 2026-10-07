import Image from "next/image";
import Link from "next/link";

export default function ChineseHome() {
  const courses = [
    {
      name: "A 套餐",
      price: "1,600,000 VND",
      label: "BASIC",
      description:
        "基础套餐，可选择按摩护理或韩式理发护理。",
    },
    {
      name: "B 套餐",
      price: "2,000,000 VND",
      label: "SIGNATURE",
      description:
        "青龙列车的人气招牌套餐。",
    },
    {
      name: "C 套餐",
      price: "3,000,000 VND",
      label: "PREMIUM",
      description:
        "高级套餐，可查看工作人员照片资料后进行选择。",
    },
  ];

  const barberServices = [
    "剃须",
    "洁面",
    "面部去角质",
    "面膜护理",
    "洗发",
    "耳部清洁",
    "手脚指甲护理",
  ];

  const gallery = [
    {
      src: "/interior-1.jpg",
      alt: "岘港青龙列车所在建筑外观",
    },
    {
      src: "/interior-2.jpg",
      alt: "岘港青龙列车内部等候区",
    },
    {
      src: "/interior-3.jpg",
      alt: "岘港青龙列车按摩房",
    },
    {
      src: "/interior-4.jpg",
      alt: "岘港青龙列车接待区",
    },
  ];

  const faqs = [
    {
      question: "A、B、C 套餐有什么区别？",
      answer:
        "A套餐价格为1,600,000 VND，B套餐为2,000,000 VND，C套餐为3,000,000 VND。不同套餐的服务方式及工作人员安排可能有所不同。",
    },
    {
      question: "可以选择按摩或理发护理吗？",
      answer:
        "可以。使用套餐时，可根据需要选择按摩护理或韩式理发护理。",
    },
    {
      question: "C套餐可以选择工作人员吗？",
      answer:
        "可以。C套餐可先查看工作人员的照片资料，再进行选择。",
    },
    {
      question: "A套餐和B套餐可以选择工作人员吗？",
      answer:
        "A套餐和B套餐原则上由店内随机安排工作人员。",
    },
    {
      question: "理发护理包含哪些项目？",
      answer:
        "包括剃须、洁面、面部去角质、面膜、洗发、耳部清洁以及手脚指甲护理等项目。",
    },
    {
      question: "如何预约？",
      answer:
        "请发送到店日期、人数和希望使用的套餐，我们会为您确认预约情况。",
    },
    {
      question: "当天可以预约吗？",
      answer:
        "可以当天咨询，但可预约时间会根据当天情况有所不同，建议到店前提前确认。",
    },
    {
      question: "皮肤或身体状况不佳也可以使用服务吗？",
      answer:
        "根据皮肤或身体状况，部分护理项目可能无法提供。如有特殊情况，请在使用服务前提前告知。",
    },
  ];

  return (
    <main className="min-h-screen bg-[#06162b] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#d7ad58]/20 bg-[#06162b]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
          <Link
            href="/zh"
            className="text-xl font-black tracking-tight md:text-2xl"
          >
            <span className="text-[#e7c06e]">青龙列车</span>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-5 text-sm font-semibold text-gray-300 md:flex">
              <a href="#price" className="transition hover:text-[#e7c06e]">
                套餐价格
              </a>

              <a href="#gallery" className="transition hover:text-[#e7c06e]">
                店内环境
              </a>

              <a href="#service" className="transition hover:text-[#e7c06e]">
                护理项目
              </a>

              <a href="#faq" className="transition hover:text-[#e7c06e]">
                常见问题
              </a>
            </nav>

            {/* LANGUAGE */}
            <div className="flex items-center rounded-full border border-[#d7ad58]/30 bg-[#091d38] p-1 text-xs font-black">
              <Link
                href="/"
                className="rounded-full px-3 py-2 text-gray-400 transition hover:text-white"
              >
                한국어
              </Link>

              <Link
                href="/zh"
                className="rounded-full bg-[#d7ad58] px-3 py-2 text-[#06162b]"
              >
                中文
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE NAV */}
        <div className="border-t border-[#d7ad58]/10 px-5 py-3 md:hidden">
          <nav className="flex justify-between text-xs font-semibold text-gray-300">
            <a href="#price">套餐</a>
            <a href="#gallery">环境</a>
            <a href="#service">护理</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <Image
          src="/cheongryong-hero.png"
          alt="岘港青龙列车按摩及韩式理发护理"
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
                岘港青龙列车官方网站
              </h1>

              <p className="mt-3 text-base text-gray-200 md:text-lg">
                按摩 · 韩式理发护理 · 套餐价格 · 预约咨询
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#price"
                  className="rounded-xl bg-[#d7ad58] px-6 py-3 text-center font-black text-[#06162b] transition hover:bg-[#e8c676]"
                >
                  查看套餐价格
                </a>

                <a
                  href="https://open.kakao.com/o/spDLeJPi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#d7ad58]/60 px-6 py-3 text-center font-black text-[#e7c06e] transition hover:bg-[#d7ad58]/10"
                >
                  在线预约
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
            青龙列车按摩 & 韩式理发护理
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300">
            为方便游客了解及使用服务，我们将按摩和韩式理发护理的套餐、
            价格及相关使用信息集中整理在本网站。
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
              套餐及价格
            </h2>

            <p className="mt-4 text-gray-400">
              可根据您的行程和预算选择适合的套餐。
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
                    推荐
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
                  预约咨询
                </a>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-[#d7ad58]/20 bg-[#06162b] p-5 text-center">
            <p className="text-sm leading-7 text-gray-300">
              使用套餐时，可选择按摩护理或韩式理发护理。
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
            青龙列车店内环境
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            可通过照片提前了解青龙列车所在建筑及店内环境。
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
            韩式理发护理项目
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            提供适合旅途中轻松体验的多种基础美容及个人护理项目。
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
            工作人员安排
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d7ad58]/20 bg-[#091d38] p-6">
              <p className="text-sm font-black text-[#d7ad58]">
                A · B 套餐
              </p>

              <p className="mt-2 text-lg font-bold">
                工作人员随机安排
              </p>
            </div>

            <div className="rounded-2xl border border-[#d7ad58]/20 bg-[#091d38] p-6">
              <p className="text-sm font-black text-[#d7ad58]">
                C 套餐
              </p>

              <p className="mt-2 text-lg font-bold">
                可查看照片资料后选择工作人员
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            按摩护理与韩式理发护理可能由不同的工作人员负责。
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
            常见问题
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            以下整理了客人到店前经常咨询的问题。
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
            使用前请确认
          </h2>

          <div className="mt-8 space-y-3">
            <div className="rounded-2xl border border-[#d7ad58]/20 bg-[#091d38] p-5 text-sm leading-7 text-gray-300">
              根据皮肤疾病或皮肤状态，部分护理服务可能无法提供。
            </div>

            <div className="rounded-2xl border border-[#d7ad58]/20 bg-[#091d38] p-5 text-sm leading-7 text-gray-300">
              如有健康状况或曾接受可能影响护理的治疗，请在服务开始前告知工作人员。
            </div>

            <div className="rounded-2xl border border-[#d7ad58]/20 bg-[#091d38] p-5 text-sm leading-7 text-gray-300">
              根据当天现场情况及使用条件，部分服务内容可能会有所调整。
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
              青龙列车预约咨询
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
              请告诉我们到店日期、人数以及希望使用的套餐，
              我们会为您确认预约情况。
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://open.kakao.com/o/spDLeJPi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#FEE500] px-8 py-4 font-black text-[#191919]"
              >
                KakaoTalk 预约
              </a>

              <div className="rounded-xl border border-[#d7ad58]/50 px-8 py-4 font-black text-[#e7c06e]">
                微信咨询即将开放
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d7ad58]/15 bg-[#06162b] py-8 text-center text-sm text-gray-500">
        © 2026 青龙列车. All Rights Reserved.
      </footer>

      {/* FLOATING CONTACT */}
      <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-2 md:bottom-7 md:right-7">
        <a
          href="https://open.kakao.com/o/spDLeJPi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="KakaoTalk预约咨询"
          className="flex items-center gap-2 rounded-full bg-[#FEE500] px-4 py-3 font-black text-[#191919] shadow-xl transition hover:scale-105"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#191919] text-[10px] font-black text-[#FEE500]">
            TALK
          </span>

          <span className="text-sm">预约咨询</span>
        </a>
      </div>
    </main>
  );
}