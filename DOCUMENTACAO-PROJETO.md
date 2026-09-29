# DOCUMENTAÇÃO DO PROJETO — RECOMENDAÇÕES CONSULTA DE GERIATRIA

> Documento de continuidade do projeto.
> Se for necessário continuar este projeto numa nova conversa com o ChatGPT,
> fornecer este ficheiro juntamente com os ficheiros atuais do projeto.
>
> IMPORTANTE PARA O CHATGPT:
> Antes de propor alterações, ler este documento e analisar os ficheiros atuais
> index.html, style.css, script.js, manifest.webmanifest e service-worker.js.
> Não assumir que o projeto deve ser refeito de raiz.
> Trabalhar preferencialmente passo a passo, indicando ao utilizador exatamente
> onde clicar, o que alterar e quando parar para confirmar o resultado.

---

## 1. IDENTIFICAÇÃO DO PROJETO

Nome:
**Recomendações Consulta de Geriatria**

Contexto:
**Consulta de Geriatria — ULS Região de Aveiro (ULSRA)**

Responsável pelo desenvolvimento inicial:
**Mafalda Marques**

O projeto foi concebido e iniciado internamente, com conteúdos clínicos
discutidos/validados pela equipa e pelo coordenador da Consulta de Geriatria.

---

## 2. OBJETIVO

Aplicação web de apoio aos profissionais da Consulta de Geriatria.

Durante a consulta, o médico ou enfermeiro seleciona as áreas/síndromes
geriátricas relevantes para aquele utente.

A aplicação gera automaticamente uma folha com recomendações adequadas às
áreas selecionadas, destinada ao utente e/ou cuidador.

A folha pode ser:

- visualizada no ecrã;
- impressa;
- guardada em PDF;
- enviada posteriormente ao utente/cuidador.

A aplicação não foi concebida para guardar dados pessoais ou clínicos
identificáveis dos utentes.

---

## 3. TECNOLOGIA

Aplicação construída em:

- HTML
- CSS
- JavaScript

Ambiente de desenvolvimento:

- Visual Studio Code
- Live Server
- Git
- GitHub

Repositório GitHub:

**Geriatria/recomendacoes-geriatria**

Existem duas branches principais:

- `main` — versão estável/publicada
- `desenvolvimento` — utilizada para desenvolvimento e testes

Regra de trabalho:
As alterações devem ser feitas primeiro em `desenvolvimento`.
Depois de testadas, são integradas em `main` através de Pull Request.

---

## 4. PUBLICAÇÃO

A aplicação está publicada provisoriamente através de **GitHub Pages**.

O GitHub Pages utiliza a branch principal para disponibilizar a versão pública.

A publicação atual deve ser considerada uma versão provisória/de
desenvolvimento institucional.

Antes de uma disponibilização alargada deverá existir enquadramento/aprovação
pela ULS Região de Aveiro.

---

## 5. PWA

A aplicação foi transformada numa **Progressive Web App (PWA)**.

Ficheiros associados:

- `manifest.webmanifest`
- `service-worker.js`

Ícones:

- `icon-192.png`
- `icon-512.png`
- `icon-mobile-512.png`

A PWA já foi testada com sucesso em:

- computador;
- telemóvel Android;
- funcionamento offline.

A aplicação pode ser instalada como se fosse uma aplicação normal.

O service worker utiliza cache dos ficheiros essenciais.

ATENÇÃO:
Sempre que forem feitas alterações importantes aos ficheiros da aplicação,
verificar se é necessário atualizar o nome/versão da cache no
`service-worker.js`, para evitar que dispositivos instalados continuem a
apresentar uma versão antiga.

---

## 6. ESTRUTURA E IDENTIDADE VISUAL

A aplicação utiliza:

- logótipo da ULS Região de Aveiro;
- logótipo da Consulta de Geriatria;
- título "Recomendações Consulta de Geriatria";
- data no cabeçalho;
- barras verdes nos títulos das áreas;
- recomendações apresentadas de forma simples e legível.

O objetivo visual é institucional, simples e adequado a pessoas idosas e
cuidadores.

Na impressão existe rodapé com:

- número de página;
- versão;
- crédito "Mafalda Marques".

Foi removida a indicação "A quem se destina".

---

## 7. FUNCIONALIDADES IMPLEMENTADAS

Entre as funcionalidades já existentes encontram-se:

