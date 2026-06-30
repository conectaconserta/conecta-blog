---
title: "MacBook não carrega: cabo, porta USB-C, bateria e SMC"
description: "MacBook não carrega ou aparece 'Sem Carregamento'? Veja como testar cabo, porta USB-C, resetar o SMC e quando é bateria ou placa. Diagnóstico grátis Recife."
pubDate: 2026-06-30
author: "Equipe Conecta"
tags: ["MacBook", "Bateria", "Reparo", "Manutenção", "Apple"]
---

O **MacBook não carrega** e a bateria vai caindo enquanto você trabalha — ou o MacBook já está completamente descarregado e não liga de forma alguma. O cabo está conectado, a tomada funciona com outros aparelhos, mas o ícone de carregamento não aparece, o percentual de bateria não sobe, ou aparece a mensagem "Sem Carregamento" no menu de bateria do macOS.

O problema de carregamento no MacBook pode ter quatro origens diferentes: o cabo, o carregador, a porta USB-C ou MagSafe, e o hardware interno — bateria ou controladora de carga na placa lógica. Identificar qual é o responsável determina se a solução custa R$ 0 (limpeza da porta) ou envolve reparo de placa. E o diagnóstico correto é o que evita trocar peça errada e continuar com o mesmo problema.

Neste artigo você vai entender os diferentes sintomas de falha de carregamento, como testar cada componente da cadeia em ordem, o que é o SMC e como resetá-lo, quando a mensagem "Sem Carregamento" é normal — e quando o problema é hardware que exige reparo físico.

---

## Tipos de falha de carregamento no MacBook: identifique o seu

Cada sintoma aponta para uma parte diferente da cadeia de carregamento. Observe com atenção antes de agir.

### MacBook não liga e não mostra nenhuma reação ao conectar o carregador

Nenhuma luz, nenhum som, tela completamente apagada mesmo com o cabo conectado. Pode ser:
- Bateria completamente descarregada (abaixo de 1%) — precisa de alguns minutos conectado antes de ligar
- Cabo ou carregador com defeito — sem energia chegando ao MacBook
- Porta USB-C ou MagSafe com dano físico impedindo a conexão elétrica
- MacBook com defeito mais sério na placa lógica

### "Sem Carregamento" ou "Not Charging" no menu de bateria

O MacBook está ligado, o cabo está conectado, o ícone de bateria aparece — mas sem o raio de carregamento, e a porcentagem não sobe (ou cai lentamente). O sistema reconhece que há um carregador conectado mas não está aceitando a carga.

Causas comuns: carregador com potência insuficiente para o modelo, recurso de Carregamento Otimizado de Bateria segurando em 80%, SMC com estado incorreto, ou bateria degradada que não aceita carga.

### Carregamento muito lento

O MacBook carrega, mas o processo demora o dobro ou o triplo do tempo normal. Uma carga completa que levaria 2 horas leva 5 ou 6 horas. Isso indica:
- Carregador com wattagem menor que a recomendada para o modelo
- Uso intenso do processador consumindo energia mais rápido do que o carregador entrega
- Porta USB-C com sujeira ou corrosão reduzindo a eficiência da conexão elétrica
- Bateria degradada que aceita carga mas de forma ineficiente

### Ícone de bateria com "X" ou alerta de serviço

O macOS exibe um **"X"** no ícone de bateria ou a mensagem **"Bateria — Serviço Recomendado"** no menu. Isso significa que o macOS detectou degradação significativa da bateria — geralmente abaixo de 80% da capacidade original. A bateria ainda pode funcionar, mas o carregamento se torna irregular.

### Luz do MagSafe não acende (modelos com MagSafe 1, 2 ou 3)

O LED do conector MagSafe deveria acender em âmbar (carregando) ou verde (carregado). Se não acender de forma alguma: cabo danificado, porta com problema ou MacBook sem energia suficiente para acionar o circuito de carregamento.

---

## Diagnóstico em ordem: teste a cadeia do mais simples ao mais complexo

O diagnóstico de carregamento segue uma cadeia lógica. Comece sempre pelo componente mais barato e mais fácil de testar.

### 1. Teste o cabo isoladamente

O cabo é a peça que mais falha — especialmente cabos USB-C de terceiros ou cabos originais com dobras próximas aos conectores. Verifique:
- O cabo tem algum ponto dobrado, amassado ou com desgaste visível na borracha?
- Teste o mesmo cabo em outro dispositivo USB-C (carregador de celular, hub) — funciona?
- Teste um cabo diferente no MacBook — carrega?

Se o problema some ao trocar o cabo, o cabo anterior estava com defeito.

### 2. Teste o carregador com outro dispositivo e outra tomada

Conecte o carregador (sem o MacBook) a outro dispositivo USB-C — um celular, por exemplo. Carrega? Se não, o carregador está com defeito.

Teste também em outra tomada — filtros de linha e estabilizadores antigos podem não entregar tensão adequada para o carregador do MacBook.

