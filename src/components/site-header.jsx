import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { ModeSwitcher } from '@/components/mode-switcher';

export function SiteHeader() {
	return (
		<header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container-wrapper">
				<div className="container flex h-14 items-center gap-2 md:gap-4">
					<div className="mr-4 md:flex">
						<Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
							<Icons.logo className="h-6 w-6" />
							<span className="hidden font-bold lg:inline-block">
								{siteConfig.name}
							</span>
						</Link>
					</div>
					<div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
						<nav className="flex items-center gap-0.5">
							<ModeSwitcher />
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}
