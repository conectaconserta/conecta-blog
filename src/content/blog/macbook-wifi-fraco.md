---
title: "MacBook com Wi-Fi caindo ou fraco: causas e soluções"
description: "MacBook com Wi-Fi caindo ou sinal fraco? Veja diagnóstico por software, configurações de rede, quando é antena ou chip e como resolver. Diagnóstico grátis."
pubDate: 2026-06-25
author: "Equipe Conecta"
tags: ["MacBook", "Wi-Fi", "Reparo", "Manutenção", "Apple"]
---

O **MacBook com Wi-Fi caindo** ou com sinal fraco é um problema que pode arruinar uma tarde de trabalho — reunião no Zoom que trava, upload que não termina, páginas que demoram para carregar enquanto o celular ao lado funciona perfeitamente na mesma rede. O mais frustrante é que o problema às vezes desaparece sozinho e volta minutos depois, tornando difícil até mesmo reproduzir a falha para diagnosticar.

O Wi-Fi do MacBook depende de uma cadeia de componentes: o chip de conectividade sem fio na placa lógica, a antena que corre pelo interior da tampa do display, os drivers de Wi-Fi do macOS e as configurações de rede. Qualquer elemento dessa cadeia pode ser o ponto de falha — e identificar qual é o que separa uma solução em 10 minutos de um reparo de hardware.

Neste artigo você vai entender os tipos de problema de Wi-Fi no MacBook, como diagnosticar por software antes de concluir que é hardware, o que verificar no roteador, como usar as ferramentas de diagnóstico nativas do macOS — e quando o problema é na antena ou no chip de Wi-Fi e precisa de reparo físico.

---

## Tipos de problema de Wi-Fi no MacBook: identifique o seu

Cada sintoma aponta para causas diferentes. Caracterize exatamente o que está acontecendo antes de qualquer ação.

### Wi-Fi cai e reconecta sozinho

O MacBook desconecta da rede por alguns segundos ou minutos e reconecta automaticamente. O ícone de Wi-Fi na barra de menu pisca ou mostra "sem conexão" brevemente. Isso pode ser:
- **Interferência de canal de rádio** no roteador — outros dispositivos na mesma faixa causando conflito
- **DHCP com lease expirado** — o roteador está renovando o endereço IP e a transição está causando desconexão
- **Problema de driver de Wi-Fi** em uma versão específica do macOS
- **Antena com mau contato** — especialmente se o MacBook já sofreu queda ou foi aberto antes

### Sinal fraco ou velocidade baixa apenas no MacBook

Outros dispositivos na mesma rede funcionam em velocidade normal, mas o MacBook mostra sinal fraco ou velocidade muito abaixo do esperado. Pode ser:
- **MacBook conectado na banda 2,4 GHz** quando deveria estar em 5 GHz
- **Antena de Wi-Fi com dano parcial** — sinal chega, mas com perda significativa
- **Posicionamento do MacBook** — a antena fica na moldura do display; fechar a tampa parcialmente bloqueia parte do sinal

### MacBook não encontra redes disponíveis

A lista de redes Wi-Fi aparece vazia ou carrega apenas redes muito próximas. Em casos extremos, o ícone de Wi-Fi na barra de menu fica com um "x" e as configurações de Wi-Fi mostram o toggle acinzentado.

Esse é o sintoma mais sério — pode indicar **falha no chip de Wi-Fi** ou **desconexão completa da antena** internamente.

### Wi-Fi lento após acordar do modo de espera

O MacBook conecta normalmente ao abrir a tampa, mas a internet demora vários minutos para funcionar de verdade após sair do modo de espera — como se o rádio de Wi-Fi precisasse de tempo para "aquecer". Esse comportamento é comum em versões do macOS com bugs de reconexão pós-suspensão.

---

## Diagnóstico por software: o que fazer primeiro

A maioria dos casos de Wi-Fi intermitente no MacBook tem origem em software ou configuração. Siga estes passos em ordem.

### 1. Desligue e religue o Wi-Fi

O passo mais simples. Clique no ícone de Wi-Fi na barra de menu e desligue. Aguarde 10 segundos e ligue novamente. O módulo de Wi-Fi reinicia a varredura de redes e limpa estados de conexão travados.

### 2. Esqueça a rede e reconecte

Uma configuração de rede corrompida pode causar quedas e reconexões intermitentes. Para esquecer:

1. **Preferências do Sistema → Wi-Fi → Detalhes** (ao lado da rede conectada)
2. Clique em **"Esquecer Esta Rede"**
3. Reconecte digitando a senha

### 3. Crie um novo Local de Rede

O macOS organiza configurações de rede em "Locais". Criar um novo Local limpa todas as preferências de rede sem apagar as senhas salvas no Keychain:

1. **Preferências do Sistema → Rede**
2. No menu suspenso **"Local"**, selecione **"Editar Locais..."**
3. Clique em **"+"** para criar um novo local
4. Conecte-se novamente às suas redes Wi-Fi

Esse passo resolve boa parte dos casos de Wi-Fi instável causados por configurações de rede acumuladas ao longo de atualizações do macOS.

