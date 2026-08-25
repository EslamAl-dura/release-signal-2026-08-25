import { createRootRoute, createRoute, createRouter, Link, Outlet } from '@tanstack/react-router';
import { Moon, Sun, Activity, Settings2, Languages } from 'lucide-react';
import { Button } from './components/ui/button';
import { useTheme } from './context/theme';
import { useI18n } from './context/i18n';
import { Dashboard } from './pages/dashboard';
import { Details } from './pages/details';

function Shell() {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();
  return <div className="min-h-screen bg-canvas text-ink dark:bg-slate-950 dark:text-slate-100"><header className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"><Link to="/" className="flex items-center gap-3"><span className="rounded-xl bg-signal p-2 text-white"><Activity size={20} /></span><span className="font-bold tracking-tight">Release Signal</span></Link><nav className="flex items-center gap-2"><Link to="/details" className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 sm:flex"><Settings2 size={16} />{t('details')}</Link><Button variant="ghost" aria-label={t('theme')} onClick={toggleTheme}>{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}</Button><Button variant="ghost" onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}><Languages size={17} /><span className="ms-2 text-xs">{t('language')}</span></Button></nav></div></header><main className="mx-auto max-w-6xl px-5 py-10"><Outlet /></main></div>;
}
const rootRoute = createRootRoute({ component: Shell });
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Dashboard });
const detailsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/details', component: Details });
const routeTree = rootRoute.addChildren([indexRoute, detailsRoute]);
export const router = createRouter({ routeTree });
declare module '@tanstack/react-router' { interface Register { router: typeof router } }