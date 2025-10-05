import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type FormValues = z.infer<typeof schema>

export function LoginPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  function onSubmit(values: FormValues) {
    console.log('login submit', values)
  }

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl font-semibold">Login</h1>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input className="w-full rounded-md border bg-background px-3 py-2" type="email" {...register('email')} />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input className="w-full rounded-md border bg-background px-3 py-2" type="password" {...register('password')} />
          {errors.password && <p className="text-sm text-destructive mt-1">{errors.password.message}</p>}
        </div>
        <button disabled={isSubmitting} className="rounded-md border bg-primary text-primary-foreground px-3 py-2 disabled:opacity-50" type="submit">
          Sign in
        </button>
      </form>
    </div>
  )
}
