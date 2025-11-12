import Navbar from "../../components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen bg-gray-50 "
      style={{ fontFamily: "Nunito Sans, sans-serif" }}
    >
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
