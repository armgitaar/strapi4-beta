module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '869ae6fc02df487a964c4f887bbe2329'),
  },
});
