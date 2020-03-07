import React, { useState, useEffect } from "react";
import "./style.css";
import Images from "../../render/image";

const ShowImages = props => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    setValue(props.dataImages ? props.dataImages : []);
  }, [props.dataImages]);

  return (
    <div className="containner">
      <div className="containner-im">
        {value.map((item, index) => {
          return (
            <Images
              src={item.download_url}
              author={item.author}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowImages;
