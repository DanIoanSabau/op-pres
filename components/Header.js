import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import headerNavLinks from '@/data/headerNavLinks'
import MobileNav from '@/components/MobileNav'

const Header = () => {
  return (
    <header className="sticky top-0 flex w-full max-w-7xl items-center justify-center py-8 sm:w-3/4 sm:justify-between">
      <div>
        <Link href="/" aria-label={siteMetadata.siteName}>
          {/* icon + site = logo */}
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            <div className="text-2xl font-semibold">{siteMetadata.siteName}</div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
