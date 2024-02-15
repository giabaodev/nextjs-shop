// 'use client'

import { getDictionary } from '@/configs/get-dictionary';
import LocaleSwitcher from '../locale-switcher';
import { Button } from '../ui/button';

export default async function Header({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  return (
    <header className="py-7">
      <nav className="flex px-32 justify-between">
        <ul className="flex gap-12 items-center">
          <li>Product</li>
          <li>Contact</li>
        </ul>
        <ul className="flex gap-4 items-center">
          <LocaleSwitcher dictionary={dictionary.lang}/>
          <Button>{dictionary.auth.lg}</Button>
        </ul>
      </nav>
    </header>
  );
}
