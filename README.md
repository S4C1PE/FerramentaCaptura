# FerramentaCaptura — Captura de Ideias

Para esvaziar a mente: um PWA pessoal de captura rápida de ideias (texto, voz e
foto de caderno) com classificação automática por IA, organizado segundo
princípios GTD. Roda 100% no cliente, sem backend — a chave da API Anthropic
fica apenas no dispositivo (IndexedDB).

## Arquivos
- `index.html` — app completo (HTML + CSS + JS inline)
- `sw.js` — Service Worker (cache offline)
- `manifest.json` — metadados PWA para instalação

## Instalação e uso
Veja **[LEIA-ME.md](./LEIA-ME.md)** para o passo a passo completo (GitHub Pages,
instalação no Android e configuração da API key).

## Deploy (GitHub Pages)
Habilite em **Settings → Pages → Deploy from a branch → `main` / root**.
Em ~1 minuto o app fica disponível em:

  https://s4c1pe.github.io/FerramentaCaptura/
