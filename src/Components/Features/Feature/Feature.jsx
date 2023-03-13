const Feature = ({ title, text, image }) => {
  console.log(title, text, image);
  const { src, alt } = image;
  return (
    <div class="feature-item">
      <img
        src={src}
        alt={alt}
        class="feature-icon"
      />
      <h3 class="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Feature;