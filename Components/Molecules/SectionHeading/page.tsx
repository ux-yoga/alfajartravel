import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600 sm:text-sm",
          eyebrowClassName
        )}
      >
        {eyebrow}
      </span>
      <h2 className={cn("text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl", titleClassName)}>
        {title}
      </h2>
      {description ? (
        <p className={cn("max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base", descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
