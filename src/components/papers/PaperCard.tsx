import type { Paper } from '@/types/paper';

type PaperCardProps = Pick<Paper, 'year' | 'branch' | 'semester' | 'examType' | 'fileName' | 'url'>;

export default function PaperCard({
  year,
  branch,
  semester,
  examType,
  fileName,
  url,
}: PaperCardProps) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4">
        <h3 className="font-medium text-gray-900">{fileName}</h3>
        <p className="text-sm text-gray-500">{year}</p>
      </div>
      
      <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
        {branch && (
          <div>
            <span className="text-gray-500">Branch:</span>
            <span className="ml-1 font-medium">{branch}</span>
          </div>
        )}
        {semester && (
          <div>
            <span className="text-gray-500">Semester:</span>
            <span className="ml-1 font-medium">{semester}</span>
          </div>
        )}
        {examType && (
          <div>
            <span className="text-gray-500">Exam:</span>
            <span className="ml-1 font-medium">{examType}</span>
          </div>
        )}
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
      >
        View Paper
      </a>
    </div>
  );
} 