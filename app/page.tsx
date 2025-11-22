import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-semibold mb-4">intern.dev</h1>
      <p className="mb-6 text-sm text-gray-600">
        منصة لمساعدة المتدربين من تخصص Computer Science على تنفيذ المهام التقنية المطلوبة منهم في الشركات
        مع شروحات متقدمة ومهام حقيقية.
      </p>

      <Link
        href="/tasks"
        className="inline-flex items-center px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50"
      >
        اذهب إلى المهام التقنية
      </Link>
    </main>
  );
}
