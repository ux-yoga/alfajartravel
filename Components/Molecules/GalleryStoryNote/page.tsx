type GalleryStoryNoteProps = {
  note: string;
  delayMs?: number;
};

export default function GalleryStoryNote({
  note,
  delayMs = 0,
}: GalleryStoryNoteProps) {
  return (
    <div
      className="animate-soft-rise rounded-2xl border border-emerald-100 bg-white p-4 text-sm leading-relaxed text-slate-600 shadow-[0_16px_35px_-30px_rgba(15,23,42,0.18)]"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {note}
    </div>
  );
}
