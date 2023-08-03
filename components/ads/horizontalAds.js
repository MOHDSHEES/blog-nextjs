import { useEffect } from "react";

const HorizontalAds = (props) => {
  useEffect(() => {
    const pushAd = () => {
      try {
        const adsbygoogle = window.adsbygoogle;
        console.log({ adsbygoogle });
        adsbygoogle.push({});
      } catch (e) {
        console.error(e);
      }
    };

    let interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if (window.adsbygoogle) {
        pushAd();
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval);
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "block",
        overflow: "hidden",
      }}
      data-ad-client="ca-pub-2361244068228403"
      {...props}
    />
  );
};
export default HorizontalAds;
