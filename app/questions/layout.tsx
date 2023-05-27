import LayoutComponent from '@/components/LayoutComponent';

export default function QuestionsLayout({
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
