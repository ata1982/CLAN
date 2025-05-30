import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'course' | 'event';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  course?: {
    name: string;
    description: string;
    provider: string;
    instructor: string;
    duration: string;
    level: string;
    price?: string;
  };
  event?: {
    name: string;
    startDate: string;
    endDate?: string;
    location?: string;
    online?: boolean;
    price?: string;
  };
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image = '/assets/images/ogp_default.webp',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
}: SEOProps): Metadata {
  const siteTitle = 'オートウェビナー大学 CLAN';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  const siteUrl = 'https://autowebinar-university.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : [{ name: '前田 由紀' }],
    creator: 'オートウェビナー大学 CLAN',
    publisher: 'オートウェビナー大学 CLAN',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },    },
    openGraph: {
      type: type as 'website' | 'article',
      siteName: siteTitle,
      title: fullTitle,
      description,
      url: fullUrl,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'ja_JP',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@autowebinar_univ',
      creator: '@autowebinar_univ',
      title: fullTitle,
      description,
      images: [fullImage],
    },
    alternates: {
      canonical: fullUrl,
    },
    verification: {
      google: 'google-verification-code',
      other: {
        'facebook-domain-verification': 'facebook-verification-code',
      },
    },
  };
}

export function generateStructuredData(props: SEOProps) {
  const { course, event, type, title, description, url, image, author } = props;
  const siteUrl = 'https://autowebinar-university.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image?.startsWith('http') ? image : `${siteUrl}${image}`;

  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'オートウェビナー大学 CLAN',
    url: siteUrl,
    logo: `${siteUrl}/assets/images/logo.webp`,
    description: 'マーケティング自動化とウェビナー構築を学ぶオンラインスクール',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+81-3-1234-5678',
      contactType: 'Customer Service',
      areaServed: 'JP',
      availableLanguage: 'Japanese',
    },
    sameAs: [
      'https://twitter.com/autowebinar_univ',
      'https://www.facebook.com/autowebinar.university',
      'https://www.youtube.com/@autowebinar-university',
    ],
  };

  if (type === 'course' && course) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: course.name,
      description: course.description,
      provider: {
        '@type': 'Organization',
        name: course.provider,
        url: siteUrl,
      },
      instructor: {
        '@type': 'Person',
        name: course.instructor,
      },
      educationalLevel: course.level,
      timeRequired: course.duration,
      url: fullUrl,
      image: fullImage,
      ...(course.price && {
        offers: {
          '@type': 'Offer',
          price: course.price.replace(/[^\d]/g, ''),
          priceCurrency: 'JPY',
          availability: 'https://schema.org/InStock',
        },
      }),
    };
  }

  if (type === 'event' && event) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: event.name,
      startDate: event.startDate,
      ...(event.endDate && { endDate: event.endDate }),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: event.online 
        ? 'https://schema.org/OnlineEventAttendanceMode'
        : 'https://schema.org/OfflineEventAttendanceMode',
      location: event.online
        ? {
            '@type': 'VirtualLocation',
            url: fullUrl,
          }
        : {
            '@type': 'Place',
            name: event.location || 'オートウェビナー大学',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'JP',
            },
          },
      organizer: {
        '@type': 'Organization',
        name: 'オートウェビナー大学 CLAN',
        url: siteUrl,
      },
      ...(event.price && {
        offers: {
          '@type': 'Offer',
          price: event.price === '無料' ? '0' : event.price.replace(/[^\d]/g, ''),
          priceCurrency: 'JPY',
          availability: 'https://schema.org/InStock',
        },
      }),
    };
  }

  if (type === 'article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      image: fullImage,
      author: {
        '@type': 'Person',
        name: author || '前田 由紀',
      },
      publisher: {
        '@type': 'Organization',
        name: 'オートウェビナー大学 CLAN',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/assets/images/logo.webp`,
        },
      },
      url: fullUrl,
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
    };
  }

  return baseData;
}

interface StructuredDataProps {
  data: object;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
