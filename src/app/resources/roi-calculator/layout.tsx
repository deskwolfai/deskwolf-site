import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Calculator | DeskWolf LLC",
  description:
    "Calculate how much revenue your business loses to missed calls and see exactly what DeskWolf AI would recover. Free, instant results.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
