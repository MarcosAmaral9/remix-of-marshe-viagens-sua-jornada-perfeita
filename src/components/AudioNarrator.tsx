import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, Volume2, Loader2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface AudioNarratorProps {
  text: string;
  title: string;
  articleSlug?: string;
}

const SPEED_OPTIONS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

// Map slugs to local audio files (public/audio/)
// 2 files too large for local storage use remote URLs
const AUDIO_MAP: Record<string, string> = {
  "como-fazer-mala-viagem-praia": "/audio/como-fazer-mala-viagem-praia.mp3",
  "dicas-viajar-com-criancas-sem-estresse": "/audio/dicas-viajar-com-criancas-sem-estresse.mp3",
  "documentos-necessarios-viagem-nacional": "/audio/documentos-necessarios-viagem-nacional.mp3",
  "economizar-viagem-nordeste-dicas": "/audio/economizar-viagem-nordeste-dicas.mp3",
  "guia-completo-fortaleza-ce": "/audio/guia-completo-fortaleza-ce.mp3",
  "guia-completo-porto-de-galinhas": "/audio/guia-completo-porto-de-galinhas.mp3",
  "guia-maceio-praias-piscinas-naturais": "/audio/guia-maceio-praias-piscinas-naturais.mp3",
  "guia-natal-praias-dunas-gastronomia": "/audio/guia-natal-praias-dunas-gastronomia.mp3",
  "guia-salvador-pelourinho-praias": "/audio/guia-salvador-pelourinho-praias.mp3",
  "melhor-epoca-viajar-maceio": "/audio/melhor-epoca-viajar-maceio.mp3",
  "pacotes-baratos-nordeste-2026": "https://ejafmqzoiwqpeafysarw.supabase.co/storage/v1/object/public/audio-files/pacotes-baratos-nordeste.mp3",
  "quanto-custa-viajar-nordeste-2026": "https://ejafmqzoiwqpeafysarw.supabase.co/storage/v1/object/public/audio-files/custo-viagem-nordeste.mp3",
  "roteiro-3-dias-cabo-santo-agostinho": "/audio/roteiro-3-dias-cabo-santo-agostinho.mp3",
  "roteiro-4-dias-joao-pessoa-litoral-sul": "/audio/roteiro-4-dias-joao-pessoa-litoral-sul.mp3",
  "roteiro-5-dias-foz-do-iguacu": "/audio/roteiro-5-dias-foz-do-iguacu.mp3",
  "roteiro-6-dias-porto-seguro-arraial-trancoso": "/audio/roteiro-6-dias-porto-seguro-arraial-trancoso.mp3",
  "roteiro-7-dias-gramado-canela": "/audio/roteiro-7-dias-gramado-canela.mp3",
  "seguro-viagem-vale-a-pena-contratar": "/audio/seguro-viagem-vale-a-pena-contratar.mp3",
};

const AudioNarrator = ({ text, title, articleSlug }: AudioNarratorProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [speed, setSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const speedMenuRef = useRef<HTMLDivElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  // Close speed menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (speedMenuRef.current && !speedMenuRef.current.contains(e.target as Node)) {
        setShowSpeedMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Register Media Session for lock screen controls
  const registerMediaSession = useCallback((audio: HTMLAudioElement) => {
    if (!("mediaSession" in navigator)) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title,
      artist: "Marshe Viagens",
      album: "Blog Marshe Viagens",
    });

    navigator.mediaSession.setActionHandler("play", () => {
      audio.play();
      setIsPlaying(true);
    });
    navigator.mediaSession.setActionHandler("pause", () => {
      audio.pause();
      setIsPlaying(false);
    });
    navigator.mediaSession.setActionHandler("stop", () => {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    });
  }, [title]);

  const setupAudio = useCallback((url: string) => {
    const audio = new Audio(url);
    audioRef.current = audio;
    audio.playbackRate = speed;

    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));
    audio.addEventListener("timeupdate", () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    });
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setProgress(0);
      if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "none";
    });
    audio.addEventListener("pause", () => {
      setIsPlaying(false);
      if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "paused";
    });
    audio.addEventListener("play", () => {
      setIsPlaying(true);
      if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "playing";
    });

    registerMediaSession(audio);
    return audio;
  }, [speed, registerMediaSession]);

  const fetchAndPlay = useCallback(async () => {
    setIsLoading(true);
    try {
      if (!articleSlug || !AUDIO_MAP[articleSlug]) {
        toast.error("Áudio ainda não disponível para este artigo.");
        setIsLoading(false);
        return;
      }

      const url = AUDIO_MAP[articleSlug];
      setAudioUrl(url);
      const audio = setupAudio(url);
      playPromiseRef.current = audio.play();
      try { await playPromiseRef.current; } catch (e) { /* interrupted */ }
      setIsPlaying(!audio.paused);
    } catch (err) {
      console.error(err);
      toast.error("Erro ao carregar narração.");
    } finally {
      setIsLoading(false);
    }
  }, [articleSlug, setupAudio]);

  const togglePlay = async () => {
    if (!audioRef.current) {
      fetchAndPlay();
      return;
    }
    if (isPlaying) {
      if (playPromiseRef.current) {
        try { await playPromiseRef.current; } catch (e) { /* interrupted */ }
      }
      audioRef.current.pause();
    } else {
      playPromiseRef.current = audioRef.current.play();
      try { await playPromiseRef.current; } catch (e) { /* interrupted */ }
    }
  };

  const changeSpeed = (newSpeed: number) => {
    setSpeed(newSpeed);
    if (audioRef.current) audioRef.current.playbackRate = newSpeed;
    setShowSpeedMenu(false);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current || !duration) return;
    const newTime = (Number(e.target.value) / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(Number(e.target.value));
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/20">
      <Button variant="default" size="sm" onClick={togglePlay} disabled={isLoading} className="gap-2 shrink-0">
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        {isLoading ? "Carregando..." : isPlaying ? "Pausar" : "Ouvir Artigo"}
        {!isLoading && !isPlaying && <Volume2 className="w-4 h-4 opacity-60" />}
      </Button>

      {audioUrl && (
        <div className="flex flex-1 items-center gap-3 w-full sm:w-auto min-w-0">
          <span className="text-xs text-muted-foreground shrink-0 tabular-nums">
            {formatTime((progress / 100) * duration)}
          </span>
          <div className="relative flex-1 h-1.5 rounded-full bg-muted group cursor-pointer">
            <div className="absolute inset-y-0 left-0 bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} />
            <input type="range" min={0} max={100} step={0.1} value={progress} onChange={handleSeek} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" aria-label="Progresso da narração" />
          </div>
          <span className="text-xs text-muted-foreground shrink-0 tabular-nums">{formatTime(duration)}</span>
          <div className="relative" ref={speedMenuRef}>
            <button onClick={() => setShowSpeedMenu((p) => !p)} className="flex items-center gap-0.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors bg-muted px-2 py-1 rounded-md" aria-label="Velocidade de reprodução">
              {speed === 1 ? "1×" : `${speed}×`}
              <ChevronDown className="w-3 h-3" />
            </button>
            {showSpeedMenu && (
              <div className="absolute bottom-full right-0 mb-1 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50 py-1 min-w-[72px]">
                {SPEED_OPTIONS.map((s) => (
                  <button key={s} onClick={() => changeSpeed(s)} className={`w-full text-left px-3 py-1.5 text-sm transition-colors ${s === speed ? "bg-primary text-primary-foreground font-semibold" : "text-foreground hover:bg-muted"}`}>
                    {s === 1 ? "Normal" : `${s}×`}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioNarrator;