### 4. Delete os arquivos de preferência de Wi-Fi

O macOS armazena configurações de Wi-Fi em arquivos de preferência que podem ser corrompidos. Para resetar:

1. Abra o **Finder**
2. No menu **Ir**, segure **Option** e clique em **Biblioteca**
3. Navegue até **Preferences → SystemConfiguration**
4. Mova para a lixeira os arquivos: `com.apple.network.identification.plist`, `com.apple.wifi.message-tracer.plist`, `NetworkInterfaces.plist` e `preferences.plist`
5. Reinicie o MacBook

O macOS recria esses arquivos com valores padrão na próxima inicialização.

### 5. Redefina a NVRAM e o SMC

A NVRAM armazena configurações de rede. O SMC controla o gerenciamento de energia, incluindo o rádio de Wi-Fi.

- **NVRAM (Intel):** desligue, ligue e imediatamente segure **Option + Command + P + R** por 20 segundos
- **SMC (MacBook com bateria não removível, Intel):** desligue, segure **Shift + Control + Option + botão de energia** por 10 segundos com o carregador conectado, solte e ligue normalmente
- **Apple Silicon (M1, M2, M3, M4):** um reinício normal reinicia equivalentes à NVRAM e ao SMC — não há procedimento de teclas

### 6. Use o Diagnóstico de Rede Sem Fio

O macOS tem uma ferramenta nativa de diagnóstico de Wi-Fi que analisa o ambiente de rádio e identifica problemas:

- Segure **Option** e clique no ícone de Wi-Fi na barra de menu
- Selecione **"Diagnóstico de Rede Sem Fio..."**
- Siga o assistente

A ferramenta verifica a qualidade do sinal, interferência de canal, configuração de roteador e conexão com a internet — e gera um relatório com os problemas encontrados.

> **Se todos os passos de software foram feitos e o Wi-Fi continua instável apenas no MacBook** (outros dispositivos funcionam bem na mesma rede), o problema provavelmente é hardware.

---

## Configurações do roteador que afetam o MacBook

Antes de concluir que é hardware do MacBook, verifique estes pontos no roteador — especialmente se outros dispositivos também apresentam alguma instabilidade.

### Congestionamento de canal

Em Recife, especialmente em prédios e condomínios com muitos roteadores próximos, o congestionamento de canal de Wi-Fi é uma das causas mais comuns de sinal fraco e quedas. A maioria dos roteadores vem configurada no canal automático — mas "automático" nem sempre escolhe o melhor canal.

Use o Diagnóstico de Rede Sem Fio do macOS para ver quais canais estão mais congestionados na sua área e configure manualmente o roteador para um canal menos ocupado. Para 2,4 GHz, os canais 1, 6 e 11 são os que não se sobrepõem — prefira um deles.

### Largura de canal e modo Wi-Fi

Alguns roteadores configurados em modo **802.11n** ou **802.11ac** com largura de canal de **40 MHz ou 80 MHz** podem causar instabilidade com MacBooks mais antigos. Testar com largura de 20 MHz na banda 2,4 GHz frequentemente melhora a estabilidade, mesmo que à custa de velocidade máxima.

### Separação de bandas

Se o roteador usa o mesmo nome para 2,4 GHz e 5 GHz, o MacBook pode alternar entre as bandas de forma indesejada — conectando em 5 GHz quando próximo e caindo para 2,4 GHz ao se afastar, causando desconexões durante a transição. Separar as bandas com nomes diferentes resolve esse comportamento.

### DNS lento

Um servidor DNS lento pode fazer parecer que o Wi-Fi está instável quando na verdade a conexão está ativa mas as consultas de domínio demoram. Configure um DNS rápido no MacBook:

**Preferências do Sistema → Rede → Wi-Fi → Detalhes → DNS** → adicione **8.8.8.8** (Google) ou **1.1.1.1** (Cloudflare).

---

## Quando é hardware: antena e chip de Wi-Fi

Se os passos de software não resolveram e o problema persiste apenas no MacBook, a causa pode ser física.

### Antena de Wi-Fi danificada

A antena de Wi-Fi do MacBook corre pelo interior da moldura do display — a borda preta ao redor da tela. Essa posição maximiza o alcance do sinal, mas a torna vulnerável a danos por quedas e impactos na tampa.

Com a antena danificada parcialmente:
- O MacBook conecta ao Wi-Fi apenas quando está próximo do roteador (1 a 2 metros)
- O sinal cai progressivamente ao se afastar
- A velocidade é significativamente menor que outros dispositivos na mesma distância

Com antena completamente desconectada:
- O MacBook não encontra nenhuma rede disponível
- O ícone de Wi-Fi mostra "x" ou a opção de Wi-Fi fica acinzentada

**Causa mais comum de dano na antena:** quedas com o MacBook aberto que impactam a moldura do display, ou MacBooks que foram abertos antes por serviços de reparo e o cabo de antena não foi reconectado corretamente.

### Chip de Wi-Fi com falha

