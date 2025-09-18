interface Feature {
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    title: "Server-Side Rendering",
    description: "Improve SEO and performance with automatic server-side rendering",
    icon: "🚀"
  },
  {
    title: "Static Site Generation",
    description: "Generate static pages at build time for lightning-fast loading",
    icon: "⚡"
  },
  {
    title: "TypeScript Support",
    description: "Built-in TypeScript support for better development experience",
    icon: "📝"
  },
  {
    title: "API Routes",
    description: "Create API endpoints easily with built-in API routes",
    icon: "🔗"
  },
  {
    title: "Image Optimization",
    description: "Automatic image optimization for better performance",
    icon: "🖼️"
  },
  {
    title: "File-based Routing",
    description: "Intuitive routing system based on file structure",
    icon: "📁"
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Next.js?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Next.js provides everything you need to build modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}