### 3. Verifique a wattagem do carregador para o modelo

Cada modelo de MacBook tem uma potência mínima recomendada:

| Modelo | Carregador recomendado |
|---|---|
| MacBook Air 13" (Intel / M1 / M2) | 30W – 45W |
| MacBook Air 15" (M2 / M3) | 45W – 70W |
| MacBook Pro 13" | 61W – 67W |
| MacBook Pro 14" | 96W – 140W |
| MacBook Pro 16" | 140W – 200W |

Usar um carregador de potência menor que o recomendado pode resultar em carregamento muito lento ou "Sem Carregamento" enquanto o MacBook está em uso intenso — o processador consome mais energia do que o carregador entrega.

### 4. Limpe a porta USB-C ou MagSafe

A porta USB-C acumula poeira, fiapos e resíduos que impedem o contato elétrico adequado. Especialmente em Recife, onde o calor e a umidade aumentam a formação de depósitos, portas sujas são uma causa comum de carregamento irregular.

Para limpar com segurança:
- Use um palito de madeira seco para remover fiapos visivelmente presos
- Use ar comprimido em jatos curtos — nunca sopre com a boca (umidade)
- **Nunca use objeto metálico** (clipe, agulha) — risco de curto-circuito nos pinos

Após a limpeza, reconecte o cabo e verifique se o carregamento retomou.

### 5. Verifique o Carregamento Otimizado de Bateria

O macOS tem um recurso chamado **Carregamento Otimizado de Bateria** que aprende sua rotina e mantém a carga em 80% por longos períodos, completando para 100% apenas quando o sistema prevê que você vai usar sem carregador em breve.

Se o MacBook está travado em 80% e não sobe, pode ser esse recurso:

**Menu de Bateria → Preferências de Bateria → desmarque "Carregamento Otimizado de Bateria"**

Teste por algumas horas e veja se a carga passa de 80%.

> **Atenção:** o Carregamento Otimizado existe para prolongar a vida da bateria. Desativá-lo permanentemente acelera a degradação. Use apenas para verificar se é a causa do problema.

---

## Como resetar o SMC do MacBook

O **SMC** (System Management Controller) é o chip responsável por gerenciar o carregamento da bateria, ventiladores, energia e outros sistemas físicos do MacBook. Quando o SMC fica com estado incorreto, pode parar de acionar o carregamento mesmo com tudo funcionando corretamente.

O reset do SMC é um dos passos mais eficazes para resolver "Sem Carregamento" sem causa aparente.

### Apple Silicon (M1, M2, M3, M4) — MacBook Air e Pro desde 2020

Nos modelos com chip Apple Silicon, **não existe procedimento de reset do SMC por teclas**. O equivalente é um reinício normal do macOS — o chip M gerencia essas funções de forma integrada e o reinício limpa qualquer estado incorreto.

Se o MacBook com chip M não está carregando: desligue completamente (não apenas feche a tampa), aguarde 30 segundos desconectado do carregador e ligue novamente.

### Intel com chip T2 (MacBook Pro 2018–2020, MacBook Air 2018–2020)

1. Desligue o MacBook completamente
2. Com o **carregador conectado**, pressione e segure simultaneamente: **Shift direito + Control direito + Option esquerdo + botão de energia**
3. Segure por **10 segundos**
4. Solte todas as teclas
5. Pressione o botão de energia para ligar normalmente

### Intel sem chip T2 (MacBook Pro e Air até 2017)

**Com bateria não removível:**
1. Desligue completamente com carregador conectado
2. Segure: **Shift esquerdo + Control esquerdo + Option esquerdo + botão de energia** por **10 segundos**
3. Solte e ligue normalmente

**Com bateria removível (MacBook Pro até meados de 2012):**
1. Desligue, desconecte o carregador, remova a bateria
2. Segure o botão de energia por **5 segundos**
3. Recoloque a bateria, conecte o carregador e ligue

Após o reset do SMC, conecte o carregador e observe se o carregamento retoma.

---

## Quando o problema é hardware: bateria e placa lógica

Se todos os passos de diagnóstico e o reset do SMC não resolveram, o problema é físico.

### Bateria degradada que não aceita carga

Baterias de lítio do MacBook são projetadas para **1.000 ciclos de carga** mantendo pelo menos 80% da capacidade original. Após esse ponto, a capacidade cai progressivamente — e em casos avançados, a bateria para de aceitar carga de forma consistente.

Para verificar o estado da bateria no macOS:
- Segure **Option** e clique no ícone de bateria na barra de menu — aparece "Normal", "Serviço Recomendado" ou "Substitua Agora"
- Para detalhes: **Sobre Este Mac → Relatório do Sistema → Energia** — veja "Condição" e "Contagem de Ciclos"

Uma bateria com mais de 1.000 ciclos ou com "Substitua Agora" provavelmente não carrega de forma confiável. A troca da bateria resolve o problema.

