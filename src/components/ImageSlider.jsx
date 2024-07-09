import "../styles/ImageSlider.css";

export default function ImageSlider({ imagesArr }) {
  return (
    <section className="imageSlider">
      <img src={imagesArr[0]} alt="productImage" />
      <img src={imagesArr[1]} alt="productImage" />
      <img src={imagesArr[2]} alt="productImage" />
      <img src={imagesArr[3]} alt="productImage" />
    </section>
  );
}
