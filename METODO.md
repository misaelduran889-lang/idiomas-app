# Método de explicación (basado en los videos de referencia)

Qué se toma de los videos, y cómo se aplica en la app. Todo el texto de la app se escribe desde cero; no se copia ningún video.

1. **Pregunta de gancho al inicio.** Cada lección abre con una pregunta corta que despierta curiosidad ("¿Por qué 'Father' no suena como 'Fáder'?").
2. **Piezas que se suman, una por una.** Primero una letra, luego otra, luego la sílaba, luego la palabra. Nunca se muestra todo a la vez.
3. **Reglas dichas en voz alta y con nombre.** "Regla 1: vocal vertical a la derecha". Así el alumno recuerda la regla, no solo el ejemplo.
4. **Nota de boca para sonidos difíciles.** Qué hacer con la lengua, los labios o la garganta, dicho en español cotidiano. Sin símbolos fonéticos.
5. **Pronunciación en español.** Se escribe como se lee, con la sílaba fuerte en MAYÚSCULA.
6. **Reto antes de la respuesta.** El alumno piensa 3 segundos y luego se muestra la respuesta.
7. **Resumen de 3 puntos o menos.** Cierra la lección y deja una sola idea para llevar.
8. **Ritmo corto.** Cada paso es una pantalla. Si un paso tiene más de 2 frases, se divide.

## Estructura de una clase en la app

Cada lección tiene `pasos`, y cada paso tiene `tipo`:

| tipo    | para qué sirve                                   |
|---------|--------------------------------------------------|
| gancho  | pregunta inicial                                  |
| pieza   | una letra, sílaba o parte de palabra             |
| regla   | regla con nombre, con ejemplo grande             |
| boca    | cómo colocar la boca o la lengua                 |
| reto    | pregunta + cuenta regresiva + respuesta          |
| resumen | 1 a 3 puntos para recordar                       |

El paso puede tener `say` (texto a escuchar con el botón de audio).

## Para cada idioma nuevo

Se sigue el mismo orden: sonidos y letras primero, luego sílabas, luego palabras cortas, luego frases. La dificultad sube solo cuando el alumno domina el paso anterior.

## Notas de videos de referencia (pendientes de incorporar)

- **Japonés en 1 minuto (pako.nihongo, 77 s):** gancho "lee por primera vez en japonés". Cada vocal se enseña con un icono visual para recordarla (cruz, pez, sombrero). Las vocales se suman una por una: A, luego AI, luego AIU, luego AIUE, luego AIUEO. Al final muestra la equivalencia "あ = A" en grande. Cierra con "repasa las veces que sea necesario".
- **Idea para la app:** tarjetas de equivalencia ("あ = A"), icono mnemotécnico por palabra, y una sesión que crece sumando elementos.
- **Inglés americano (inglesgratis1, 19 min):** escenas con subtítulos, desglose de frases y pronunciación en español. Ver sección anterior.
- **Cómo hacer que tu cerebro absorba cualquier idioma (@inglesconandreab, 92 s):** gancho sobre el cerebro. La idea central es entender lo que escuchas (entrada comprensible), no memorizar traducciones. Usa imágenes para ideas abstractas (cerebro, agente, viajar) y cita a un investigador (aparentemente Stephen Krashen, por confirmar). Repite mensajes cortos y directos: "aprendes cuando entiendes".
- **Idea para la app:** sesiones de escucha con subtítulos y traducción, donde el alumno entiende la mayoría de las palabras y solo aprende unas pocas nuevas. Cada sesión termina con una imagen mnemotécnica para la idea principal.
- **Todo el inglés que necesitas en 7 imágenes (@losada.english, 22 s):** el video es un resumen de tarjetas de referencia que se pueden guardar. Cada tarjeta tiene un título en inglés, su traducción al español, una tabla corta y un "Tip" al pie. Temas: verbos auxiliares (be, do, have), 12 tiempos, palabras interrogativas, 100 verbos más comunes, verbos modales, conectores y 50 palabras de enlace. El ritmo recomendado es "aprende 10 por día en 10 días".
- **Idea para la app:** un tipo de tarjeta de referencia (tabla + tip) que se pueda guardar, y una meta diaria de 10 palabras para la lista de repaso.
- **Modales en 60 s (@teacherhomero, 60 s):** lista de 7 modales al inicio (should, would, will, can, could, may, might). Cada modal tiene su propia escena, con 2 o 3 ejemplos que usan la misma estructura: modal + verbo, traducción al español y la parte clave resaltada en verde (por ejemplo "-ría" en would). Una flecha roja marca la terminación en español ("estaría", "debería"). Cierra con los modales repetidos en el mismo orden.
- **Idea para la app:** una sesión de gramática por modal con 2 o 3 ejemplos de la misma forma, la parte clave resaltada y un repaso final de la lista completa.
- **Palabras interrogativas (@apuntes.ingles, 21 s):** tabla fija con 30 filas. A la izquierda la pregunta en español (¿Qué?, ¿Cómo?, ¿Dónde?, ¿Cuándo?, ¿Por qué?, ¿Quién?, ¿Cuánto?, ¿Para qué?...). A la derecha el inglés (What, How, Where, When, Why, Who, How much, What for...) con pronunciación escrita en español ("uát", "jáu", "uér", "jáu mách"). No hay narración; se muestra la tabla completa y el mascota aparece al lado.
- **Idea para la app:** tarjeta de referencia en forma de tabla (español | inglés | pronunciación), con la opción de repasarla como juego de emparejamiento.

## Japonés (añadido el 13 nov 2026)

- Mismo método y mismo orden que los otros idiomas: hiragana (vocales, filas K, S, T y N) → primeras palabras → saludos → presentarse → aeropuerto.
- Cada vocal y cada fila llevan un icono para recordarla (あ = persona con los brazos abiertos que dice "aaa").
- **Pronunciación escrita:** en letras latinas leídas como en español, en minúsculas y separadas por sílabas ("kon-ni-chi-ua"). No se marca sílaba fuerte porque en japonés todas duran lo mismo. Las vocales largas se escriben dobles ("kuu-koo"). La guía completa está en el campo `guia` de `IDIOMAS.japones`.
- Cada palabra lleva también `romaji` (escritura oficial en letras latinas). En las preguntas de escribir se acepta el kana o el romaji, porque el teléfono no siempre tiene teclado japonés.
- Llamada con Mateo en japonés (`ESCENAS.japones`). Las palabras clave aceptan varias formas (kana, kanji o romaji), porque el reconocimiento de voz a veces devuelve kanji.
- Audio: MP3 en `audio/ja/` si existe; si no, la voz del teléfono en ja-JP. Si el teléfono no tiene voz japonesa instalada, la app lo avisa en pantalla.
- Pendiente: no hay todavía una página de japonés en Notion. Cuando exista, su contenido se pasa a estas sesiones.
