import { Dictionary, SupportedLanguage } from '@/models/locale';
import Link from 'next/link';
import RenderEvents from './RenderEvents/RenderEvents';

interface EventsPreviewProps {
  dictionary: Dictionary;
  lang: SupportedLanguage;
}

export default function EventsPreview({
  dictionary,
  lang,
}: EventsPreviewProps) {
  return (
    <section className="relative bg-[#f5f7fa] py-12 sm:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Başlıklar */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 sm:text-base">
            {dictionary.pages_home.events_preview.subtitle ||
              'Yakında neler olacağına bir göz atın!'}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
            {dictionary.pages_home.events_preview.title ||
              'Yaklaşan Etkinlikler'}
          </h2>
        </div>

        {/* Etkinlik Kartları */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <RenderEvents dictionary={dictionary} lang={lang} />
        </div>

        {/* Butonlar */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Link
            className="w-full rounded-xl bg-indigo-600 px-8 py-5 text-center text-xl font-bold text-white shadow-lg transition duration-200 hover:bg-indigo-700 sm:w-auto"
            href={`/${lang}/events`}
          >
            {dictionary.pages_home.events_preview.event_calendar ||
              'Etkinlik Takvimi'}
          </Link>
          <Link
            className="w-full rounded-xl bg-indigo-600 px-8 py-5 text-center text-xl font-bold text-white shadow-lg transition duration-200 hover:bg-indigo-700 sm:w-auto"
            href={`/${lang}/events`}
          >
            {dictionary.pages_home.events_preview.event_groups ||
              'Etkinlik Grupları'}
          </Link>
          <Link
            className="w-full rounded-xl bg-indigo-600 px-8 py-5 text-center text-xl font-bold text-white shadow-lg transition duration-200 hover:bg-indigo-700 sm:w-auto"
            href={`/${lang}/events`}
          >
            {dictionary.pages_home.events_preview.courses_and_private_lessons ||
              'Kurslar ve Özel Dersler'}
          </Link>
        </div>
      </div>

      {/* Opsiyonel arka plan deseni */}
      <div className="absolute inset-0 opacity-10" />
    </section>
  );

  // deneme
}
