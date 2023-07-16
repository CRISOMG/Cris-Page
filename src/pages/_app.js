import Script from "next/script";
import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window) {
      const handleGoogle = async (response) => {
        console.log(response.credential);
        // setLoading(true);
        // fetch(url, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },

        //   body: JSON.stringify({ credential: response.credential }),
        // })
        //   .then((res) => {
        //     setLoading(false);

        //     return res.json();
        //   })
        //   .then((data) => {
        //     if (data?.user) {
        //       localStorage.setItem("user", JSON.stringify(data?.user));
        //       window.location.reload();
        //     }

        //     throw new Error(data?.message || data);
        //   })
        //   .catch((error) => {
        //     setError(error?.message);
        //   });
      };
      window.onload = function () {
        if (window.google) {
          google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_ID,
            callback: handleGoogle,
          });
          google.accounts.id.prompt();
        }
      };
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
      />
      {/* <script src="https://accounts.google.com/gsi/client" async></script> */}
    </>
  );
}

export default MyApp;
