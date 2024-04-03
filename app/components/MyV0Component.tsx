/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pXBv1cD1FgR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="w-max bg-gray-100">
      <div>
        <div className="flex gap-2 px-3 py-2 text-sm font-medium">
          <ActivityIcon className="w-4 h-4" />
          Dashboard
        </div>
      </div>
      <div>
        <div className="flex gap-2 px-3 py-2 text-sm font-medium">
          <ActivityIcon className="w-4 h-4" />
          Projects
        </div>
      </div>
      <div>
        <div className="flex gap-2 px-3 py-2 text-sm font-medium">
          <ActivityIcon className="w-4 h-4" />
          Team
        </div>
      </div>
      <div>
        <div className="flex gap-2 px-3 py-2 text-sm font-medium">
          <ActivityIcon className="w-4 h-4" />
          Calendar
        </div>
      </div>
      <div>
        <div className="flex gap-2 px-3 py-2 text-sm font-medium">
          <ActivityIcon className="w-4 h-4" />
          Documents
        </div>
      </div>
    </div>
  )
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
