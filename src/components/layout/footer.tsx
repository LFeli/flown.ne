import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { Button } from '../ui/button'

export function SiteFooter() {
  return (
    <footer className="flex items-center justify-center rounded-br-md rounded-bl-md bg-primary p-6 text-green-50">
      <span>
        Made with ❤️ by{' '}
        <Button variant={'link'} size={'sm'} className="px-0" asChild>
          <Link
            href={siteConfig.author.github}
            target="_blank"
            className="text-zinc-50"
          >
            Lfeli
          </Link>
        </Button>
      </span>
    </footer>
  )
}
