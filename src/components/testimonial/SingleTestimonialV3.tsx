import Image from "next/image";

interface TestimonialData {
  id?: number;
  ratings?: number | string;
  text?: string;
  avatar?: string;
  name?: string;
  designation?: string;
}

const renderStars = (ratingValue: number) => {
  return Array.from({ length: 5 }, (_, index) => {
    const step = index + 1;
    const half = index + 0.5;

    return (
      <span key={index}>
        {step <= ratingValue ? (
          <i className="fas fa-star" />
        ) : half <= ratingValue ? (
          <i className="fas fa-star-half-alt" />
        ) : (
          <i className="far fa-star" />
        )}
      </span>
    );
  });
};

const SingleTestimonialV3 = ({
  testimonial,
}: {
  testimonial: TestimonialData;
}) => {
  const { ratings = 5, text, avatar, name, designation } = testimonial;
  const numericRating =
    typeof ratings === "string" ? parseFloat(ratings) : ratings;
  const avatarSrc = avatar?.startsWith("/") ? avatar : `/assets/img/team/${avatar}`;

  return (
    <div className="testimonial-style-three-item">
      <div className="tes-rating">
        <span className="me-3">{numericRating.toFixed(1)}</span>
        <div className="icon">{renderStars(numericRating)}</div>
      </div>
      <p>{text}</p>
      <div className="tm-provider">
        <div className="thumb">
          <Image
            src={avatarSrc}
            alt={name ? `Logo de ${name}` : "Logo client"}
            width={200}
            height={200}
          />
        </div>
        <div className="content">
          <h4>{name}</h4>
          <span>{designation}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonialV3;
