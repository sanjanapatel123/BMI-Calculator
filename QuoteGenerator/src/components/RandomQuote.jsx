import { useState, useEffect } from "react";
import Styles from "./RandomQuote.module.css";
import { IoReload } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";

const RandomQuote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/data");
      const randomQuote =
        response.data[Math.floor(Math.random() * response.data.length)];
      setQuote(randomQuote);
      setLoading(false);
    } catch (err) {
      setError("something went wrong!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleChange = () => {
    fetchData();
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.quote}>{quote.quote}</div>
      <div>
        <div className={Styles.line}></div>
        <div className={Styles.bottom}>
          <div className={Styles.author}>- {quote.author}</div>
          <div className={Styles.icons}>
            <IoReload onClick={handleChange} />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
