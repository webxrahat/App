import star from "../../public/img/star.svg";

export default function Rating(value) {
  const stars = Array(value).fill(star);
  return (
    <>
      {stars.map((star, idx) => (
        <img key={idx} src={star} alt={"Image.name"} />
      ))}
    </>
  );
}
