module.exports = {
apps:[
    {
        name: "syntegra-web",
        script: "npm",
        args: "start",
        watch: true,
        env:{
            NODE_ENV: 'production',
            PORT: 3000,
        }
    }
]
}