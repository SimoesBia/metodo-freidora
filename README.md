# Método Freidora de Aire Saludable

Página de vendas (landing page) desenvolvida do zero para divulgar e vender um produto digital de receitas para air fryer. Criei o projeto para uso real em campanhas de marketing digital, cuidando da estrutura, do design, do desempenho e da integração com ferramentas de rastreamento e checkout.

🔗 **Página online:** https://simoesbia.github.io/metodo-freidora/

> O conteúdo da página está em espanhol, pois o público-alvo da campanha é hispanofalante.

---

## Sobre o projeto

Uma página de vendas precisa guiar o visitante da atenção até a decisão de compra. A estrutura segue essa lógica, em seções que respondem às dúvidas do público na ordem em que elas surgem:

1. **Barra de urgência e Hero:** promessa principal, microbenefícios e primeiro botão de ação
2. **Benefícios:** cards com imagem explicando as vantagens do método
3. **O que você vai aprender:** categorias de receitas (café da manhã, almoço, snacks e sobremesas)
4. **Depoimentos:** prints de conversas de clientes como prova social
5. **Bônus:** ofertas adicionais com preço de referência e destaque visual
6. **Perguntas frequentes:** accordion interativo para quebrar objeções
7. **CTA final:** oferta, preço e botão para o checkout, com selo de compra segura
8. **Rodapé:** direitos e aviso legal

## Destaques técnicos

- **Performance em primeiro lugar:** CSS crítico embutido no `<head>` para a primeira dobra carregar de imediato, e demais estilos carregados sem bloquear a renderização
- **Imagem principal com `preload`** e `fetchpriority="high"` para melhorar o LCP
- **Imagens em WebP** com `loading="lazy"` nas seções abaixo da dobra e dimensões definidas para evitar mudanças de layout
- **Design responsivo:** layout em grid que se adapta de desktop a celular, com botões de largura total em telas pequenas
- **Animações em CSS e JavaScript:** entrada do hero, botão com efeito de pulso e revelação dos elementos ao rolar a página com `IntersectionObserver`
- **FAQ em accordion** feito com JavaScript puro, sem bibliotecas
- **Fallback de imagens:** se alguma imagem falhar ao carregar, um placeholder é exibido
- **Rastreamento de marketing:** integração com Meta Pixel e Utmify para acompanhar visitas e origem do tráfego
- **Checkout externo:** botão de compra direcionado a uma plataforma de pagamentos segura

## Tecnologias

| Área | Uso |
| --- | --- |
| HTML5 | Estrutura semântica da página |
| CSS3 | Layout com Grid e Flexbox, animações, design responsivo |
| JavaScript (puro) | Accordion do FAQ e animações ao rolar |
| Google Fonts | Tipografia Montserrat |
| GitHub Pages | Hospedagem e publicação |

## Estrutura do repositório

```
metodo-freidora/
├── index.html      # página principal (estrutura, CSS crítico e scripts)
├── style.css       # estilos das demais seções
├── script.js
├── img/            # imagens otimizadas em WebP
└── README.md
```

## Como visualizar

**Online:** acesse o link da página no topo deste README.

**Localmente:**

```bash
git clone https://github.com/SimoesBia/metodo-freidora.git
cd metodo-freidora
```

Depois, abra o arquivo `index.html` no navegador. Não é necessário instalar nada.

## Publicação

A página é publicada pelo **GitHub Pages** a partir da branch principal do repositório. Qualquer alteração enviada para ela atualiza a versão online.

## Aprendizados

- Estruturar uma página pensando na jornada de quem vai comprar
- Otimizar carregamento e desempenho (CSS crítico, preload, lazy loading, WebP)
- Integrar ferramentas de rastreamento e checkout em um projeto real
- Construir interações com JavaScript puro
- Unir desenvolvimento web e marketing digital

## Autora

**Bruna Beatriz** · [@SimoesBia](https://github.com/SimoesBia)

