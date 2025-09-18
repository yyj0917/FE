import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className='mobile-area bg-white000/50 fixed top-1/2 left-1/2 flex h-full -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
      <Loader2 className='text-point-400 size-12 animate-spin rounded-full' />
    </div>
  );
}
