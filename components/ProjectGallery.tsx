"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ProjectGalleryProps = {
  images: string[];
  projectTitle: string;
  projectSlug: string;
};

export function ProjectGallery({ images, projectTitle, projectSlug }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const galleryImages = useMemo(() => {
    if (!images || images.length === 0) {
      return [
        {
          src: "/projects/placeholder.svg",
          alt: `${projectTitle} screenshot placeholder`,
        },
      ];
    }
    return images.map((image) => ({
      src: image.startsWith("/") ? image : `/projects/${projectSlug}/${image}`,
      alt: `${projectTitle} screenshot ${image}`,
    }));
  }, [images, projectSlug, projectTitle]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowRight") setActiveIndex((current) => (current + 1) % galleryImages.length);
      if (event.key === "ArrowLeft") setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [galleryImages.length, isOpen]);

  if (galleryImages.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {galleryImages.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => {
              setActiveIndex(index);
              setIsOpen(true);
            }}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-slate-900 text-left"
            aria-label={`Open ${projectTitle} screenshot ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-slate-950/70 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">
              Project Screenshot
            </span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 px-4 backdrop-blur-sm" aria-modal="true" role="dialog">
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute -right-2 -top-12 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-white"
              aria-label="Close gallery"
            >
              <X size={18} />
            </button>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-950">
                <Image
                  src={galleryImages[activeIndex].src}
                  alt={galleryImages[activeIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length)}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                <ChevronLeft size={16} />
                Previous
              </button>
              <span className="text-sm text-slate-300">{activeIndex + 1} / {galleryImages.length}</span>
              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current + 1) % galleryImages.length)}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
