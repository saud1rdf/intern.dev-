import fs from 'fs';
import path from 'path';

// قراءة محتوى ملف المهمة من مجلد content/tasks
function getTaskContent(slug: string): string | null {
  const tasksDir = path.join(process.cwd(), 'content', 'tasks');
  const filePath = path.join(tasksDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  return fs.readFileSync(filePath, 'utf8');
}

// استخدمنا any هنا عشان نريح TypeScript مؤقتًا
export default function TaskDetailPage(props: any) {
  const slug = props?.params?.slug as string | undefined;
  const content = slug ? getTaskContent(slug) : null;

  if (!slug || !content) {
    return (
      <main className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-xl font-semibold mb-4">Task not found</h1>
        <p className="text-sm text-gray-500">
          No task file was found for this slug in <code>content/tasks</code>.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <article className="prose prose-neutral max-w-none">
        <pre className="whitespace-pre-wrap text-sm leading-relaxed bg-gray-50 p-4 rounded-lg border">
          {content}
        </pre>
      </article>
    </main>
  );
}

