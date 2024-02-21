'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Hero from '@/components/shared/Hero';
import Newest from '@/components/shared/Newest';
export default function Home() {
  const { setTheme } = useTheme();
  return (
    <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
    </main>
  );
}
