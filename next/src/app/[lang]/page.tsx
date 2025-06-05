import Banner from '@/components/Banner/Banner';
import Discover from '@/components/Discover/Discover';
import EventsPreview from '@/components/EventsPreview/EventsPreviewcopy';
import Hero from '@/components/Hero/Hero';
import NewsPreview from '@/components/NewsPreview/NewsPreview';
import Partners from '@/components/Partners/Partners';
import TelegramPreview from '@/components/TelegramPreview/TelegramPreview';
import { getDictionary } from '@/dictionaries';
import { getOrganizationJsonLd } from '@/libs/utils/json-ld';
import { SupportedLanguage } from '@/models/locale';
import Script from 'next/script';

interface HomeProps {
  params: Promise<{ lang: SupportedLanguage }>;
}

export default async function Home(props: HomeProps) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationJsonLd(dictionary)),
        }}
        id="organization-jsonld"
        type="application/ld+json"
      />
    </>
  );
}
//kaan
