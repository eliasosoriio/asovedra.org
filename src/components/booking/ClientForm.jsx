import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'

const schema = z.object({
  client_first_name: z.string().trim().min(2, 'Introduce tu nombre'),
  client_last_name: z.string().trim().min(2, 'Introduce tus apellidos'),
  client_email: z.string().trim().email('Email no válido'),
  client_phone: z.string().trim().min(6, 'Teléfono no válido'),
  reason: z.string().trim().max(500, 'Máximo 500 caracteres').optional(),
  privacy_accepted: z.literal(true, { errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }) })
})

const inputCls =
  'w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-400'

export default function ClientForm({ submitting, onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-slate-300">Nombre *</label>
          <input className={inputCls} {...register('client_first_name')} />
          {errors.client_first_name && <p className="mt-1 text-xs text-red-300">{errors.client_first_name.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Apellidos *</label>
          <input className={inputCls} {...register('client_last_name')} />
          {errors.client_last_name && <p className="mt-1 text-xs text-red-300">{errors.client_last_name.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Correo electrónico *</label>
          <input type="email" className={inputCls} {...register('client_email')} />
          {errors.client_email && <p className="mt-1 text-xs text-red-300">{errors.client_email.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Teléfono *</label>
          <input type="tel" className={inputCls} {...register('client_phone')} />
          {errors.client_phone && <p className="mt-1 text-xs text-red-300">{errors.client_phone.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-slate-300">Motivo de la cita <span className="text-slate-500">(opcional)</span></label>
          <textarea
            rows={3}
            placeholder="Cuéntanos brevemente el motivo o asunto que quieres tratar"
            className={inputCls + ' resize-none'}
            {...register('reason')}
          />
          {errors.reason && <p className="mt-1 text-xs text-red-300">{errors.reason.message}</p>}
        </div>
      </div>
      <label className="mt-2 flex items-start gap-3 text-sm text-slate-200">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-blue-500"
          {...register('privacy_accepted')}
        />
        <span>
          He leído y acepto la{' '}
          <Link to="/politica-privacidad" target="_blank" rel="noopener" className="text-blue-300 underline hover:text-blue-200">
            política de privacidad
          </Link>{' '}
          y autorizo el tratamiento de mis datos para gestionar la cita. *
        </span>
      </label>
      {errors.privacy_accepted && <p className="-mt-2 text-xs text-red-300">{errors.privacy_accepted.message}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:opacity-60"
      >
        {submitting ? 'Confirmando…' : 'Confirmar cita'}
      </button>
    </form>
  )
}
