module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreDevErrors: true
  },
  images: {
    domains: [
      'cdn.ady.systems',
      'ady.systems',
      'images.unsplash.com',
      'res.cloudinary.com'
    ]
  },
  experimental: {
    urlImports: [
      'https://cdn.ady.systems/',
      'https://assets.vercel.com/',
      'https://cdn.skypack.dev/'
    ]
  }
}
