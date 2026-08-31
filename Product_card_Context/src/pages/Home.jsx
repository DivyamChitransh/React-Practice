import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Welcome to My Store
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            Find Everything You Need
            <span className="block text-blue-600">
              In One Place
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
            Discover amazing products at great prices.
            Shop easily and get your favorite products delivered to you.
          </p>

          <div className="mt-8">
            <Link
              to="/products"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Shop Now →
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
        
        <div className="rounded-xl bg-white p-6 text-center shadow-sm">
          <div className="mb-4 text-4xl">🚚</div>

          <h3 className="text-xl font-semibold text-gray-900">
            Fast Delivery
          </h3>

          <p className="mt-2 text-gray-600">
            Get your products delivered quickly and safely.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 text-center shadow-sm">
          <div className="mb-4 text-4xl">💳</div>

          <h3 className="text-xl font-semibold text-gray-900">
            Easy Payments
          </h3>

          <p className="mt-2 text-gray-600">
            Simple and convenient shopping experience.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 text-center shadow-sm">
          <div className="mb-4 text-4xl">⭐</div>

          <h3 className="text-xl font-semibold text-gray-900">
            Quality Products
          </h3>

          <p className="mt-2 text-gray-600">
            Explore a wide range of quality products.
          </p>
        </div>

      </section>
    </div>
  );
}

export default Home;