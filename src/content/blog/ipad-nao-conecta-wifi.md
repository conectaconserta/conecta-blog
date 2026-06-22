---
title: "iPad não conecta no Wi-Fi: causas e como resolver"
description: "iPad não conecta no Wi-Fi ou cai da rede sem parar? Veja diagnóstico por software, configurações de roteador e quando é chip de Wi-Fi. Diagnóstico grátis."
pubDate: 2026-06-20
author: "Equipe Conecta"
tags: ["iPad", "Wi-Fi", "Reparo", "Manutenção", "Apple"]
---

O **iPad não conecta no Wi-Fi** é um problema que aparece de formas diferentes: às vezes o iPad nem enxerga a rede, às vezes conecta mas cai toda hora, às vezes fica com o símbolo de Wi-Fi mas sem acesso à internet. Cada sintoma tem uma causa diferente — e confundir um problema de configuração de roteador com uma falha de hardware do iPad, ou vice-versa, leva a soluções erradas e horas perdidas.

O Wi-Fi do iPad depende de uma cadeia de componentes funcionando em conjunto: o chip de conectividade sem fio, a antena que corre pelas bordas do aparelho, as configurações de rede do iPadOS e o próprio roteador do ambiente. Qualquer um desses elementos pode ser o ponto de falha — e identificar qual é o caminho mais rápido para a solução.

Neste artigo você vai aprender a diagnosticar o problema de Wi-Fi no iPad passo a passo, entender as diferenças entre falha de software e de hardware, o que verificar no roteador, as configurações do iPadOS que mais causam problemas — e quando o chip de Wi-Fi ou a antena precisam de reparo físico.

---

## Tipos de problema de Wi-Fi no iPad: identifique o seu

Antes de qualquer ação, caracterize exatamente o que está acontecendo. Cada sintoma aponta para uma causa diferente.

### iPad não encontra a rede Wi-Fi

O nome da sua rede (SSID) não aparece na lista de redes disponíveis, mesmo estando próximo ao roteador. Outros dispositivos enxergam a rede normalmente. Pode ser:
- O iPad está em **Modo Avião** — verifique em **Ajustes → Modo Avião** ou na Central de Controle
- O Wi-Fi do iPad está desativado — verifique em **Ajustes → Wi-Fi**
- A rede está transmitindo em **5 GHz** e o modelo do iPad não suporta essa faixa (modelos muito antigos)
- **Chip de Wi-Fi com falha** — se o iPad não enxerga nenhuma rede, incluindo redes de vizinhos

### iPad conecta mas cai da rede repetidamente

O iPad conecta ao Wi-Fi, funciona por alguns minutos e desconecta sozinho. O ícone de Wi-Fi aparece e desaparece. Pode ser:
- Sinal fraco — o iPad está no limite do alcance do roteador
- Conflito de endereço IP — outro dispositivo na rede está usando o mesmo IP
- Configuração de **renovação de DHCP** com falha
- Interferência de canal de rádio no roteador
- Antena de Wi-Fi do iPad com dano parcial

### iPad conectado ao Wi-Fi mas sem acesso à internet

O ícone de Wi-Fi aparece cheio na barra de status, o iPad mostra "Conectado" à rede, mas os apps não carregam e o navegador não abre páginas. Isso indica que o problema não está no iPad — está na **conexão do roteador com a internet** ou nas configurações de DNS.

### Wi-Fi lento apenas no iPad

Outros dispositivos na mesma rede funcionam normalmente em velocidade normal, mas o iPad carrega páginas devagar, vídeos travam e downloads são lentos. Pode ser:
- **Banda de frequência inadequada** — iPad conectado em 2,4 GHz enquanto poderia usar 5 GHz
- Cache de DNS corrompido no iPad
- Problema específico de driver de Wi-Fi em uma versão do iPadOS

---

## Diagnóstico de software: o que fazer primeiro

A maioria dos problemas de Wi-Fi no iPad tem solução em software. Siga estes passos em ordem antes de concluir que é hardware.

### 1. Desative e reative o Wi-Fi

O passo mais simples e frequentemente eficaz. Vá em **Ajustes → Wi-Fi** e desligue o interruptor. Aguarde 10 segundos e ligue novamente. Isso força o módulo de Wi-Fi a reinicializar a varredura de redes.

Alternativamente, ative o **Modo Avião** pela Central de Controle por 15 segundos e desative. Isso reinicia todos os rádios do iPad (Wi-Fi, Bluetooth e dados móveis) simultaneamente.

### 2. Esqueça a rede e reconecte

Uma configuração de rede corrompida no iPadOS pode impedir a conexão mesmo com a senha correta. Para esquecer e reconectar:

