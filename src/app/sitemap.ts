export default function sitemap() {
  return [
    {
      url: "https://emmycodes.pxxl.pro/",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
  ];
}
