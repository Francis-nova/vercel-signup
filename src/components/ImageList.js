const ImageList = ({ images }) => {
  return (
    <>
      {images.map((item, i) => (
        <span key={i}>
          <img src={item.image} alt={item.name} />
        </span>
      ))}
    </>
  );
};

export default ImageList;
