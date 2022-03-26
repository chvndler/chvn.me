module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreDevErrors: true,
  },
  images: {
    loader: 'custom',
    nextImageExportOptimizer: {
      imageFolderPath: 'public/images',
      exportFolderPath: 'out',
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      quality: 75,
    },
    domains: ['cdn.ady.systems', 'ady.systems', 'i.scdn.co', 'images.unsplash.com', 'res.cloudinary.com'],
  },
  experimental: {
    urlImports: ['https://unpkg.com/', 'https://cdn.ady.systems/', 'https://assets.vercel.com/', 'https://cdn.skypack.dev/'],
  },
  env: {
    storePicturesInWEBP: true,
  },
};
