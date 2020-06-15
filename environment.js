module.exports = {
    //FIXIT por alguma razão as variaveis de ambiente não estao sendo lidas no servidor, talves eu pudesse ler no server e dar um jeito de mandar para o vue
    caminho: "dist", //Aqui será definido a pasta de saída onde contém o index.html e os outros arquivos.
    forcarHTTPS: false, //Defina para true se desejar que o redirecionamento para HTTPS seja forçado (é necessário certificado SSL ativo)
    port: process.env.PORT || 3000,
    node_env: process.env.NODE_ENV,
    // api: process.env.baseApiUrl,
    api: 'http://api-frenteprevencaocovidrn-org-br.umbler.net',
    // api: 'http://localhost:3000',
    api_local: 'http://localhost:3000',
}