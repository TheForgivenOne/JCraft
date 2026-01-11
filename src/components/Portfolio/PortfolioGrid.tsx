'use client';

import PortfolioItem from './PortfolioItem';

export default function PortfolioGrid() {
  // Mock data for portfolio items
  const portfolioItems = [
    {
      id: '1',
      title: 'Live Edge Dining Table',
      description: 'Hand-selected reclaimed oak with natural edges, preserved with organic oil finish.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4-U-Yb0bqCh2tJkEYso3r-445_XMXJxEjFE0PeNPMK-47qRCr1dsfjGqcg-gkp84yEVt_ExyOFbnQ4dTAzgqDsmGHHAwAnOIEiurrv4S2o9GYjcjAYwgrqhnWMaJ5SmYgE2Upx2pYSnKxFMvY6ocvqIuzD1GbJg1g4Rkawl-QkfFI_6R7UYK1bedVj_Ix9WCrCP_2I2VEvFup8h6CQ1yKeFYBTabpDX7TgrhzfbJpkzm9OXQ1UY5jyPfFEVRmDX5Ve6v3FNY7gnaJ'
    },
    {
      id: '2',
      title: 'Forged Steel Sconce',
      description: 'Minimalist lighting fixture crafted from hand-forged steel and antiqued brass.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVcL2qTecgUdnFICwfDRj6YUpT4-dAh5Ckjg4FP_OTzQRLCtu_5dZcYyG7kgaGYgODBfDRH3nVWOFvAKIlidKrz78mHUSo8lLK5zhiOZK31tD-nm8RZicQn0VZvLzdPAAwDg6fyHNGEp-FI-ijOo986QiJXRP7_8YePb9NxQ5ZIFK-m5XWoNZ7gKqb2sxXpANdpPPftEAFJKNahwBegaX0dBGjjrbxhwigLxgGGJCOMQXeKMWO-M0HOrpL3XrU_y_o4pY8ClFeRRBM'
    },
    {
      id: '3',
      title: 'Artisan Leather Satchel',
      description: 'Full-grain vegetable tanned leather, hand-stitched with waxed linen thread.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXJsoJZ0Lc0EFB-4Bo754okDQSiBQQDMHVErIPRkW4zXS3IirTfHyn6j7d7i8aGbExDMwXvKXZ-YMZUGSNVWci_iGp--XdI4t9XJcPunBm2O7DbYetTZgjMBNOkIgigI_ldS4YxNSbU7M72QkuL-luIql0cYq2S-7h_Jo63Ly9-Ds6bkib3t8Es3I7T2ZTTq2hezFFn6vYcXX_-z7uJrr6GH6yxyCjr2B4DZXa2Nmj84lU6ruKXaEF7VB-7bpMjhvJMEupH3aDQw6D'
    },
    {
      id: '4',
      title: 'Aged Brass Desk Clock',
      description: 'Solid brass case with a brushed finish and silent Japanese movement.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEUmYK-vDdBxlrg8gqvhCeMOYVZkNZJG6rfP6Z2y1NAu0Odr_8WKTITa8LqMTGbGoWJP13XYX0FWaiL6mfsP4Uf78Xqsnn8I2tudA0ZmwxaUcoTSwmahCPSJi-ij81AYruVQlQpvdtNgWH-qjJhxE-3a8EryzU2vZi5vrpO8QSvUmogOX4WGj-7c9bvl98hJZ7CxRq4BwLEM6UKy2vP2aGQjcYdSrqNlK5-eoMCFF0PmEqn-PYP-R_7cIoY4T750ogwViwBuErVY_W'
    },
    {
      id: '5',
      title: 'Sculptural Lounge Chair',
      description: 'Ergonomic design carved from a single block of premium walnut wood.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbIn1suhN25D96iu0dRdrhEoXQhkjkl3qpWdVOPYCF2fREWTsTfuySYsTefNlOyJb419lzIp3qjyXx93i2wghoA9rSh0OPqP-_eRty64eRvVbOm8zbA_iPhgntdAYestpvdUNgiKyQHllIdpzxkY-922HF5eqKyc-FIf2zIoTN39nn09QfShP0C2dMnlghZa6r2jxSmq-yCOcS7dMrcKQIEPMZwwkppPBwDiOr6N4Tm_xO9UfAgwzxl16lyr8HahhkWo6xdmsPv2TT'
    },
    {
      id: '6',
      title: 'Master Chisel Set',
      description: 'High-carbon steel blades with ergonomic ash handles for precision work.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3yBziLiCOnshXB0O45_sbYFbwjYVKIrU131utBP5niySPS9kcsdhKveQbJne9V_cgX3azs26fBPyXxVu2NATmHXtNSGCmyy5ahb-7-_CtJdRJP7llAbGguF3ghWiHKe1aK8S9DH1Zcnj73_7f-WJqyMIrFk7P6OeB6aJVrP7oiqRMyEf7urDERV14Zvx6W5BVXemJECN6mq9pmQ5XgQMEYDWr5Nt_1FFKkx0GMarTP1xRVXc9VvV-CAzxrPOkz9PC9FWKWD0UmcG8'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <PortfolioItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}