"""
Genera un MP3 por palabra con ElevenLabs, usando tus voces.
Uso (en tu computadora):
  set ELEVENLABS_API_KEY=tu_clave
  set VOZ_INGLES=id_de_la_voz_inglesa
  set VOZ_COREANO=id_de_la_voz_coreana
  python scripts/generar-audio.py audio/lista.txt
La clave NUNCA se guarda en el repositorio.
"""
import os, re, sys, json, urllib.request

KEY = os.environ.get("ELEVENLABS_API_KEY")
VOCES = {"en": os.environ.get("VOZ_INGLES"), "ko": os.environ.get("VOZ_COREANO")}
if not KEY or not all(VOCES.values()):
    sys.exit("Faltan ELEVENLABS_API_KEY, VOZ_INGLES o VOZ_COREANO.")

def slug(t):
    # Igual que la función slug() de index.html
    return re.sub(r"[^a-z0-9가-힯]+", "-", t.lower()).strip("-")

def generar(texto, idioma):
    carpeta = os.path.join("audio", idioma)
    os.makedirs(carpeta, exist_ok=True)
    ruta = os.path.join(carpeta, slug(texto) + ".mp3")
    body = json.dumps({"text": texto, "model_id": "eleven_multilingual_v2",
                       "voice_settings": {"stability": 0.6, "similarity_boost": 0.8, "speed": 0.8}}).encode()
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{VOCES[idioma]}",
        data=body, method="POST",
        headers={"xi-api-key": KEY, "Content-Type": "application/json", "Accept": "audio/mpeg"})
    with urllib.request.urlopen(req, timeout=60) as r, open(ruta, "wb") as f:
        f.write(r.read())
    print("OK", ruta)

# lista.txt: una línea por palabra, formato  en|Hello  o  ko|안녕하세요
for linea in open(sys.argv[1], encoding="utf-8"):
    linea = linea.strip()
    if not linea or linea.startswith("#"):
        continue
    idioma, texto = linea.split("|", 1)
    generar(texto.strip(), idioma.strip())
