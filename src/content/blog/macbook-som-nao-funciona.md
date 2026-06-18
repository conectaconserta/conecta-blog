---
title: "MacBook sem som: causas e como resolver"
description: "MacBook com som não funciona? Veja as causas por modelo, como reiniciar o Core Audio, quando é hardware e onde reparar em Recife. Diagnóstico grátis."
pubDate: 2026-06-18
author: "Equipe Conecta"
tags: ["MacBook", "Reparo", "Manutenção", "Apple", "Áudio"]
---

O **MacBook com som não funciona** é um problema que aparece de formas diferentes: às vezes o volume some do nada após uma atualização do macOS, às vezes os alto-falantes param de funcionar mas o fone de ouvido continua, ou o som fica distorcido e metálico — especialmente nos modelos de 2016 a 2019 que têm histórico documentado de falha de alto-falante. Em qualquer um desses casos, a primeira dúvida é sempre a mesma: é software ou hardware?

A boa notícia é que boa parte dos problemas de som no MacBook tem origem em software — configurações de saída de áudio incorretas, processo de áudio travado ou conflito após atualização do macOS. Esses casos são resolvíveis em minutos sem nenhuma peça ou reparo físico. Mas há situações em que o problema é hardware: alto-falante danificado por líquido, cabo flex rompido ou membrana queimada — e aí o caminho é diferente.

Neste artigo você vai entender os tipos de falha de som no MacBook, como diagnosticar se é software ou hardware passo a passo, quais modelos têm falhas conhecidas nos alto-falantes, o que não fazer — e quando é hora de levar à assistência em Recife.

---

## Tipos de falha de som no MacBook: identifique o seu

Antes de qualquer diagnóstico, é importante identificar exatamente qual tipo de problema de som você está enfrentando. Cada sintoma aponta para causas diferentes.

### Sem som algum — alto-falante e fone

O MacBook não emite nenhum som nem pelos alto-falantes internos nem por fone de ouvido ou dispositivo Bluetooth. O ícone de volume na barra de menu pode estar presente, mas o áudio simplesmente não sai. Esse sintoma geralmente aponta para o processo de áudio do sistema (**Core Audio**) travado ou corrompido — e normalmente se resolve com um restart do processo ou do sistema.

### Sem som pelos alto-falantes, mas fone funciona

O fone de ouvido conectado na entrada P2 ou USB-C funciona normalmente, mas os alto-falantes internos não emitem som. Pode ser:
- O macOS ficou "preso" na saída de fone mesmo após desconectar
- Falha física nos alto-falantes internos
- Dano por líquido que atingiu o módulo de áudio interno

### Som distorcido, estourado ou metálico

Os alto-falantes emitem som, mas com qualidade claramente degradada — distorção em volumes médios, rangido ou chiado em frequências graves, som metálico ao reproduzir vozes. Esse é o sintoma mais característico da **falha conhecida nos alto-falantes de MacBook Pro de 2016 a 2019**. Nesse caso, é quase certamente hardware.

### Volume travado ou ícone de volume acinzentado

O ícone de volume na barra de menu está acinzentado e não responde. Isso geralmente indica que o macOS detectou um dispositivo de áudio externo conectado (como um adaptador ou DAC USB) e está direcionando o áudio para ele — mesmo que você não veja nada conectado.

### Som sumindo intermitentemente

Funciona por alguns minutos, some, volta. Pode ser cabo flex interno com mau contato, problema de temperatura (o cabo flex próximo aos alto-falantes nos MacBook Pro afetados esquenta e perde contato), ou conflito de driver de áudio com um app específico.

---

## Diagnóstico por software: o que fazer primeiro

Antes de concluir que é hardware, siga estes passos em ordem. A maioria dos casos de som que some do nada é resolvida aqui.

### 1. Verifique as configurações de saída de áudio

Vá em **Preferências do Sistema → Som → Saída** (no macOS Ventura em diante: **Ajustes do Sistema → Som**). Verifique se a saída selecionada é **Alto-falantes internos**. Se estiver selecionado outro dispositivo (HDMI, USB, AirPlay), troque para os alto-falantes internos.

Se **Alto-falantes internos não aparecer na lista**, isso é um sinal importante: o macOS não está reconhecendo o hardware de áudio interno — pode ser problema de driver (resolvível) ou hardware físico (requer reparo).

### 2. Reinicie o processo Core Audio

O **Core Audio** é o processo do macOS responsável por toda saída de áudio. Quando trava, leva o som junto. Para reiniciar:

- Abra o **Terminal** (em Aplicativos → Utilitários)
- Digite o comando abaixo e pressione Enter:

