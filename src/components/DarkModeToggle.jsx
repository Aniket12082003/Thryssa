import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const shouldUseDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
		setIsDark(shouldUseDark);
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		if (isDark) {
			root.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			root.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [isDark]);

	return (
		<div className="cursor-pointer" onClick={() => setIsDark(prev => !prev)}>
			{isDark ? (
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
					className="lucide lucide-sun-icon">
					<circle cx="12" cy="12" r="4" />
					<path d="M12 2v2" /><path d="M12 20v2" />
					<path d="m4.93 4.93 1.41 1.41" />
					<path d="m17.66 17.66 1.41 1.41" />
					<path d="M2 12h2" /><path d="M20 12h2" />
					<path d="m6.34 17.66-1.41 1.41" />
					<path d="m19.07 4.93-1.41 1.41" />
				</svg>
			) : (
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
					className="lucide lucide-moon-icon">
					<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
				</svg>
			)}
		</div>
	);
}
