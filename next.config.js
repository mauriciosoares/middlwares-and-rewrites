module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/bar",
        destination: "/foo/bar",
      },
    ];
  },
};
