module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  async rewrites() {
    return [
      {
        source: "/customized-url",
        destination: "/underscore_path/file_name",
      },
    ];
  },
};
