import { useState } from 'react';
import { z } from 'zod';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';
import { Button } from '../components/ui/button';
import { useI18n } from '../context/i18n';

const formSchema = z.object({ release: z.string().min(2).max(30), owner: z.string().min(2).max(50), window: z.enum(['standard', 'quiet', 'emergency']) });
type FormState = z.infer<typeof formSchema>;
export function Details() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>({ release: 'v2.8.0', owner: 'Platform team', window: 'standard' });
  const [message, setMessage] = useState('');
  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value } as FormState));
  const submit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); const result = formSchema.safeParse(form); setMessage(result.success ? t('saved') : 'Please use valid release and owner names.'); };
  return <div className="mx-auto max-w-3xl space-y-8"><div><Link to="/" className="mb-6 inline-flex items-center text-sm font-semibold text-slate-500 hover:text-signal"><ArrowLeft className="me-2" size={16} />Dashboard</Link><h1 className="text-3xl font-black">{t('details')}</h1><p className="mt-2 text-slate-500">Configure the context used in your release review.</p></div><Card><CardHeader><CardTitle>Evaluation context</CardTitle><CardDescription>These fields are validated locally with Zod before saving.</CardDescription></CardHeader><CardContent><form onSubmit={submit} className="space-y-5"><label className="block space-y-2 text-sm font-semibold">Release identifier<Input value={form.release} onChange={(event) => update('release', event.target.value)} /></label><label className="block space-y-2 text-sm font-semibold">Release owner<Input value={form.owner} onChange={(event) => update('owner', event.target.value)} /></label><label className="block space-y-2 text-sm font-semibold">Deployment window<Select value={form.window} onChange={(event) => update('window', event.target.value)}><option value="standard">Standard business hours</option><option value="quiet">Quiet hours</option><option value="emergency">Emergency change</option></Select></label><div className="flex items-center justify-between pt-3"><span className="text-sm text-signal">{message}</span><Button type="submit"><Save className="me-2" size={16} />{t('save')}</Button></div></form></CardContent></Card></div>;
}