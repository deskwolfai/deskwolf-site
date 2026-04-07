import type { Metadata } from "next";
import { notFound } from "next/navigation";

/**
 * TEMPORARILY DISABLED for A2P 10DLC brand verification.
 * Carriers automatically fail brands that mention affiliate programs.
 * Restore the original page from git history (commit 96c31fd or earlier)
 * after brand approval.
 */

export const metadata: Metadata = {
  title: "Not Found | DeskWolf LLC",
  robots: { index: false, follow: false },
};

export default function AffiliatePage() {
  notFound();
}
