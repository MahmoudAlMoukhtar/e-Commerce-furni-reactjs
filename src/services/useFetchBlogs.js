import {useState, useEffect, useRef} from "react";

// local-server const baseUrl = process.env.REACT_APP_API_BASE_URL;

//hosting server
const baseUrl = "https://e-commerce-furni-reactjs.herokuapp.com/";
console.log(baseUrl);
export default function useFetchBlogs() {
  const isMountedRef = useRef();

  const [blogs, setBlogs] = useState(null);
  const [errorBlogs, setErrorBlogs] = useState(null);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  useEffect(() => {
    isMountedRef.current = true;
    async function init() {
      try {
        const response = await fetch(baseUrl + "blogs");
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          if (isMountedRef.current) setBlogs(json);
        } else {
          throw response;
        }
      } catch (e) {
        if (isMountedRef.current) setErrorBlogs(e);
      } finally {
        if (isMountedRef.current) setLoadingBlogs(false);
      }
    }
    init();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return {blogs, errorBlogs, loadingBlogs};
}