- seleção de temas;
- pesquisa de temas;
- geração automática das recomendações;
- botão "Gerar recomendações";
- botão "Imprimir/Guardar";
- botão "Nova consulta";
- botão "Nova consulta" também na folha gerada;
- adaptação entre visualização no ecrã e impressão;
- paginação;
- prevenção de títulos isolados no final das páginas;
- funcionamento como PWA;
- funcionamento offline.

Foram também trabalhadas melhorias de acessibilidade e apresentação.

---

## 8. CONTEÚDOS CLÍNICOS ATUALMENTE VALIDADOS/ATIVOS

Neste momento devem manter-se apenas os temas já validados pela equipa/
coordenação.

### Obstipação

Tema validado.

Alterações anteriormente efetuadas incluíram:

- retirada de "bicicleta estática";
- retirada de "não fazer esforço excessivo";
- retirada de indicação genérica para rever medicação;
- redução de repetições relacionadas com fruta/legumes;
- SOS apenas quando indicado;
- objetivo para a consulta seguinte transferido para bloco global.

### Alimentação na Demência

Versão curta validada.

Foi removida a frase:

"Cada refeição é uma oportunidade de cuidar."

### Quedas

Conteúdo base aceite.

Foram retirados sublinhados considerados desnecessários.

### Delirium

Alterações efetuadas:

- "Orientação e companhia" passou para "Orientação";
- "Próteses dentárias" passou para "Outros cuidados";
- sinais de alerta foram reduzidos;
- objetivo para próxima consulta:
  "Não apresentou alterações súbitas do comportamento ou estado mental."

### Higiene do Sono

Título utilizado:

**Higiene do sono**

Foram retirados/revistos:

- indicação de usar a cama apenas para dormir;
- duplicações relacionadas com ressonar/pausas respiratórias;
- referências repetidas a luz de presença/WC.

---

## 9. TEMAS NÃO ATIVOS / A AGUARDAR REVISÃO

Não devem ser preenchidos ou reativados sem nova validação clínica:

- Sarcopenia
- Risco nutricional
- Sobrecarga do cuidador
- Terapêutica
- outros temas ainda não aprovados

O conteúdo clínico não deve ser inventado pelo ChatGPT nem introduzido na
aplicação como definitivo sem validação da equipa.

---

## 10. IMPRESSÃO

Foi realizado trabalho específico na impressão.

Problemas anteriormente corrigidos:

- títulos isolados no final da página;
- cabeçalhos separados do respetivo conteúdo;
- margens;
- paginação;
- rodapé;
- apresentação diferente entre ecrã e impressão.

A paginação deve ser sempre testada depois de alterações relevantes ao CSS ou
ao conteúdo.

---

## 11. ESTATÍSTICAS

Foi iniciada/implementada funcionalidade relacionada com estatísticas de
utilização.

DECISÃO ATUAL:
Não aprofundar esta área enquanto a aplicação não estiver efetivamente
disponibilizada a vários profissionais/utilizadores.

Só nessa fase fará sentido decidir exatamente:

- o que medir;
- como medir;
- onde armazenar;
- implicações institucionais e de privacidade.

---

## 12. UTILIZADORES / AUTENTICAÇÃO

Não é prioridade nesta fase criar contas de utilizador ou sistema complexo de
autenticação.

A necessidade deve ser reavaliada quando for definido pela instituição:

- quem poderá utilizar a aplicação;
- onde será alojada;
- se será interna ou pública;
- se haverá necessidade de controlo de acessos.

---

## 13. QR CODE

Foi considerada a inclusão de QR Code na folha entregue ao utente.

DECISÃO ATUAL:
Não implementar já.

Motivo:
Ainda não existe uma página de destino suficientemente desenvolvida para o
utente.

A ideia NÃO foi abandonada.

---

## 14. NOVA IDEIA — ÁREA/PÁGINA PARA O UTENTE

Esta é uma das principais possibilidades de evolução futura.

Criar uma página/área institucional de informação geriátrica para utentes e
cuidadores.

No futuro, o QR Code existente na folha de recomendações poderia encaminhar
para essa área.

Possíveis conteúdos:

- recomendações mais detalhadas;
- informação sobre envelhecimento saudável;
- prevenção de quedas;
- alimentação;
- atividade física;
- sono;
- memória e cognição;
- informação para cuidadores;
- exercícios;
- vídeos educativos;
- materiais descarregáveis;
- ligações para recursos institucionais;
- notícias/informações relevantes da Consulta de Geriatria.

