import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const getSessionId = (): string => {
  let id = sessionStorage.getItem("marshe_session_id");
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem("marshe_session_id", id);
  }
  return id;
};

const getDeviceType = (): string => {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

export const useAnalytics = () => {
  const location = useLocation();
  const pageEnteredAt = useRef<number>(Date.now());
  const lastPath = useRef<string>("");

  useEffect(() => {
    const sessionId = getSessionId();

    // Track session on first load
    supabase
      .from("site_sessions")
      .upsert(
        {
          session_id: sessionId,
          first_page: location.pathname,
          device_type: getDeviceType(),
          last_active_at: new Date().toISOString(),
        },
        { onConflict: "session_id" }
      )
      .then();
  }, []);

  useEffect(() => {
    const sessionId = getSessionId();
    const now = Date.now();

    // Record duration for previous page
    if (lastPath.current && lastPath.current !== location.pathname) {
      const durationSeconds = Math.round((now - pageEnteredAt.current) / 1000);
      if (durationSeconds > 0 && durationSeconds < 3600) {
        supabase
          .from("page_views")
          .insert({
            session_id: sessionId,
            page_path: lastPath.current,
            referrer: document.referrer || null,
            user_agent: navigator.userAgent,
            duration_seconds: durationSeconds,
          })
          .then();
      }
    }

    // Record current page entry
    pageEnteredAt.current = now;
    lastPath.current = location.pathname;

    // Handle page unload - send final page view
    const handleUnload = () => {
      const duration = Math.round((Date.now() - pageEnteredAt.current) / 1000);
      if (duration > 0 && duration < 3600) {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/page_views`;
        const apiKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        const body = JSON.stringify({
          session_id: sessionId,
          page_path: location.pathname,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent,
          duration_seconds: duration,
        });

        // sendBeacon with headers via Blob
        const blob = new Blob([body], { type: "application/json" });
        navigator.sendBeacon(
          `${url}?apikey=${apiKey}`,
          blob
        );
      }
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [location.pathname]);
};

export const trackAudioUsage = async (data: {
  articleSlug: string;
  durationListened: number;
  totalDuration: number;
  playbackSpeed: number;
  completed: boolean;
}) => {
  const sessionId = getSessionId();
  await supabase.from("audio_usage").insert({
    session_id: sessionId,
    article_slug: data.articleSlug,
    duration_listened_seconds: Math.round(data.durationListened),
    total_duration_seconds: Math.round(data.totalDuration),
    playback_speed: data.playbackSpeed,
    completed: data.completed,
  });
};
