import React, { useState, useEffect } from "react";
import "../component/example1/style.css";

const ImageRender = props => {
  const [src, setSrc] = useState("");
  const [author, setAuthor] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setSrc(props.src);
    setAuthor(props.author);
    setIndex(props.index);
  }, [props.src, props.author, props.index]);

  return (
    <div key={index} className="containner-image">
      <img src={src} alt={author} />
    </div>
  );
};

export default ImageRender;
