// app/coordinator/access/page.tsx
import CoordsLog from "@/components/CoordsLog"; // Adjust path to where you saved the component

export const metadata = {
  title: "Coordinator Portal | Admin Only",
  description: "Restricted access for event coordinators.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CoordinatorPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <CoordsLog />
    </main>
  );
}