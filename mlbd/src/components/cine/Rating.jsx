import Star from "../../assets/star.svg";

export default function Rating({ value }) {
 const stars = Array(value).fill(Star);
 return (
  <div className="flex items-center space-x-1 mb-5">
   {stars.map((star, idx) => (
    <img key={idx} src={star} height="14" alt="star" />
   ))}
  </div>
 );
}
