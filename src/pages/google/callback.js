import { useRouter } from "next/router";
import { useEffect } from "react";

const GoogleCallbackPage = () => {
  const router = useRouter();
  const googleCallback = async (payload) => {
    try {
      // open("http://localhost:8000/auth/google");
      const res = await fetch(
        "http://localhost:8000/auth/google/callback" + payload
      );
      const data = await res.json();
      console.log(data);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const payload = location.search;

    if (payload) {
      googleCallback(payload);
    }
  }, []);
  return <></>;
};

export default GoogleCallbackPage;
