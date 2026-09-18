import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

/**
 * Reusable ProjectCard Component (composed from Card + Badge + Button)
 * 
 * Props:
 *   - `title` (string): Project title
 *   - `status` (string): Status text for the Badge
 *   - `statusVariant` (string): Variant for the Badge ('default' | 'secondary' | 'outline')
 *   - `description` (string): Project description
 *   - `tags` (string[]): Tech stack tags
 *   - `projectUrl` (string): Destination project link
 */
export function ProjectCard({
  title,
  status = 'Active',
  statusVariant = 'secondary',
  description,
  tags = [],
  projectUrl = '#',
}) {
  const handleView = () => {
    if (projectUrl && projectUrl !== '#') {
      window.open(projectUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Card className="flex flex-col justify-between rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200">
      <CardHeader className="p-0 gap-2 pb-4">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {title}
          </CardTitle>
          <Badge
            variant={statusVariant}
            className="capitalize text-xs font-semibold px-2 py-0.5"
          >
            {status}
          </Badge>
        </div>
        {description && (
          <CardDescription className="text-sm text-gray-700 dark:text-gray-300 leading-normal">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      {tags && tags.length > 0 && (
        <CardContent className="p-0 pb-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      )}

      <CardFooter className="p-0 pt-4 border-t border-gray-100 dark:border-gray-800">
        <Button
          variant="default"
          size="sm"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-medium hover:scale-105 active:scale-95 transition-all duration-200"
          onClick={handleView}
        >
          View project
        </Button>
      </CardFooter>
    </Card>
  )
}
