import mainProfile from "./Logo.jpg"; // 사진 파일이 같은 폴더에 있어야 합니다.

export function Welcome({ message }: { message: string }) {
  return (
    // 배경: 은은한 밤하늘 느낌 (슬레이트 ~ 블랙)
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-10">
        
        {/* 헤더: 커플 사진 영역 */}
        <header className="flex flex-col items-center gap-4 animate-fade-in-down">
          <div className="relative group cursor-pointer">
            {/* 후광 효과: 핑크빛으로 변경 */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500" />
            
            {/* 메인 사진: 원형 프로필 */}
            <img
              src={mainProfile}
              alt="Our 365 Days"
              className="relative w-48 h-48 rounded-full object-cover border-[6px] border-slate-900 shadow-2xl transform transition duration-500 group-hover:scale-105"
            />
            
            {/* 365일 뱃지 */}
            <div className="absolute bottom-2 right-2 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full border-4 border-slate-900 z-10 shadow-lg">
              ♥ 365
            </div>
          </div>
          
          {/* 타이틀 */}
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-pink-100 to-white drop-shadow-sm">
            Our 1st Anniversary
          </h1>
        </header>

        {/* 네비게이션 카드 */}
        <div className="w-full space-y-6">
          <nav className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl ring-1 ring-black/5">
            <p className="mb-6 text-lg font-semibold text-center text-gray-200 tracking-tight">
              함께한 기록들
            </p>
            
            <ul className="space-y-3">
              {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-pink-500/10 hover:shadow-lg hover:scale-[1.02] border border-transparent hover:border-pink-500/30"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* 아이콘 박스: 핑크색 포인트 */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-gray-300 transition-colors group-hover:bg-pink-500 group-hover:text-white">
                      {icon}
                    </div>
                    
                    {/* 텍스트 */}
                    <span className="flex-1 font-medium text-gray-200 group-hover:text-pink-100">
                      {text}
                    </span>

                    {/* 화살표 */}
                    <svg className="h-5 w-5 text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-pink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            {/* 하단 메시지 */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <span className="inline-block rounded-full bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-400 border border-pink-500/20">
                ✨ {message}
              </span>
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: "https://www.notion.so/2e3ad104dcd2809a885ae5c7b2f2838b?source=copy_link",
    text: "노션",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4V4z"/>
        <path d="M9 9h6M9 13h6M9 17h4"/>
      </svg>
    ),
  },
  {
    href: "https://docs.google.com/spreadsheets/d/1YeCNpMIq4gUblUnRmWw9AzabphfDZMnJ/edit?gid=599314211#gid=599314211",
    text: "견적",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h12l6 6v12H3V3z"/>
        <path d="M7 10h10M7 14h10M7 18h6"/>
      </svg>
    ),
  },
  {
    href: "https://blog.naver.com/qls1106",
    text: "블로그",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4V4z"/>
        <path d="M9 9h6M9 13h6M9 17h4"/>
      </svg>
    ),
  },
];
