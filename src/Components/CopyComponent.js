import { useMemo } from "react";
import "../css/CopyComponent.css";

const CopyComponent = ({
  heading,
  subheading,
  subheading1,
  propLineHeight,
}) => {
  const subheadingStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className="copy-component3">
      <div className="heading4">{heading}</div>
      <div className="item-text1">
        <div className="subheading5">{subheading}</div>
        <h3 className="subheading6" style={subheadingStyle}>
          {subheading1}
        </h3>
      </div>
    </div>
  );
};

export default CopyComponent;