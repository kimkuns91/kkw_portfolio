import {
  PRIVACY_EFFECTIVE_DATE,
  PRIVACY_PAGE_TEXT,
  PRIVACY_SECTIONS,
} from '@/constants/privacy';

import { privacyMetadata } from './metadata';

export const metadata = privacyMetadata;

/**
 * 개인정보 수집 및 이용 안내 페이지
 *
 * @description
 * 문의 폼을 통한 개인정보 수집 내역과 블로그 광고(AdSense) 관련 사항을
 * 안내하는 정적 페이지
 *
 * @features
 * - constants/privacy.ts의 데이터를 렌더링
 * - 시행일 표시
 * - 문의 폼 동의 체크박스에서 링크되는 대상 페이지
 */
export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-bold text-neutral-light sm:text-4xl">
        {PRIVACY_PAGE_TEXT.title}
      </h1>
      <p className="mt-6 leading-relaxed text-neutral-dark">
        {PRIVACY_PAGE_TEXT.description}
      </p>

      <div className="mt-12 flex flex-col gap-10">
        {PRIVACY_SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-neutral-light">
              {section.title}
            </h2>

            {section.body?.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 leading-relaxed text-neutral-dark"
              >
                {paragraph}
              </p>
            ))}

            {section.items && (
              <dl className="mt-4 flex flex-col gap-3 rounded-2xl bg-[#27272c] p-5">
                {section.items.map((item) => (
                  <div key={item.term} className="flex flex-col gap-1">
                    <dt className="text-sm font-medium text-neutral-light">
                      {item.term}
                    </dt>
                    <dd className="text-sm leading-relaxed text-neutral-dark">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </section>
        ))}
      </div>

      <p className="mt-14 border-t border-white/[0.1] pt-6 text-sm text-neutral-dark">
        시행일: {PRIVACY_EFFECTIVE_DATE}
      </p>
    </main>
  );
}
