import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { LightRays } from "../ui/light-rays";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contato</span>
      </div>
      <LightRays color="rgba(121,215,253, 0.25)" />
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Vamos conversar?
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          victor.montroze@gmail.com
        </p>
      </div>
    </div>
  );
}
