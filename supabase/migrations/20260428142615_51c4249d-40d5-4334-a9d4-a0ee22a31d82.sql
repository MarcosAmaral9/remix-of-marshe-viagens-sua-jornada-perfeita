-- Bloqueia leitura pública das sessões de visitantes (vazava IDs/dispositivos/horários de TODOS os visitantes)
DROP POLICY IF EXISTS "Allow anonymous session selects" ON public.site_sessions;

-- Restringe UPDATE: só permite atualizar a própria sessão informada via header (impede que um visitante altere registros de outros)
DROP POLICY IF EXISTS "Allow anonymous session updates" ON public.site_sessions;
CREATE POLICY "Anon updates own session only"
ON public.site_sessions
FOR UPDATE
TO anon
USING (session_id = current_setting('request.headers', true)::json ->> 'x-session-id')
WITH CHECK (session_id = current_setting('request.headers', true)::json ->> 'x-session-id');

-- Bloqueia listagem do bucket público "audio-files" (mantém leitura por path direto, mas impede listar todos os arquivos)
DROP POLICY IF EXISTS "Public read access for audio files" ON storage.objects;
CREATE POLICY "Public read individual audio files"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'audio-files' AND name IS NOT NULL);

-- Marca o bucket como não-listável publicamente (mantém public=true para servir arquivos via URL direta)
UPDATE storage.buckets SET public = true WHERE id = 'audio-files';