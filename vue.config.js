module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? (process.env.SITE_SUB_FOLDER || '/')
      : '/'
};
