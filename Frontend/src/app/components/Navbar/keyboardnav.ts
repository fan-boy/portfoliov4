'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function KeyboardNav() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey
      ) {
        return;
      }
      switch (e.key.toLowerCase()) {
        // case 'h':
        //   router.push('/');
        //   break;
        case 'w':
          //router.push('/#work');
          // Force hashchange event for client-side navigation
          // setTimeout(() => {
          //   window.dispatchEvent(new HashChangeEvent('hashchange'));
          // }, 0);
          router.push('/');
          break;
        case 'a':
          router.push('/about');
          break;
        case 'c':
          router.push('/contact');
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return null;
}
