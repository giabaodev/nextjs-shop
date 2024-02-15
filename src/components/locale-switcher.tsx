'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { type Locale, i18n } from '@/configs/i18n-config';
import { getDictionary } from '@/configs/get-dictionary';
import { useEffect, useState } from 'react';

export default function LocaleSwitcher({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['lang'];
}) {
  const [currLan, setCurrLan] = useState<Locale>();
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    console.log('loasclaslcas', locale)
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  // useEffect(() => {
  //   if (!pathName) return setCurrLan('vi');
  //   else {
  //     const segments = pathName.split('/')[1];
      
  //   }
  // }, []);

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Chọn ngôn ngữ" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {i18n.locales.map((locale) => {
            return (
              <SelectItem key={locale} value={locale}>
                <Link href={redirectedPathName(locale)}>{dictionary[locale]}</Link>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
