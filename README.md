# Recomendações da Consulta de Geriatria

Aplicação web de apoio à Consulta de Geriatria da ULS Região de Aveiro, desenvolvida para facilitar a seleção e geração de recomendações personalizadas a entregar ao utente após a consulta.

## Desenvolvimento

**Desenvolvimento técnico:** Mafalda Marques  
**Contexto:** Consulta de Geriatria — ULS Região de Aveiro  
**Versão atual:** 1.0

## Objetivo

A aplicação permite ao profissional de saúde selecionar recomendações de acordo com os problemas identificados durante a consulta e gerar um documento simples, legível e adequado para impressão.

O objetivo não é substituir a avaliação clínica, nem funcionar como manual de geriatria, mas disponibilizar ao utente as orientações essenciais definidas durante a consulta.

## Princípios do projeto

- Informação simples e prática.
- Recomendações dirigidas ao utente.
- Possibilidade de utilização pelo cuidador como apoio à implementação das recomendações.
- Ausência de dados pessoais do utente.
- Seleção de vários temas numa única consulta.
- Geração automática de documento para impressão.
- Conteúdos clínicos sujeitos a revisão e validação pela equipa da Consulta de Geriatria.

## Temas atualmente implementados

- Prevenção de quedas
- Obstipação
- Alimentação na Demência
- Delirium

## Estrutura da aplicação

A aplicação é constituída por:

- `index.html` — estrutura da página e seleção dos temas.
- `style.css` — apresentação gráfica, adaptação ao ecrã e impressão.
- `script.js` — conteúdos das recomendações e lógica de geração do documento.
- `images/` — logótipos e elementos gráficos utilizados na aplicação.

## Funcionalidades atuais

- Seleção de múltiplos temas.
- Organização das recomendações por áreas clínicas.
- Geração automática de recomendações.
- Versão completa quando é selecionado apenas um tema.
- Versão mais compacta quando são selecionados vários temas.
- Destaque visual de sinais de alerta.
- Checklist de acompanhamento.
- Impressão em formato A4.
- Paginação automática na impressão.
- Identificação da versão da aplicação.

## Conteúdos clínicos

Os conteúdos da aplicação são adaptados a partir de materiais e recomendações utilizados na Consulta de Geriatria.

A inclusão de um tema na aplicação não significa que o respetivo conteúdo se encontre definitivamente validado. Os conteúdos podem ser revistos e alterados de acordo com a validação da equipa clínica e com a evolução das recomendações institucionais.

## Privacidade

A aplicação foi concebida para funcionar sem recolha ou armazenamento de dados pessoais ou clínicos identificáveis dos utentes.

## Histórico de versões

### Versão 1.0 — 2026

Primeira versão funcional da aplicação.

Principais funcionalidades:
- criação da estrutura base;
- identidade visual da Consulta de Geriatria;
- geração de recomendações;
- impressão em formato A4;
- paginação automática;
- implementação inicial dos temas Quedas, Obstipação, Alimentação na Demência e Delirium.

## Desenvolvimento futuro

Está prevista a possibilidade de inclusão progressiva de novos temas e funcionalidades, de acordo com as necessidades da Consulta de Geriatria e a validação da equipa clínica.

---

Desenvolvimento técnico: Mafalda Marques  
Consulta de Geriatria — ULS Região de Aveiro