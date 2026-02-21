
-- =============================================
-- 1. PAGE VIEWS - Anonymous analytics tracking
-- =============================================
CREATE TABLE public.page_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  page_path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  duration_seconds INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_page_views_created_at ON public.page_views (created_at DESC);
CREATE INDEX idx_page_views_page_path ON public.page_views (page_path);
CREATE INDEX idx_page_views_session_id ON public.page_views (session_id);

ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts only (visitors tracking)
CREATE POLICY "Allow anonymous page view inserts"
  ON public.page_views FOR INSERT
  TO anon
  WITH CHECK (true);

-- No SELECT/UPDATE/DELETE for anon - admin reads via service role

-- =============================================
-- 2. AUDIO USAGE - Track audio playback events
-- =============================================
CREATE TABLE public.audio_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  article_slug TEXT NOT NULL,
  duration_listened_seconds INTEGER DEFAULT 0,
  total_duration_seconds INTEGER DEFAULT 0,
  playback_speed REAL DEFAULT 1.0,
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_audio_usage_created_at ON public.audio_usage (created_at DESC);
CREATE INDEX idx_audio_usage_article_slug ON public.audio_usage (article_slug);

ALTER TABLE public.audio_usage ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts only
CREATE POLICY "Allow anonymous audio usage inserts"
  ON public.audio_usage FOR INSERT
  TO anon
  WITH CHECK (true);

-- =============================================
-- 3. AUDIO FILES - Metadata for uploaded audio
-- =============================================
CREATE TABLE public.audio_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_slug TEXT NOT NULL UNIQUE,
  file_path TEXT NOT NULL,
  title TEXT,
  duration_seconds INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_audio_files_article_slug ON public.audio_files (article_slug);

ALTER TABLE public.audio_files ENABLE ROW LEVEL SECURITY;

-- Anyone can read audio file metadata (to play audio)
CREATE POLICY "Anyone can read audio files"
  ON public.audio_files FOR SELECT
  TO anon
  USING (true);

-- No INSERT/UPDATE/DELETE for anon - managed via service role only

-- =============================================
-- 4. SITE SESSIONS - Track unique sessions
-- =============================================
CREATE TABLE public.site_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL UNIQUE,
  first_page TEXT,
  total_pages_viewed INTEGER DEFAULT 1,
  total_duration_seconds INTEGER DEFAULT 0,
  device_type TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_active_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_site_sessions_created_at ON public.site_sessions (created_at DESC);
CREATE INDEX idx_site_sessions_session_id ON public.site_sessions (session_id);

ALTER TABLE public.site_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous session inserts"
  ON public.site_sessions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous session updates"
  ON public.site_sessions FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- =============================================
-- 5. STORAGE BUCKET for audio files
-- =============================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('audio-files', 'audio-files', true);

-- Public read access
CREATE POLICY "Public read access for audio files"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'audio-files');

-- No public write - uploads via service role only

-- =============================================
-- 6. TRIGGER for updated_at on audio_files
-- =============================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_audio_files_updated_at
  BEFORE UPDATE ON public.audio_files
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
