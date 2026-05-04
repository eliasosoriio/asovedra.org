import { FaUserFriends, FaCheck } from 'react-icons/fa'

export default function StaffPicker({ staff, value, onChange }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <button
        type="button"
        onClick={() => onChange('any')}
        className={`group flex items-center gap-4 rounded-xl border p-4 text-left transition ${
          value === 'any'
            ? 'border-blue-400 bg-blue-500/15'
            : 'border-white/10 bg-white/[0.04] hover:bg-white/[0.07]'
        }`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
          <FaUserFriends />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-white">Sin preferencia</div>
          <div className="text-sm text-slate-400">Asignar al primer profesional disponible</div>
        </div>
        {value === 'any' && <FaCheck className="text-blue-300" />}
      </button>

      {staff.map(s => (
        <button
          key={s.id}
          type="button"
          onClick={() => onChange(s.id)}
          className={`group flex items-center gap-4 rounded-xl border p-4 text-left transition ${
            value === s.id
              ? 'border-blue-400 bg-blue-500/15'
              : 'border-white/10 bg-white/[0.04] hover:bg-white/[0.07]'
          }`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 font-bold text-white">
            {s.full_name.split(' ').map(p => p[0]).slice(0, 2).join('')}
          </div>
          <div className="flex-1">
            <div className="font-semibold text-white">{s.full_name}</div>
            {s.role && <div className="text-sm text-slate-400">{s.role}</div>}
          </div>
          {value === s.id && <FaCheck className="text-blue-300" />}
        </button>
      ))}
    </div>
  )
}
