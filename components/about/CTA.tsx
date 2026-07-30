import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 p-8 text-white text-center">
          <h3 className="text-2xl font-bold">Ready to get started?</h3>
          <p className="mt-2">
            Contact us for a free consultation and resources.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-lg bg-white px-6 py-3 text-orange-600 font-semibold"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
