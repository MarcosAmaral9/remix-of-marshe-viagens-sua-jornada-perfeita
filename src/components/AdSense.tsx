import { useEffect, useRef } from "react";

interface AdSenseProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  responsive?: boolean;
  className?: string;
}

const AdSense = ({ slot, format = "auto", responsive = true, className = "" }: AdSenseProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
      pushed.current = true;
    } catch (e) {
      // AdSense not loaded
    }
  }, []);

  return (
    <div className={`ad-container my-8 text-center ${className}`} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4907992121422514"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};

export default AdSense;
