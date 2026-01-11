'use client';

import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import PortfolioItem from './PortfolioItem';

export default function PortfolioGrid() {
  const portfolioItems = useQuery(api.portfolio.getItems) || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item: any) => (
        <PortfolioItem
          key={item._id}
          id={item._id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}