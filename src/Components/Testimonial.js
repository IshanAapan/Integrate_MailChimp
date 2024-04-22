import { useMemo } from "react";
import "../css/Testimonial.css";

const Testimonial = ({
  shortTestimonial,
  imageLummiCategoryavatars,
  name1,
  icon,
  icon1,
  icon2,
  icon3,
  icon4,
  propPadding,
  propPadding1,
  propAlignSelf,
  propDisplay,
  propMinWidth,
}) => {
  const testimonialStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const textStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const nameStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propDisplay, propMinWidth]);

  return (
    <div className="testimonial" style={testimonialStyle}>
      <div className="short-testimonial">{shortTestimonial}</div>
      <div className="author">
        <img
          className="image-lummi-categoryavata"
          loading="lazy"
          alt=""
          src={imageLummiCategoryavatars}
        />
        <div className="text" style={textStyle}>
          <div className="name" style={nameStyle}>
            {name1}
          </div>
          <div className="stars">
            <img className="icon1" loading="lazy" alt="" src={icon} />
            <img className="icon2" loading="lazy" alt="" src={icon1} />
            <img className="icon3" loading="lazy" alt="" src={icon2} />
            <img className="icon4" loading="lazy" alt="" src={icon3} />
            <img className="icon5" loading="lazy" alt="" src={icon4} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial