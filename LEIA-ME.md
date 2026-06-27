# Captura de Ideias — PWA

## Instalação via GitHub Pages (recomendado)

### 1. Criar repositório
- Vá em [github.com/new](https://github.com/new)
- Nome: `captura-ideias` (ou o que preferir)
- Marque **Public**
- Clique **Create repository**

### 2. Subir os arquivos
- Clique **uploading an existing file**
- Arraste os 3 arquivos: `index.html`, `sw.js`, `manifest.json`
- Clique **Commit changes**

### 3. Ativar GitHub Pages
- Vá em **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: **main**, pasta **/ (root)**
- Clique **Save**
- Em ~1 minuto estará em: `https://SEU_USUARIO.github.io/captura-ideias/`

### 4. Instalar no Android
- Abra a URL no Chrome
- Toque no menu (3 pontos) → **Adicionar à tela inicial**
- Pronto — vira ícone na home como um app real

## Primeiro uso
1. Abra o app
2. Toque em ⚙️ (engrenagem)
3. Cole sua API key da Anthropic (obtenha em console.anthropic.com)
4. Salve
5. Comece a capturar!

## Funcionalidades
- **Texto**: campo com autofocus, Enter para salvar
- **Voz**: Web Speech API em pt-BR
- **Imagem**: câmera ou galeria (funciona nativamente fora do iframe!)
- **IA**: classificação automática (categoria + tags + resumo)
- **Offline**: Service Worker cacheia o app
- **Persistência**: IndexedDB local
- **Export**: JSON completo para backup

## Arquivos
- `index.html` — App completo (HTML + CSS + JS inline)
- `sw.js` — Service Worker para cache offline
- `manifest.json` — Metadados PWA para instalação
