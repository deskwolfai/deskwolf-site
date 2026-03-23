import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missed Call Revenue Calculator | DeskWolf LLC",
  description:
    "Find out exactly how much money your business loses to missed calls every week, month, and year. Free calculator, no signup required.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