1. Vá em **Ajustes → Wi-Fi**
2. Toque no ícone **"i"** ao lado do nome da rede
3. Toque em **"Esquecer Esta Rede"**
4. Confirme
5. Localize a rede na lista e conecte novamente, digitando a senha

### 3. Reinicie o iPad completamente

Um reinício completo — não apenas modo de espera — limpa processos de rede em segundo plano que podem estar travados. Em iPads com Face ID: pressione e segure o botão lateral + volume até o slider aparecer. Em iPads com botão Home: pressione e segure o botão lateral até o slider.

### 4. Verifique e atualize o iPadOS

Algumas versões do iPadOS tiveram bugs documentados de Wi-Fi — especialmente nas primeiras semanas após lançamentos grandes. Vá em **Ajustes → Geral → Atualização de Software**. Se houver atualização disponível, instale e teste o Wi-Fi após o reinício.

### 5. Redefina as configurações de rede

Esse passo apaga todas as senhas de Wi-Fi salvas, configurações de VPN e preferências de Bluetooth — mas frequentemente resolve problemas persistentes de conectividade causados por configurações corrompidas.

Vá em **Ajustes → Geral → Transferir ou Redefinir o iPad → Redefinir → Redefinir Configurações de Rede**.

O iPad reinicia. Conecte novamente às suas redes digitando as senhas.

> **Atenção:** tenha as senhas das suas redes Wi-Fi em mãos antes de fazer esse reset — você vai precisar digitá-las novamente.

---

## Configurações do roteador que causam problemas no iPad

Muitos problemas de Wi-Fi no iPad têm origem no roteador, não no iPad. Estes são os pontos mais comuns.

### Reinicie o roteador

Antes de qualquer configuração avançada, desligue o roteador da tomada, aguarde 30 segundos e ligue novamente. Roteadores acumulam conexões e tabelas de ARP ao longo do tempo — um reinício limpa isso e resolve boa parte das quedas intermitentes de conexão.

### Verifique o conflito de endereço IP

Se o iPad conecta mas cai da rede, pode haver um conflito de IP: dois dispositivos recebendo o mesmo endereço do roteador. Para resolver:

1. No iPad, vá em **Ajustes → Wi-Fi → toque no "i" da rede conectada**
2. Em **Configurar IP**, mude de **Automático** para **Manual**
3. Configure um endereço IP fixo fora da faixa DHCP do roteador (por exemplo, se o roteador distribui de 192.168.1.100 a 192.168.1.200, use 192.168.1.50)

### Teste com DNS manual

DNS lento ou com falha pode fazer o iPad parecer sem internet mesmo conectado ao Wi-Fi. Para usar um DNS público confiável:

1. **Ajustes → Wi-Fi → toque no "i" da rede**
2. Role até **DNS** → toque em **Configurar DNS** → selecione **Manual**
3. Remova os servidores existentes e adicione: **8.8.8.8** (Google) ou **1.1.1.1** (Cloudflare)

### Verifique a separação de bandas 2,4 GHz e 5 GHz

Roteadores modernos de banda dupla transmitem em duas frequências:
- **2,4 GHz:** maior alcance, velocidade menor, mais interferência
- **5 GHz:** menor alcance, velocidade maior, menos interferência

Se o roteador usa o mesmo nome (SSID) para as duas bandas, o iPad escolhe automaticamente. Em alguns casos, o iPad fica preso na banda errada. Separar as bandas com nomes diferentes (ex: "MinhaRede" e "MinhaRede_5G") permite forçar o iPad a conectar na banda ideal para cada situação.

### Desative a privacidade de endereço Wi-Fi temporariamente

O iPadOS tem um recurso de **Endereço Wi-Fi Privado** que usa um endereço MAC aleatório por rede — pensado para privacidade, mas que pode causar problemas em roteadores com controle de acesso por MAC ou em redes corporativas.

Para desativar em uma rede específica: **Ajustes → Wi-Fi → "i" da rede → desative "Endereço Privado"**.

---

## Quando é hardware: chip de Wi-Fi ou antena danificada

Se todos os passos de software foram tentados e o Wi-Fi continua com problema apenas no iPad (outros dispositivos funcionam normalmente na mesma rede), o problema pode ser hardware.

### Chip de Wi-Fi com falha

O chip de conectividade sem fio do iPad fica na placa lógica. Quando falha completamente, o iPad não enxerga nenhuma rede Wi-Fi — a lista de redes disponíveis fica vazia mesmo a poucos metros do roteador, e o botão de Wi-Fi nos ajustes pode ficar acinzentado e sem resposta.

