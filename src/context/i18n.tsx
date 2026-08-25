import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Locale = 'en' | 'ar';
type Dictionary = Record<string, string>;
const dictionaries: Record<Locale, Dictionary> = {
  en: { dashboard: 'Release cockpit', subtitle: 'A calm, evidence-based decision for your next deploy.', details: 'Signal details', ready: 'Ready to ship', review: 'Review before shipping', score: 'Readiness score', quality: 'Quality signals', reliability: 'Reliability', observability: 'Observability', rollback: 'Rollback confidence', last: 'Last evaluated', updated: 'Updated just now', language: 'العربية', theme: 'Theme', recommendation: 'Recommendation', recommendationText: 'Your core signals are healthy. Confirm the rollback drill before production.', save: 'Save evaluation', saved: 'Evaluation saved', choose: 'Choose status', excellent: 'Excellent', watch: 'Needs attention' },
  ar: { dashboard: 'لوحة جاهزية الإصدار', subtitle: 'قرار هادئ مبني على الأدلة لنشرك القادم.', details: 'تفاصيل الإشارات', ready: 'جاهز للنشر', review: 'راجع قبل النشر', score: 'درجة الجاهزية', quality: 'إشارات الجودة', reliability: 'الاعتمادية', observability: 'قابلية المراقبة', rollback: 'الثقة بالتراجع', last: 'آخر تقييم', updated: 'تم التحديث الآن', language: 'English', theme: 'المظهر', recommendation: 'التوصية', recommendationText: 'الإشارات الأساسية جيدة. تأكد من اختبار التراجع قبل الإنتاج.', save: 'حفظ التقييم', saved: 'تم حفظ التقييم', choose: 'اختر الحالة', excellent: 'ممتاز', watch: 'يحتاج انتباهاً' }
};
const I18nContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void; t: (key: string) => string } | undefined>(undefined);
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  useEffect(() => { document.documentElement.lang = locale; document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'; document.documentElement.classList.toggle('font-arabic', locale === 'ar'); }, [locale]);
  const t = (key: string) => dictionaries[locale][key] || key;
  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}
export function useI18n() { const context = useContext(I18nContext); if (!context) throw new Error('useI18n must be used inside I18nProvider'); return context; }