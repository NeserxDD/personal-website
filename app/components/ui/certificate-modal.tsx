'use client';

import { X } from './icons';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export function CertificateModal({
  isOpen,
  onClose,
  imageUrl,
  title,
}: CertificateModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl max-h-[80vh] bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl shadow-gray-900/50"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain"
          style={{ maxHeight: '70vh' }}
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-full bg-gray-100 dark:bg-gray-800 p-1.5 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
