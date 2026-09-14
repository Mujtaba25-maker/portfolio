import { ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-[#08111f] px-5 text-center light:bg-[#f5f7fb]">
      <div className="glass max-w-xl rounded-lg p-8">
        <p className="text-sm font-black uppercase text-blue-200 light:text-blue-700">404 page</p>
        <h1 className="mt-4 text-5xl font-black text-white light:text-slate-950">Page not found</h1>
        <p className="mt-4 leading-8 text-slate-300 light:text-slate-600">
          The page you opened does not exist. Return to the portfolio home page.
        </p>
        <a href="/" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 font-black text-white">
          <ArrowLeft size={18} />
          Back Home
        </a>
      </div>
    </section>
  );
}

export default NotFound;