Causas comuns de falha no chip:
- **Dano por líquido:** corrosão nos circuitos de RF ao redor do chip
- **Impacto por queda:** chips com solda BGA podem ter micro-fraturas nas esferas de solda após impacto
- **Desgaste por calor acumulado:** em iPads muito usados ao longo de anos, os ciclos térmicos enfraquecem as soldas

### Antena de Wi-Fi danificada

A antena de Wi-Fi do iPad corre pelas bordas da estrutura — geralmente pelos cantos e pela lateral superior. Quedas nos cantos são a principal causa de dano na antena. Com a antena danificada, o iPad pode:
- Conectar ao Wi-Fi apenas quando está muito próximo do roteador (a menos de 1 ou 2 metros)
- Mostrar sinal cheio mas com velocidade muito baixa
- Cair da rede ao mover o iPad pelo ambiente

O diagnóstico diferencia falha de chip de falha de antena: se o iPad conecta em boa velocidade de perto mas perde sinal rapidamente ao se afastar, é antena. Se não conecta de forma alguma independente da distância, é mais provável que seja o chip.

### Dano por líquido na cadeia de RF

iPads que tiveram contato com líquido podem desenvolver problemas de Wi-Fi dias ou semanas depois do incidente — a corrosão avança lentamente e pode atingir os componentes de RF antes de afetar outros circuitos. Se o iPad teve contato com líquido em algum momento e agora tem Wi-Fi instável, veja nosso artigo sobre [iPad lento](/blog/ipad-lento/) para entender como o dano interno progride e afeta múltiplos sistemas.

> **Teste rápido de hardware:** conecte um hotspot do celular diretamente ao iPad e veja se conecta normalmente. Se o iPad funciona bem no hotspot mas não em redes Wi-Fi fixas, o problema pode ser de compatibilidade com o roteador específico. Se não conecta nem no hotspot, o problema é no hardware do iPad.

---

## Erros comuns ao tentar resolver Wi-Fi no iPad

**Redefinir para configurações de fábrica como primeiro passo:** o reset de fábrica apaga tudo e raramente resolve problemas de Wi-Fi que um reset de configurações de rede não resolveria. Reserve para último recurso.

**Ignorar o roteador como possível causa:** é comum assumir que o problema é sempre no iPad. Mas se o iPad conecta em outras redes sem problema, o roteador doméstico é o responsável. Teste em uma rede diferente (casa de um familiar, cafeteria) antes de concluir que o hardware do iPad está com defeito.

**Atualizar o iPadOS esperando resolver problemas de Wi-Fi em modelos antigos:** em iPads com chip A12 ou anterior, algumas versões do iPadOS podem introduzir problemas de Wi-Fi ao otimizar para hardware mais recente. Pesquise relatos de outros usuários do mesmo modelo antes de atualizar.

**Não verificar se o problema é só com um app:** às vezes o Wi-Fi funciona normalmente, mas um app específico (Netflix, streaming, app de banco) não carrega. Isso indica problema no app, não na conexão. Teste com o navegador Safari para confirmar que o Wi-Fi em si está funcionando.

---

## Reparo de Wi-Fi do iPad na Conecta Phone

Na **Conecta Phone**, em Recife, realizamos diagnóstico e reparo de conectividade Wi-Fi para todos os modelos de iPad — do iPad mini ao iPad Pro com chip M.

O atendimento começa com uma **avaliação gratuita**: testamos o Wi-Fi em diferentes distâncias e faixas de frequência, verificamos a antena internamente, inspecionamos a placa para corrosão por líquido e avaliamos o chip de conectividade — antes de qualquer orçamento.

Os serviços que realizamos para iPad sem Wi-Fi:

- **Substituição de antena de Wi-Fi** — para iPads com sinal fraco ou que conectam apenas de perto
- **Reparo do chip de conectividade na placa lógica** — para iPads que não enxergam nenhuma rede
- **Limpeza e reparo por dano de líquido** — para corrosão nos circuitos de RF
- **Diagnóstico e configuração de software** — para casos resolvíveis sem troca de peça

Atendemos iPad mini, iPad Air, iPad e iPad Pro de todas as gerações — incluindo modelos com chips A12, A14, A15, M1, M2 e M4.

Todos os reparos têm **garantia de 90 dias**. Oferecemos **coleta e entrega em Recife** e parcelamento em **até 6x sem juros**.

Se o Wi-Fi do seu iPad está com problema, entre em contato pelo WhatsApp para agendar a avaliação gratuita — o diagnóstico não tem custo e você sai sabendo exatamente o que está acontecendo.

---

📱 **WhatsApp:** (81) 99186-2060  
🚚 **Coleta e entrega** em Recife  
💳 **Parcelamento em até 6x sem juros**  
⭐ **[Mais de 750 avaliações no Google](https://share.google/rktOQ5pgkn5dEPEh1)** — confira e deixe a sua!
