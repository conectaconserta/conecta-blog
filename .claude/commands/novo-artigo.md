Crie um novo artigo para o blog da Conecta Phone sobre o tema: $ARGUMENTS

Siga estas instruções exatamente.

## 0. Regras invioláveis — leia antes de escrever

Estas regras vêm do OS (`CLAUDE.md` na raiz do segundo cérebro) e não são negociáveis:

- ❌ **Nunca** escrever "Autorizada Apple", "oficial Apple", "credenciada" (vale igual para Samsung e Motorola). A empresa é **especializada**, não autorizada. Usar o termo errado é falso e é risco jurídico.
- ❌ **Nunca** prometer "peça 100% original" sem qualificar. O padrão é "peça de qualidade equivalente / certificada".
- ❌ **Nunca inventar** preço, prazo, número ou estatística que não esteja no OS. Se faltar o dado, **não publique um placeholder** — ou escreva a seção sem número, ou pergunte antes.
- ✅ **Números padronizados, os únicos permitidos:** +20.000 aparelhos reparados · 4,9★ com **+800** avaliações no Google · desde 2021 · até 6 meses de garantia (3 meses para software) · reparo em até 1 hora na maioria dos casos · até 6x sem juros.
- ✅ Português do Brasil, tom claro, honesto, ágil e acolhedor.

> ⚠️ **Sobre preços:** a tabela de preços real ainda não existe no OS. Enquanto não existir, **não crie tabela de "quanto custa" com valores**. Fale de diagnóstico gratuito, prazo e garantia — que são dados confirmados.

## 1. Frontmatter

O blog é **Astro** e valida o frontmatter por schema (`src/content/config.ts`). Use exatamente estes campos, ou o build quebra:

- `title`: título atrativo e SEO-friendly em português, máximo 60 caracteres, com a palavra-chave no início
- `description`: 150–160 caracteres, com a palavra-chave principal e chamada para ação implícita
- `pubDate`: data de hoje no formato YYYY-MM-DD (sem aspas)
- `author`: "Equipe Conecta"
- `tags`: array de 3–5 tags (exemplos: "iPhone", "Bateria", "Reparo", "Tela", "MacBook", "Emergência")

Campos como `slug`, `categoria`, `meta_description`, `schema` ou `status` **não existem no schema** — não use.

## 2. Abertura — resposta direta (obrigatória)

O artigo começa com um parágrafo de **40 a 60 palavras em negrito** que responde a pergunta do título **imediatamente**, antes de qualquer contexto.

Sem "neste artigo você vai ver". É este bloco que vira featured snippet no Google e que ChatGPT, Gemini e Perplexity extraem como resposta.

## 3. Conteúdo — mínimo 1.500 palavras

Escreva em português brasileiro, com no mínimo 1.500 palavras. Desenvolva cada seção com profundidade.

### Estrutura

- **4–7 seções com `##`**, cada uma com 200–300 palavras
- **Os `##` devem ser perguntas, escritas como a pessoa digita** ("Por que o iPhone não carrega?", "Quanto tempo dura a bateria?") — não headings genéricos como "Introdução" ou "Conclusão"
- Cobrir: sintomas, causas técnicas, o que testar em casa, quando levar na assistência, como escolher onde consertar
- Usar `###` para subtópicos dentro das seções maiores
- **Pelo menos uma tabela** — LLM extrai tabela muito melhor que parágrafo corrido. A tabela "sintoma → gravidade → ação" funciona muito bem em artigos de defeito
- Listas numeradas e com marcadores, **negrito** em termos-chave, blockquote para alertas
- Parágrafos curtos, de 3 a 5 linhas
- Sinal de experiência real: "Em mais de 20 mil aparelhos reparados, o que mais vemos é…"
- Tom técnico mas acessível, para usuários comuns em Recife/PE

### Seção sobre a Conecta Phone (~200 palavras)

Perto do fim, antes do FAQ. Diferenciais, prazo, garantia, coleta e entrega. Curta e concreta.

### FAQ (obrigatório)

Fechar com `## Perguntas frequentes`: 5 a 7 perguntas, cada resposta em 2 a 3 linhas. É o que mais gera citação por IA e rich result no Google.

## 4. SEO

- Palavra-chave principal no título, nos primeiros 100 palavras e em pelo menos 2 headers `##`
- Palavras-chave secundárias ao longo do texto, naturalmente
- SEO local: "Recife", "Pina", "Boa Viagem" nos títulos e headings quando fizer sentido
- **3 a 5 links internos** para artigos que **existem de verdade**, no formato `[texto](/blog/slug-do-artigo/)`

> ⚠️ **Confira os slugs antes de linkar.** Rode `ls src/content/blog/` e use apenas slugs reais. Link interno quebrado é erro que vai para produção.

## 5. Rodapé obrigatório

Incluir este bloco exato ao final, após o FAQ:

---

📱 **WhatsApp:** (81) 99186-2060  
📍 **Av. Antônio de Góes, 14** — Pina, Recife/PE  
🚚 **Coleta e entrega** em Recife  
💳 **Parcelamento em até 6x sem juros**  
⭐ **[Mais de 800 avaliações no Google](https://share.google/rktOQ5pgkn5dEPEh1)** — confira e deixe a sua!

## 6. Nome do arquivo

Kebab-case, curto e descritivo, baseado no título.

Exemplos:
- "Tela do iPhone trincada? Saiba o que fazer" → `tela-iphone-trincada.md`
- "Bateria do Samsung descarregando rápido" → `bateria-samsung-descarregando.md`

Salvar em `src/content/blog/<nome-do-arquivo>.md`.

## 7. Validar antes de entregar

Rode o build e confirme que passa:

```
npm run build
```

Se o build falhar, o erro quase sempre é frontmatter fora do schema (seção 1). Corrija e rode de novo.

Confirme também que a página foi gerada:

```
ls dist/blog/<nome-do-arquivo>/
```

## 8. Publicar

Só depois do build passar. O projeto já está linkado à Vercel:

```
npx vercel --prod --yes
```

> O `.npmrc` do projeto força `script-shell=bash`. **Rode pelo Git Bash**, não pelo PowerShell — no PowerShell o npx falha com `spawn bash ENOENT`.

Depois do deploy, verifique que subiu de fato:

```
curl -s -o /dev/null -w "%{http_code}\n" https://conecta-blog.vercel.app/blog/<nome-do-arquivo>/
```

Deve retornar **200**. Informe ao usuário a URL final e o resultado da verificação.
