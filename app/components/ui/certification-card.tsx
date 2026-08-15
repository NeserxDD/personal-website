'use client';

import { useState } from 'react';
import type { Certification } from '../../../lib/data/types';
import { CertificateModal } from './certificate-modal';

interface CertificationCardProps {
  cert: Certification;
}

export function CertificationCard({ cert }: CertificationCardProps) {
  const { name, issuer, dateEarned, badgeImage } = cert;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="group relative flex items-center gap-3 rounded-lg border border-gray-200 dark:border-gray-800 px-4 py-3 transition-all hover:bg-gray-50 dark:hover:bg-gray-800/30 cursor-pointer"
      >
        <img
          src={badgeImage}
          alt={name}
          className="h-10 w-10 shrink-0 rounded object-contain group-hover:scale-110 transition-transform"
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
            {name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{issuer}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {formatDate(dateEarned)}
          </p>
        </div>
      </div>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={badgeImage}
        title={name}
      />
    </>
  );
}
