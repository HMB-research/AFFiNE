// Convenient way to map environment variables to config values.
AFFiNE.ENV_MAP = {
  AFFINE_SERVER_PORT: ['port', 'int'],
  AFFINE_SERVER_HOST: 'host',
  AFFINE_SERVER_SUB_PATH: 'path',
  AFFINE_SERVER_HTTPS: ['https', 'boolean'],
  DATABASE_URL: 'db.url',
  ENABLE_CAPTCHA: ['auth.captcha.enable', 'boolean'],
  CAPTCHA_TURNSTILE_SECRET: ['auth.captcha.turnstile.secret', 'string'],
  OAUTH_GOOGLE_ENABLED: ['auth.oauthProviders.google.enabled', 'boolean'],
  OAUTH_GOOGLE_CLIENT_ID: 'auth.oauthProviders.google.clientId',
  OAUTH_GOOGLE_CLIENT_SECRET: 'auth.oauthProviders.google.clientSecret',
  OAUTH_GITHUB_ENABLED: ['auth.oauthProviders.github.enabled', 'boolean'],
  OAUTH_GITHUB_CLIENT_ID: 'auth.oauthProviders.github.clientId',
  OAUTH_GITHUB_CLIENT_SECRET: 'auth.oauthProviders.github.clientSecret',
  OAUTH_EMAIL_LOGIN: 'auth.email.login',
  OAUTH_EMAIL_SENDER: 'auth.email.sender',
  OAUTH_EMAIL_SERVER: 'auth.email.server',
  OAUTH_EMAIL_PORT: ['auth.email.port', 'int'],
  OAUTH_EMAIL_PASSWORD: 'auth.email.password',
  THROTTLE_TTL: ['rateLimiter.ttl', 'int'],
  THROTTLE_LIMIT: ['rateLimiter.limit', 'int'],
  REDIS_SERVER_HOST: 'plugins.redis.host',
  REDIS_SERVER_PORT: ['plugins.redis.port', 'int'],
  REDIS_SERVER_USER: 'plugins.redis.username',
  REDIS_SERVER_PASSWORD: 'plugins.redis.password',
  REDIS_SERVER_DATABASE: ['plugins.redis.db', 'int'],
  DOC_MERGE_INTERVAL: ['doc.manager.updatePollInterval', 'int'],
  DOC_MERGE_USE_JWST_CODEC: [
    'doc.manager.experimentalMergeWithYOcto',
    'boolean',
  ],
  ENABLE_LOCAL_EMAIL: ['auth.localEmail', 'boolean'],
  STRIPE_API_KEY: 'plugins.payment.stripe.keys.APIKey',
  STRIPE_WEBHOOK_KEY: 'plugins.payment.stripe.keys.webhookKey',
  FEATURES_EARLY_ACCESS_PREVIEW: ['featureFlags.earlyAccessPreview', 'boolean'],
  FEATURES_SYNC_CLIENT_VERSION_CHECK: [
    'featureFlags.syncClientVersionCheck',
    'boolean',
  ],
};
