import database from "../firebase/firebase";
import {useState, useEffect} from "react";
//local-server

export default function useDetailFetch(url) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        await database.ref(url).on(
          "value",
          snapshot => {
            setData(snapshot.val());
          },
          e => {
            console.log("error");
            setError(e);
          }
        );
      } catch (e) {
        if (e) setError(e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  return {data, error, loading};
}
