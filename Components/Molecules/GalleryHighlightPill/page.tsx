type GalleryHighlightPillProps = {
  text: string;
  delayMs?: number;
};

export default function GalleryHighlightPill({
  text,
  delayMs = 0,
}: GalleryHighlightPillProps) {
  return (
    <div
      className="animate-soft-rise rounded-3xl border border-white/15 bg-white/10 p-4 text-sm text-slate-100/90 backdrop-blur-sm"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {text}
    </div>
  );
}