Se o MacBook já apresentava outros sintomas antes de parar de carregar — lentidão, superaquecimento, desligamentos repentinos —, veja nosso artigo sobre [bateria do MacBook durando pouco](/blog/bateria-macbook-durando-pouco/) para um diagnóstico mais completo da saúde da bateria.

### Controladora de carga com falha na placa lógica

A placa lógica tem circuitos dedicados ao gerenciamento de carga — chips como o CD3217 nos modelos com USB-C. Quando esses componentes falham (por dano por líquido, surge elétrico ou desgaste), o MacBook não inicia o processo de carregamento mesmo com cabo, carregador e bateria funcionais.

Sinais de falha na controladora:
- Nenhum cabo/carregador funciona (descartados como causa)
- A bateria foi trocada e o problema persistiu
- O MacBook teve contato com líquido antes do problema começar
- O SMC reset foi feito e não resolveu

Esse tipo de reparo envolve microssoldagem na placa lógica — substituição dos componentes SMD responsáveis pelo circuito de carga.

### Porta USB-C com pinos danificados

Pinos dobrados ou quebrados dentro da porta USB-C impedem o contato elétrico adequado. Isso acontece especialmente quando o cabo é inserido com força ou em ângulo errado. A porta pode parecer íntegra por fora mas ter dano interno.

Teste: se o MacBook carrega em uma porta USB-C mas não em outra (modelos com múltiplas portas), a porta que não funciona tem dano físico nos pinos ou nos contatos internos.

---

## Erros comuns ao tentar resolver MacBook que não carrega

**Comprar carregador genérico barato como "solução temporária":** carregadores USB-C sem certificação podem não implementar o protocolo USB Power Delivery corretamente, entregando tensão instável que o MacBook rejeita ou que danifica o circuito de carga ao longo do tempo. Use sempre carregadores originais Apple ou certificados por marcas reconhecidas (Anker, Belkin, Apple).

**Trocar o cabo sem testar em outro dispositivo primeiro:** trocar o cabo sem confirmar que o problema está no cabo pode resultar em cabo novo com o mesmo problema. Teste sempre em dois dispositivos diferentes antes de concluir que o cabo é o responsável.

**Resetar o SMC repetidamente esperando que "desta vez funcione":** o SMC reset é um passo de diagnóstico — se não resolveu na primeira tentativa, repetir não vai ajudar. Significa que o problema está em outro componente.

**Ignorar "Serviço Recomendado" na bateria por meses:** a bateria com serviço recomendado deteriora progressivamente. O carregamento fica cada vez mais irregular até parar completamente. Quanto antes a bateria é trocada, mais previsível e seguro o comportamento do MacBook.

**Usar o MacBook apenas no carregador sem nunca usar a bateria:** manter o MacBook sempre plugado em 100% acelera a degradação da bateria. O Carregamento Otimizado existe exatamente para prevenir isso — deixe-o ativado no uso normal.

---

## Reparo de MacBook que não carrega na Conecta Phone

Na **Conecta Phone**, em Recife, realizamos diagnóstico e reparo de MacBook sem carregamento para todos os modelos — do MacBook Air Intel ao MacBook Pro com chip M4, com MagSafe ou USB-C.

O atendimento começa com uma **avaliação gratuita**: testamos o carregamento com cabo e carregador originais, verificamos a condição e os ciclos da bateria, inspecionamos as portas USB-C e MagSafe internamente, e rodamos diagnóstico de placa para identificar falha na controladora de carga — antes de qualquer orçamento.

Os serviços que realizamos para MacBook que não carrega:

- **Troca de bateria** — para baterias com ciclos esgotados ou condição "Substitua Agora"
- **Limpeza e reparo de porta USB-C** — para portas com sujeira acumulada, corrosão ou pinos danificados
- **Substituição de porta USB-C/MagSafe** — para portas com dano físico irreparável
- **Reparo da controladora de carga na placa lógica** — para falha no circuito de gerenciamento de energia por líquido ou surge
- **Diagnóstico e reset de SMC assistido** — para casos resolvíveis sem troca de peça

Atendemos MacBook Air e MacBook Pro de todas as gerações — Intel (2015–2022) e Apple Silicon (M1, M2, M3, M4).

Todos os reparos têm **garantia de 90 dias**. Oferecemos **coleta e entrega em Recife** e parcelamento em **até 6x sem juros**.

Se o seu MacBook não está carregando, entre em contato pelo WhatsApp para agendar a avaliação gratuita — o diagnóstico não tem custo e na maioria dos casos o problema é identificado e resolvido no mesmo dia.

---

📱 **WhatsApp:** (81) 99186-2060  
🚚 **Coleta e entrega** em Recife  
💳 **Parcelamento em até 6x sem juros**  
⭐ **[Mais de 750 avaliações no Google](https://share.google/rktOQ5pgkn5dEPEh1)** — confira e deixe a sua!
