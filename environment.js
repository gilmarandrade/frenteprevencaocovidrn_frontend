module.exports = {
    caminho: "dist", //Aqui será definido a pasta de saída onde contém o index.html e os outros arquivos.
    forcarHTTPS: false, //Defina para true se desejar que o redirecionamento para HTTPS seja forçado (é necessário certificado SSL ativo)
    port: process.env.PORT || 3000,
    node_env: process.env.NOMDE_ENV,
    api: process.env.baseApiUrl,
    api_local: 'http://localhost:3000',
}