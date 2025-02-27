'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Suspense } from 'react';

// Dynamically import the OptimizedLayout
const OptimizedLayout = dynamic(
  () => import('./components/OptimizedLayout'),
  { ssr: true }
);

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <OptimizedLayout>
        <div className="space-y-8">
          <Image
            className="dark:invert mx-auto sm:mx-0"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-mono space-y-2">
            <li>
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                app/page.tsx
              </code>
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>
        </div>
      </OptimizedLayout>
    </Suspense>
  );
}
