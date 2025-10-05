import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  code: z.string().min(6).max(6),
})

type FormValues = z.infer<typeof schema>

export function VerifyPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  function onSubmit(values: FormValues) {
    console.log('verify submit', values)
  }

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl font-semibold">Verify your email</h1>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm mb-1">6-digit code</label>
          <input className="w-full rounded-md border bg-background px-3 py-2 tracking-widest" inputMode="numeric" maxLength={6} {...register('code')} />
          {errors.code && <p className="text-sm text-destructive mt-1">{errors.code.message}</p>}
        </div>
        <button disabled={isSubmitting} className="rounded-md border bg-primary text-primary-foreground px-3 py-2 disabled:opacity-50" type="submit">
          Verify
        </button>
      </form>
    </div>
  )
}
