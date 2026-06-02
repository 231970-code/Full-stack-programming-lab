import HeroBanner from "@/components/home/HeroBanner";
import BrandLogos from "@/components/home/BrandLogos";
import LatestUpdates from "@/components/home/LatestUpdates";
import ProductTabs from "@/components/home/ProductTabs";
import Collections from "@/components/home/Collections";
import FeaturedProduct from "@/components/home/FeaturedProduct";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <BrandLogos />
      <LatestUpdates />
      <ProductTabs />
      <Collections />
      <FeaturedProduct />
    </>
  );
}