```
sudo killall coreaudiod
```

- Digite sua senha de administrador quando solicitado

O processo reinicia automaticamente em poucos segundos. Teste o som. Esse comando resolve a maioria dos casos de som que some após atualização do macOS ou após acordar do modo de espera.

### 3. Reinicie o Mac completamente

Se o killall coreaudiod não resolveu, um reinício completo do sistema muitas vezes resolve o que o killall não conseguiu — especialmente se havia um app de áudio aberto (DAW, Zoom, Discord) que estava travando o Core Audio.

### 4. Redefina o NVRAM / PRAM

A NVRAM armazena configurações de volume e saída de áudio. Redefinir pode corrigir comportamentos de áudio anômalos:

- **Macs com Intel:** desligue o Mac, ligue e imediatamente pressione e segure **Option + Command + P + R** por 20 segundos
- **Macs com Apple Silicon (M1, M2, M3, M4):** a NVRAM é gerenciada de forma diferente — um simples reinício normal tem o mesmo efeito. Não existe o procedimento de teclas para Apple Silicon.

### 5. Teste em outro usuário do macOS

Crie um usuário novo temporário em **Preferências do Sistema → Usuários e Grupos** e teste o som nesse perfil. Se funcionar no perfil novo mas não no seu, o problema está em uma configuração ou arquivo de preferência corrompido no seu perfil de usuário — não no hardware.

> **Se todos esses passos foram feitos e o som continua não funcionando, o problema provavelmente é hardware.** Siga para a próxima seção para entender o que pode ter falhado fisicamente.

---

## MacBook Pro 2016–2019: a falha conhecida nos alto-falantes

Os modelos **MacBook Pro de 2016, 2017, 2018 e 2019** têm um histórico documentado de falha nos alto-falantes internos — especialmente nos alto-falantes dos graves (woofer), que ficam nas laterais do teclado, próximos ao conector de força.

### Por que esses modelos falham

O design desses MacBook Pro posiciona os alto-falantes em um compartimento que fica exposto ao calor gerado pela bateria e pelo processador. Com o uso ao longo do tempo, o adesivo que veda o compartimento dos alto-falantes se deteriora, a membrana perde rigidez e começa a distorcer — especialmente nas frequências graves, que exigem mais excursão da membrana.

O resultado é o característico som distorcido, metálico ou "estourado" que aparece gradualmente, primeiro em volumes altos, depois até em volumes moderados.

### Modelos mais afetados

- **MacBook Pro 13" 2016 e 2017** (Touch Bar e sem Touch Bar)
- **MacBook Pro 15" 2016 e 2017**
- **MacBook Pro 13" e 15" 2018 e 2019**

A Apple reconheceu parcialmente o problema e em alguns países ofereceu reparo gratuito para modelos específicos dentro de determinado prazo. No Brasil, o programa de reparo foi limitado. Hoje, com esses modelos fora da garantia estendida, o reparo é por conta do usuário.

### O que acontece se ignorar

Continuar usando com os alto-falantes distorcidos não causa dano adicional ao hardware, mas a qualidade de som se deteriora progressivamente. A membrana danificada não se recupera sozinha — o reparo é sempre troca dos módulos de alto-falante.

---

## Outras causas de hardware para som não funcionar

Além da falha de membrana dos modelos 2016–2019, existem outras causas físicas para o som parar de funcionar no MacBook.

### Dano por líquido

É a causa mais comum de falha total de som — especialmente quando o MacBook entrou em contato com líquido que escorreu pelo teclado. O líquido atinge a placa lógica e pode corroer o chip de controle de áudio ou os circuitos de amplificação que alimentam os alto-falantes. Nesse caso, o macOS pode mostrar "Alto-falantes internos" nas configurações mas sem nenhum som sair.

Se o MacBook teve contato com líquido em algum momento — mesmo que tenha "funcionado depois" — e agora o som parou, a corrosão pode ter chegado ao circuito de áudio meses depois. Veja nosso artigo sobre [MacBook superaquecendo](/blog/macbook-superaquecendo/) para entender como o dano interno progride.

### Cabo flex rompido ou com mau contato

Os alto-falantes do MacBook são conectados à placa lógica por cabos flex. Em MacBooks que passaram por reparos anteriores, quedas ou pressão excessiva na tampa, esses cabos podem ter mau contato ou ruptura parcial. O sintoma típico é som que funciona intermitentemente ou que some quando o MacBook é inclinado.

### Chip de áudio danificado na placa lógica

