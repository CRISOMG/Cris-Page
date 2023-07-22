import Script from "next/script";
import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window) {
      window._loginWithGoogle = async () => {
        try {
          window.location.href = "http://localhost:8000/auth/google";
          open("http://localhost:8000/auth/google", "about:blank");

          // open("http://localhost:8000/auth/google");
          // const res = await fetch("http://localhost:8000/auth/google");
          // const data = await res.json();
          // console.log(data);
        } catch (error) {
          console.error(error);
        }
      };

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

      const handleGooglePrompt = (notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          document.cookie = `g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
          google.accounts.id.prompt();
        }
      };
      window.onload = function () {
        if (window.google) {
          google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_ID,
            callback: handleGoogle,
          });
          google.accounts.id.prompt(handleGooglePrompt);
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
