import database from "../firebase/firebase";
import {useState, useEffect} from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        database.ref(url).on(
          "value",
          snapshot => {
            const data = [];
            snapshot.forEach(childSnapshot => {
              //console.log("childSnapshot.key", childSnapshot.key);
              data.push({
                id: childSnapshot.key,
                ...childSnapshot.val(),
              });
            });
            //console.log("childSnapshot.key data", data);
            setData(data);
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