Em casos mais sérios — especialmente pós-dano por líquido —, o próprio chip de codec de áudio na placa lógica falha. Nesse caso, o macOS não reconhece mais o hardware de áudio e a entrada **Alto-falantes internos** desaparece completamente das opções de saída. O reparo requer microssoldagem na placa lógica.

---

## O que não fazer quando o MacBook fica sem som

**Não instale aplicativos de "reparo de áudio" de terceiros:** ferramentas como Sound Booster ou EQ de terceiros frequentemente conflitam com o Core Audio do macOS e podem piorar o problema ou criar instabilidade no sistema. O macOS tem seu próprio sistema de áudio robusto — não precisa de complemento.

**Não atualize o macOS tentando "resolver" o problema de som:** atualização de sistema operacional raramente resolve problemas de hardware. E em alguns casos, pode introduzir incompatibilidades temporárias com drivers de áudio. Só atualize se a versão atual do macOS já tiver um bug de áudio conhecido documentado pela Apple.

**Não tente abrir o MacBook sem as ferramentas corretas:** os alto-falantes dos MacBook Pro modernos são colados com adesivo e conectados por cabos flex extremamente frágeis. Uma tentativa de acesso sem ferramentas específicas (pentalobe, spudger, adesivo de abertura) quase certamente danifica o cabo flex ou o próprio módulo de alto-falante.

**Não ignore distorção achando que vai melhorar:** a membrana distorcida se deteriora progressivamente. Quanto antes o reparo, menor o custo — porque um alto-falante com membrana parcialmente deteriorada é mais barato de trocar do que um completamente destruído que começa a vibrar contra a estrutura interna.

---

## Como prevenir problemas de som no MacBook

**Mantenha o volume abaixo de 80% com frequência:** volumes muito altos por períodos prolongados aceleram o desgaste da membrana dos alto-falantes, especialmente ao reproduzir conteúdo com muito grave (música eletrônica, explosões em filmes, jogos).

**Evite líquidos próximos ao MacBook:** a maioria dos danos de áudio por líquido começa com uma xícara de café ou copo d'água no ambiente de trabalho. Um protetor de teclado de silicone não protege contra derramamentos significativos, mas reduz o volume que atinge a placa em incidentes menores.

**Não obstrua os alto-falantes:** nos MacBook Pro, os alto-falantes ficam nas laterais do teclado. Usar o MacBook sobre superfícies que cobrem essa área (como travesseiros ou cobertas) bloqueia a saída de som e aumenta o calor interno — o que, ao longo do tempo, acelera o desgaste das membranas.

**Atualize o macOS regularmente:** atualizações de sistema frequentemente incluem correções para bugs de Core Audio. Um macOS atualizado tem menos probabilidade de desenvolver o problema de "som sumindo após modo de espera" ou "volume travado".

---

## Reparo de som do MacBook na Conecta Phone

Na **Conecta Phone**, em Recife, realizamos diagnóstico e reparo de áudio para todos os modelos de MacBook — do MacBook Air M1 ao MacBook Pro 16" com Apple Silicon, passando pelos modelos Intel de 2016 a 2021.

O atendimento começa com uma **avaliação gratuita**: conectamos ao sistema de diagnóstico, verificamos se o hardware de áudio está sendo reconhecido pelo macOS, testamos os alto-falantes com sinal de frequência específica para identificar distorção e falha de membrana, e inspecionamos a placa para identificar corrosão por líquido na cadeia de áudio.

Os reparos que realizamos:

- **Troca de alto-falantes** — para MacBook Pro 2016–2019 com distorção ou falha total; troca do módulo completo (woofer e tweeter)
- **Reparo de placa por dano de líquido** — limpeza ultrassônica e microssoldagem no chip de codec de áudio
- **Substituição de cabo flex de áudio** — para casos de mau contato ou ruptura
- **Diagnóstico e reset de software** — para casos onde a causa é software (Core Audio, NVRAM, perfil de usuário)

Atendemos MacBook Air e MacBook Pro de todas as gerações — Intel e Apple Silicon.

Todos os reparos têm **garantia de 90 dias**. Oferecemos **coleta e entrega em Recife** e parcelamento em **até 6x sem juros**.

Se o som do seu MacBook parou de funcionar ou está distorcido, entre em contato pelo WhatsApp para agendar a avaliação gratuita. O diagnóstico não tem custo e você recebe o orçamento antes de qualquer intervenção.

---

📱 **WhatsApp:** (81) 99186-2060  
🚚 **Coleta e entrega** em Recife  
💳 **Parcelamento em até 6x sem juros**  
⭐ **[Mais de 750 avaliações no Google](https://share.google/rktOQ5pgkn5dEPEh1)** — confira e deixe a sua!
