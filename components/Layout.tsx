import Link from 'next/link';
import { siteConfig } from '@/site-config';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { title, navLinks } = siteConfig;

  return (
    <div className="mx-auto max-w-[600px] w-full py-4">
      <header className="text-center">
        <h1 className="mb-3 font-bold">
          <Link href="/" className="text-foreground! no-underline!">
            {title}
          </Link>
        </h1>
        <nav>
          <div className="flex flex-row justify-center gap-4">
            {navLinks.map((link) => (
              <Link
                href={link.url}
                rel="noopener noreferrer"
                target={link.target}
                className="font-medium no-underline!"
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      {children}
      <footer className="text-[#c0c0c0] text-sm mt-10">
        <p>
          &copy; {new Date().getFullYear()} {title}
        </p>
      </footer>
    </div>
  );
}
