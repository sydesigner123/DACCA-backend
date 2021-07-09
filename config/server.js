module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("PUBLIC_URL"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "f7495ea5a70d3625399d4efbf2071de6"),
    },
  },
});
