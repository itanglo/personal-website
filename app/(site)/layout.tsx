import Nav from "@/components/Nav";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col py-8 px-8 min-h-dvh text-xl">
      <Nav />
      {children}
    </div>
  );
}