import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  image?: string;
  title?: string;
  description?: string;
}

export default function Card({
  children,
  className = "",
  header,
  footer,
  image,
  title,
  description,
}: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-[#2b2118] rounded-xl border border-[#f3ede7] dark:border-[#3d2e21] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all group craft-card relative flex flex-col ${className}`}
    >
      {image && (
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={image}
            alt={title || "Card image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            style={{ objectFit: "cover" }}
          />
          <div className="hover-overlay absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-[#1b140d] px-6 py-3 rounded-lg font-bold shadow-xl hover:bg-primary hover:text-white transition-colors">
              View Details
            </button>
          </div>
        </div>
      )}
      {header && <div className="p-4">{header}</div>}
      {title && (
        <div className="p-6">
          {title && <h3 className="text-lg font-bold mt-1 mb-2">{title}</h3>}
          {description && (
            <p className="text-sm text-[#9a734c] line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
      {footer && <div className="p-4">{footer}</div>}
    </div>
  );
}