Nos MacBooks modernos, o chip de Wi-Fi/Bluetooth é soldado diretamente na placa lógica — não é um componente removível. Quando falha, os sintomas são semelhantes à antena desconectada: o MacBook não vê nenhuma rede.

Causas de falha no chip: **dano por líquido** que corrói os circuitos de RF, ou **falha por ciclos térmicos** em MacBooks com histórico de superaquecimento. Veja nosso artigo sobre [MacBook superaquecendo](/blog/macbook-superaquecendo/) para entender como o calor excessivo afeta progressivamente os componentes da placa lógica.

### Como diferenciar antena de chip

- **Antena danificada:** o MacBook enxerga redes próximas (especialmente a 2,4 GHz), mas o sinal é fraco e cai ao se afastar
- **Chip com falha:** o MacBook não enxerga absolutamente nenhuma rede, mesmo a centímetros do roteador; o Wi-Fi pode aparecer acinzentado nas configurações
- **Teste decisivo:** conecte um adaptador USB-C para Wi-Fi externo. Se funcionar normalmente, o problema é na antena ou no chip interno — não no roteador nem no macOS

---

## Erros comuns ao tentar resolver Wi-Fi fraco no MacBook

**Reinstalar o macOS como primeira tentativa:** o macOS limpo raramente resolve problemas de Wi-Fi que os passos de configuração descritos acima não resolvem. Reinstalar é uma medida drástica que não deve ser a primeira abordagem.

**Culpar o roteador sem testar em outra rede:** antes de concluir que é hardware do MacBook, teste em pelo menos mais uma rede Wi-Fi — na casa de um familiar ou em uma cafeteria. Se o problema aparece em todas as redes, é o MacBook. Se só aparece em casa, é o roteador.

**Usar extensores de sinal baratos como solução permanente:** extensores de Wi-Fi de baixa qualidade podem introduzir latência adicional e criar zonas de sinal instável onde o MacBook fica alternando entre o roteador e o extensor. Se o alcance é o problema, invista em um sistema Mesh ou em um roteador com melhor alcance.

**Ignorar atualizações do macOS por medo de instabilidade:** várias versões do macOS tiveram bugs de Wi-Fi documentados que foram corrigidos em atualizações subsequentes. Ficar em uma versão antiga pode significa continuar com um bug conhecido que já tem correção disponível.

---

## Como prevenir problemas de Wi-Fi no MacBook

**Evite impactos na tampa:** a antena de Wi-Fi fica na moldura do display. Quedas e impactos nessa área são a principal causa de dano de antena. Use capa protetora e bolsa acolchoada para transporte.

**Mantenha o macOS atualizado:** atualizações de sistema incluem frequentemente correções de driver de Wi-Fi que melhoram estabilidade e desempenho de conectividade.

**Não obstrua a tampa ao usar:** usar o MacBook com a tampa quase fechada (menos de 45°) pode bloquear parcialmente o sinal da antena — a posição da antena na moldura é otimizada para a tampa completamente aberta.

**Verifique periodicamente o roteador:** roteadores domésticos se beneficiam de reinícios mensais e de atualizações de firmware. Um roteador com firmware desatualizado pode ter bugs de compatibilidade com versões mais recentes do macOS.

---

## Reparo de Wi-Fi do MacBook na Conecta Phone

Na **Conecta Phone**, em Recife, realizamos diagnóstico e reparo de Wi-Fi para todos os modelos de MacBook — do MacBook Air com chip M ao MacBook Pro Intel com antena na moldura do display.

O atendimento começa com uma **avaliação gratuita**: testamos o Wi-Fi em diferentes frequências e distâncias, verificamos a integridade da antena internamente, inspecionamos os circuitos de RF na placa para corrosão e rodamos o diagnóstico nativo do macOS para eliminar causas de software.

Os reparos que realizamos para MacBook com Wi-Fi fraco ou caindo:

- **Substituição do cabo de antena de Wi-Fi** — para MacBooks com antena danificada por queda ou abertura incorreta
- **Reconexão e fixação do cabo de antena** — para casos de mau contato sem ruptura
- **Reparo do chip de Wi-Fi na placa lógica** — para falhas de hardware no módulo de conectividade
- **Limpeza e reparo por dano de líquido** — para corrosão nos circuitos de RF
- **Diagnóstico e configuração de software** — para casos resolvíveis sem troca de peça

Atendemos MacBook Air e MacBook Pro de todas as gerações, Intel e Apple Silicon.

Todos os reparos têm **garantia de 90 dias**. Oferecemos **coleta e entrega em Recife** e parcelamento em **até 6x sem juros**.

Se o Wi-Fi do seu MacBook está caindo ou com sinal fraco, entre em contato pelo WhatsApp para agendar a avaliação gratuita — o diagnóstico não tem custo e você sai com a causa identificada.

---

📱 **WhatsApp:** (81) 99186-2060  
🚚 **Coleta e entrega** em Recife  
💳 **Parcelamento em até 6x sem juros**  
⭐ **[Mais de 750 avaliações no Google](https://share.google/rktOQ5pgkn5dEPEh1)** — confira e deixe a sua!
