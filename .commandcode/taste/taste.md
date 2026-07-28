# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# Code Style
- Use path aliases ($lib, $components, $assets, $content, $styles) instead of relative `../` imports. Confidence: 0.85
- Never use `any` types; use the existing typed interfaces (e.g. `Event` from `$lib/data/events`). Confidence: 0.85
- Server-only modules (anything importing `$env/dynamic/private` or secrets) must live under `src/lib/server/`, not `src/lib/`. Confidence: 0.90
- No `console.log` in production code; gate debug logging behind `if (dev)` from `$app/environment` instead of deleting it. Confidence: 0.80
