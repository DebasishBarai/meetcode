import LayoutComponent from '@/components/LayoutComponent';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <LayoutComponent />
      {children}
    </section>
  );
}
