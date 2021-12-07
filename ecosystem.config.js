module.exports = {
  apps : [{
    name: 'migu-music-api',
    script: './bin/www',
    exec_mode: 'cluster',
    instances: 'max',
    env_production: {
      NODE_ENV: "production",
      MODE: "pro"
    },
    env_development: {
      NODE_ENV: "development",
      MODE: "dev"
    }
  }],
  deploy : {
    production : {
      user : 'root',
      host : '47.97.202.238',
      ref  : 'origin/master',
      repo : 'git@github.com:yyISACoder/migu-music-api.git',
      path : '/var/webApps/migu-music-api',
      'post-setup': "npm install && pm2 start ecosystem.config.js --env production",
      'post-deploy': 'pm2 reload ecosystem.config.js --env production'
    }
  }
}