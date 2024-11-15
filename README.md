# 🚰 Projeto de Monitoramento de Consumo de Água

Bem-vindo ao projeto de **Monitoramento de Consumo de Água**! Esta API foi desenvolvida para ajudar na conscientização e eficiência no uso da água, alinhada com o **ODS 6: Garantir disponibilidade e manejo sustentável da água para todos**.

## 📋 Índice
- Descrição
- Funcionalidades
- Tecnologias Utilizadas
- Instalação e Execução
- Rotas da API
- Contribuições
- Licença

## 📖 Descrição
Esta API foi construída utilizando **NestJS** e permite monitorar o consumo mensal de água dos usuários. Através dela, os usuários podem registrar e visualizar seus consumos, além de receber alertas sobre o aumento no uso, promovendo práticas sustentáveis.

## ⚙️ Funcionalidades

1. **Registro de Consumo de Água**
   - Permite que os usuários registrem o consumo de água mensal, incluindo o ID do usuário, a quantidade consumida em metros cúbicos e a data da leitura.

2. **Consulta de Histórico de Consumo**
   - Permite que os usuários consultem o histórico de consumo de água, especificando um intervalo de datas.

3. **Alertas de Consumo Elevado**
   - Emite alertas para usuários que ultrapassaram o consumo em relação ao mês anterior.

## 🛠️ Tecnologias Utilizadas

- **NestJS** - Framework para a construção da API.
- **TypeORM** - ORM para gerenciamento das interações com o banco de dados.
- **SQLite** - Banco de dados para armazenamento local.
- **Postman** - Para testes de integração e validação das rotas.

## 🚀 Instalação e Execução

### Passo 1: Clone o Repositório
   
   ```bash
   git clone https://github.com/ojoseleonardo/monitoramento-agua.git
   ```

### Passo 2: Instale as Dependências

   Certifique-se de que você tenha o Node.js e o Nest CLI instalados.
   
   ```bash
   npm install
   ```

### Passo 3: Configuração do Banco de Dados

   A aplicação usa **SQLite** como banco de dados. O arquivo `database.sqlite` será gerado automaticamente na primeira execução.

### Passo 4: Execute a Aplicação

   ```bash
   npm run start
   ```

   A API estará disponível em `http://localhost:3000`.

## 📌 Rotas da API

### 1. Registro de Consumo
   - **Método:** POST
   - **URL:** /consumo
   - **Exemplo de Corpo da Requisição (JSON):**
   ```bash
     {
       "usuarioId": 1,
       "quantidade": 10.5,
       "dataLeitura": "2024-11-14"
     }
   ```

### 2. Consulta de Histórico
   - **Método:** GET
   - **URL:** /consumo/historico
   - **Parâmetros de Query:**
     - `usuarioId` (Número): ID do usuário.
     - `inicio` (Data): Data inicial no formato YYYY-MM-DD.
     - `fim` (Data): Data final no formato YYYY-MM-DD.
   - **Exemplo de Requisição:**
     ```bash
     GET /consumo/historico?usuarioId=1&inicio=2024-01-01&fim=2024-12-31
      ```

### 3. Alertas de Consumo Elevado
   - **Método:** GET
   - **URL:** /consumo/alertas
   - **Descrição:** Emite alertas caso o consumo do mês atual seja maior que o do mês anterior.

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Se você deseja colaborar, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch com a sua feature:
   ```bash
   git checkout -b feature/minha-feature
3. Commit suas alterações:
   ```bash
   git commit -m 'Adicionei minha nova feature'
4. Faça o push da branch:
   ```bash
   git push origin feature/minha-feature
5. Abra um Pull Request.

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

### 🌱 Impacto na Comunidade
```bash
Esse projeto incentiva a sustentabilidade, oferecendo uma ferramenta de monitoramento e controle do uso de água. Com isso, esperamos contribuir para a conscientização sobre a importância do uso consciente desse recurso tão precioso.
