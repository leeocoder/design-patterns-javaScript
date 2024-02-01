/*
O Builder permite que você construa objetos complexos sem ter que criar uma classe específica para cada configuração possível do objeto.
Em vez disso, você usa um construtor (o Builder) para definir as diferentes partes do objeto e, eventualmente, criar o objeto final.

Benefícios:

- Flexibilidade: Permite criar objetos com diferentes configurações sem ter que criar várias classes.
- Legibilidade: Torna o código mais legível, pois você pode ver claramente quais etapas estão envolvidas na construção do objeto.
- Encapsulamento: Isola o código de construção do código do objeto, tornando as alterações no processo de construção mais fáceis de gerenciar.

*/

class ServerConfig {
    constructor() {
      this.host = '';
      this.port = 0;
      this.protocol = 'http';
      this.timeout = 5000;
      this.maxConnections = 10;
    }
  }
  
  class ServerConfigBuilder {
    constructor() {
      this.config = new ServerConfig();
    }
  
    setHost(host) {
      this.config.host = host;
      return this;
    }
  
    setPort(port) {
      this.config.port = port;
      return this;
    }
  
    setProtocol(protocol) {
      this.config.protocol = protocol;
      return this;
    }
  
    setTimeout(timeout) {
      this.config.timeout = timeout;
      return this;
    }
  
    setMaxConnections(maxConnections) {
      this.config.maxConnections = maxConnections;
      return this;
    }
  
    build() {
      return this.config;
    }
  }
  
  // Exemplo de uso
  const serverConfig = new ServerConfigBuilder()
    .setHost('localhost')
    .setPort(3000)
    .setProtocol('https')
    .setTimeout(10000)
    .setMaxConnections(20)
    .build();
  
  console.log(serverConfig);
  
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------


  class QueryBuilder {
    constructor() {
      this.query = '';
    }
  
    select(fields) {
      this.query += `SELECT ${fields} `;
      return this;
    }
  
    from(table) {
      this.query += `FROM ${table} `;
      return this;
    }
  
    where(condition) {
      this.query += `WHERE ${condition} `;
      return this;
    }
  
    orderBy(field, order) {
      this.query += `ORDER BY ${field} ${order} `;
      return this;
    }
  
    build() {
      return this.query.trim(); // Remover espaços extras
    }
  }
  
  // Exemplo de uso
  const query = new QueryBuilder()
    .select('id, name, age')
    .from('users')
    .where('age > 18')
    .orderBy('name', 'ASC')
    .build();
  
  console.log(query);
  