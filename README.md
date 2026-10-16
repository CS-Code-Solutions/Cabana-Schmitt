# Cabana Schmitt – Vista das Estrelas

Site responsivo em React + Vite, com visual premium e romântico.

## Requisitos
- Node.js 18 ou superior
- npm

## Rodar localmente
```bash
npm install
npm run dev
```
O Vite mostrará o endereço local no terminal.

## Gerar versão de produção
```bash
npm run build
npm run preview
```
A versão pronta para hospedagem será criada na pasta `dist`.

## Antes de publicar
1. **Fotos:** substituir as imagens ilustrativas do Unsplash pelas fotos reais autorizadas da cabana. A galeria informa no próprio site que as imagens são ilustrativas.
2. **WhatsApp:** confirmar com o anfitrião se o número `5551996105590` está correto e se deve ser usado para reservas. Atualizar `WHATSAPP_NUMBER` no início de `src/App.jsx`.
3. **Airbnb:** confirmar se o link do anúncio continua correto.
4. **Avaliações:** conferir os textos e dados diretamente no anúncio antes da publicação.
5. **Localização e comodidades:** confirmar detalhes, distâncias e regras para animais com o anfitrião.
6. **Marca:** o monograma “CS” é apenas provisório; substituir pelo logotipo oficial, caso exista.

## Recursos
- Layout adaptado para celular, tablet e desktop
- Navegação responsiva
- Galeria com visualização ampliada
- Links para Airbnb e WhatsApp
- Seções de experiência, comodidades, avaliações e localização
- Metadados básicos para compartilhamento e buscadores

As imagens externas exigem conexão com a internet. O site não faz reservas nem verifica disponibilidade diretamente; esses passos são realizados pelo Airbnb ou pelo contato via WhatsApp.