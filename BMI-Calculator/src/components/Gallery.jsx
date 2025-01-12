import React, { useState } from "react";
import Styles from "./Gallery.module.css";
import CloseIcon from "@mui/icons-material/Close";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1736437251499-9b5d6f0a9a53?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
    {
      id: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1735595065393-0a600eb5a18d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      id: 4,
      imgSrc:
        "https://images.unsplash.com/photo-1735641241204-44519d33651b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
    {
      id: 5,
      imgSrc:
        "https://images.unsplash.com/photo-1736079428727-45d8a7d7ea0a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    },
    {
      id: 6,
      imgSrc:
        "https://images.unsplash.com/photo-1735796788550-8fa349e8c59f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempingSrc(imgSrc);
    setModel(true);
  };

  return (
    <div>
      <div className={model ? Styles.modelOpen : Styles.model}>
        <img src={tempingSrc} alt="template" />
        <CloseIcon onClick={() => setModel(false)}></CloseIcon>
      </div>
      <div className={Styles.gallery}>
        {data.map((item) => (
          <div
            key={item.id}
            className={Styles.pics}
            onClick={() => getImg(item.imgSrc)}
          >
            <img
              src={item.imgSrc}
              style={{ width: "100%" }}
              alt="Gallery Image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