IMPORTANTE:
Os conteúdos clínicos/institucionais deverão ser validados antes da publicação.

Esta área poderá vir a funcionar como complemento da folha personalizada
entregue durante a consulta.

---

## 15. FASE ATUAL DO PROJETO

A componente técnica principal encontra-se funcional.

Neste momento, o maior desafio já não é apenas programação.

A próxima fase deve centrar-se na transformação do projeto numa solução
institucionalmente apresentável e aprovável pela ULS Região de Aveiro.

Prioridades:

1. Consolidar o projeto atual.
2. Preparar documentação de apresentação institucional.
3. Definir claramente finalidade, vantagens e limites da aplicação.
4. Demonstrar que não são tratados dados pessoais dos utentes.
5. Definir modelo de validação e atualização dos conteúdos clínicos.
6. Definir responsáveis pelo projeto.
7. Avaliar alojamento institucional futuro.
8. Avaliar aprovação pelos serviços competentes da ULSRA.
9. Preparar demonstração/protótipo para apresentação.
10. Só posteriormente alargar utilização.

---

## 16. PRINCÍPIOS DO PROJETO

Manter:

- simplicidade;
- rapidez durante a consulta;
- ausência de dados pessoais;
- utilidade prática;
- linguagem compreensível;
- impressão simples;
- funcionamento em computador, tablet e telemóvel;
- possibilidade de utilização offline;
- conteúdos clinicamente validados;
- identidade institucional.

Evitar transformar a aplicação numa plataforma excessivamente complexa sem
necessidade.

---

## 17. GITHUB — FLUXO DE TRABALHO

Fluxo utilizado:

1. Abrir projeto no VS Code.
2. Confirmar branch `desenvolvimento`.
3. Fazer alterações.
4. Testar localmente.
5. Criar commit.
6. Fazer push para GitHub.
7. No GitHub comparar `desenvolvimento` com `main`.
8. Criar Pull Request.
9. Confirmar merge.
10. Verificar GitHub Pages.

Em setembro de 2026 foi efetuado com sucesso o Pull Request:

**Versão 1.1 - PWA, estatísticas e melhorias de impressão**

A branch `desenvolvimento` foi integrada na branch principal.

---

## 18. SEGURANÇA DA CONTA GITHUB

A autenticação de dois fatores (2FA) da conta GitHub foi ativada em setembro
de 2026.

---

## 19. REGRA PARA FUTURAS CONVERSAS COM CHATGPT

Se a conversa original do ChatGPT deixar de estar disponível:

1. Abrir uma nova conversa.
2. Explicar que se pretende continuar o projeto "Recomendações Consulta de
   Geriatria".
3. Fornecer este ficheiro `DOCUMENTACAO-PROJETO.md`.
4. Se forem necessárias alterações técnicas, fornecer também a versão atual
   dos ficheiros do projeto ou o repositório.
5. Pedir ao ChatGPT para ler primeiro esta documentação antes de sugerir
   alterações.

O ChatGPT deve preservar o trabalho existente e não reconstruir a aplicação
sem necessidade.

---

## 20. PRÓXIMO PASSO RECOMENDADO

Neste momento NÃO existe urgência em adicionar funcionalidades técnicas.

O próximo trabalho recomendado é:

**Preparar o projeto para apresentação e pedido de aprovação institucional na
ULS Região de Aveiro.**

Deverá ser preparado um documento/proposta contendo, pelo menos:

- problema identificado;
- objetivo do projeto;
- população-alvo;
- funcionamento;
- benefícios para utentes/cuidadores;
- benefícios para profissionais;
- segurança e privacidade;
- governação dos conteúdos;
- responsabilidades;
- requisitos técnicos;
- proposta de implementação piloto;
- avaliação do projeto;
- possibilidades futuras.

Depois dessa fase poderá ser desenvolvida a futura **Área do Utente**, que
servirá também de destino aos QR Codes das folhas de recomendações.

---

## 21. NOTA FINAL

Este projeto deve evoluir de forma incremental.

A aplicação técnica já existente é o protótipo funcional.

O objetivo seguinte é passar de:

**"uma aplicação que funciona"**

para:

**"um projeto clínico-digital estruturado, validado e preparado para adoção
institucional".**