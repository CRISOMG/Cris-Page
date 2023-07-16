import Script from "next/script";
import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window) {
      const handleGoogle = async (response) => {
        try {
          const { credential: token } = response;
          const res = await fetch("http://localhost:8000/auth/google-token", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await res.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
      window.onload = function () {
        if (window.google) {
          google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_ID,
            callback: handleGoogle,
          });
          google.accounts.id.prompt((notification) => {
            if (
              notification.isNotDisplayed() ||
              notification.isSkippedMoment()
            ) {
              document.cookie = `g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
              google.accounts.id.prompt();
            }
          });
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
