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
    <section className="relative bg-gray-100 py-16">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title and Subtitle */}
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-indigo-600">
            {dictionary.pages_home.events_preview.subtitle ||
              'Yakında neler olacağına bir göz atın!'}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {dictionary.pages_home.events_preview.title ||
              'Yaklaşan Etkinlikler'}
          </h2>
        </div>

        {/* Event Grid */}
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          <RenderEvents dictionary={dictionary} lang={lang} />
        </div>

        {/* See All Events Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            href={`/${lang}/events`}
          >
            {dictionary.pages_home.events_preview.event_calendar ||
              'Etkinlik Takvimi'}
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            href={`/${lang}/events`}
          >
            {dictionary.pages_home.events_preview.event_groups ||
              'Etkinlik Gurupları'}
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            href={`/${lang}/events`}
          >
            {dictionary.pages_home.events_preview.courses_and_private_lessons ||
              'Kurs ve Özel Ders'}
          </Link>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-25" />
    </section>
  );
}
