"use client";

import PortfolioItem from "./PortfolioItem";

export default function PortfolioGrid() {
  // Mock data for portfolio items
  const portfolioItems = [
    {
      id: "1",
      title: "Live Edge Dining Table",
      description:
        "Hand-selected reclaimed oak with natural edges, preserved with organic oil finish.",
      imageUrl: "/images/image_17.jpg",
    },
    {
      id: "2",
      title: "Forged Steel Sconce",
      description:
        "Minimalist lighting fixture crafted from hand-forged steel and antiqued brass.",
      imageUrl: "/images/image_18.jpg",
    },
    {
      id: "3",
      title: "Artisan Leather Satchel",
      description:
        "Full-grain vegetable tanned leather, hand-stitched with waxed linen thread.",
      imageUrl: "/images/image_19.jpg",
    },
    {
      id: "4",
      title: "Aged Brass Desk Clock",
      description:
        "Solid brass case with a brushed finish and silent Japanese movement.",
      imageUrl: "/images/image_20.jpg",
    },
    {
      id: "5",
      title: "Sculptural Lounge Chair",
      description:
        "Ergonomic design carved from a single block of premium walnut wood.",
      imageUrl: "/images/image_21.jpg",
    },
    {
      id: "6",
      title: "Master Chisel Set",
      description:
        "High-carbon steel blades with ergonomic ash handles for precision work.",
      imageUrl: "/images/image_22.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <PortfolioItem
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}
