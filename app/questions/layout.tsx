import LayoutComponent from '@/components/LayoutComponent';

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      {/* LayoutComponent is kept below {children} so that the LayoutComponent is shown above the Editor component in questions/id page */}
      <LayoutComponent />
    </section>
  );
}
