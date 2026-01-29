import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome({ message }: { message: string }) {
  return (
    // 배경: 은은한 그라데이션 추가 (slate-900 ~ black)
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white p-4">
      {/* 메인 컨테이너: 최대 너비 제한 및 중앙 정렬 */}
      <div className="w-full max-w-md flex flex-col items-center gap-10">
        
        {/* 헤더: 로고 영역 */}
        <header className="flex flex-col items-center gap-4 animate-fade-in-down">
          <div className="relative w-[300px] max-w-full p-4 transition-transform hover:scale-105 duration-500">
            {/* 로고 뒤에 은은한 빛(Glow) 효과 추가 */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-50 pointer-events-none" />
            <img
              src={logoLight}
              alt="React Router"
              className="relative block w-full dark:hidden drop-shadow-lg"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="relative hidden w-full dark:block drop-shadow-2xl"
            />
          </div>
        </header>

        {/* 네비게이션 카드: 글래스모피즘 적용 */}
        <div className="w-full space-y-6">
          <nav className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl ring-1 ring-black/5">
            <p className="mb-6 text-lg font-semibold text-center text-gray-200 tracking-tight">
              What&apos;s next?
            </p>
            
            <ul className="space-y-3">
              {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:scale-[1.02] border border-transparent hover:border-blue-400/30"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* 아이콘 박스 */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-gray-300 transition-colors group-hover:bg-white group-hover:text-blue-600">
                      {icon}
                    </div>
                    
                    {/* 텍스트 */}
                    <span className="flex-1 font-medium text-gray-200 group-hover:text-white">
                      {text}
                    </span>

                    {/* 화살표 아이콘 (Hover시 이동 효과) */}
                    <svg 
                      className="h-5 w-5 text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-white" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            {/* 하단 메시지 (Cloudflare 메시지) */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                ⚡ {message}
              </span>
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
}

// 아이콘 데이터는 그대로 두되, 내부 className은 위쪽 부모 스타일을 따르게 됩니다.
const resources = [
  {
    href: "https://www.notion.so/2e3ad104dcd2809a885ae5c7b2f2838b?source=copy_link",
    text: "노션",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor" // 색상을 상속받도록 수정
        strokeWidth="2"
      >
        <path
          d="M4 4h16v16H4V4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9h6M9 13h6M9 17h4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "https://docs.google.com/spreadsheets/d/1YeCNpMIq4gUblUnRmWw9AzabphfDZMnJ/edit?gid=599314211#gid=599314211",
    text: "견적",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M3 3h12l6 6v12H3V3z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 10h10M7 14h10M7 18h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "https://blog.naver.com/qls1106",
    text: "블로그",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M4 4h16v16H4V4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9h6M9 13h6M9 17h4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
