import MyCarousel from "../homePage/MyCarousel";
// import "../styles/globals.css"; // Ensure your global styles are imported
import "../styles/carousel.css"; // Import the carousel styles

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Carousel</h1>
      <MyCarousel />
    </div>
  );
}
