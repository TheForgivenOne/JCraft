"use client";

interface PortfolioItemProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function PortfolioItem({
  id,
  title,
  description,
  imageUrl,
}: PortfolioItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
