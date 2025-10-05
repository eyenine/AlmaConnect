import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
  batch: string
  department: string
  company: string
  location: string
  bio: string
}

export function EditProfilePage() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormValues>({
    defaultValues: {
      name: 'Jane Doe',
      batch: '2018',
      department: 'Computer Science',
      company: 'Tech Corp',
      location: 'Bengaluru, IN',
      bio: 'Alumni mentor. Frontend engineer passionate about education and community building.',
    }
  })

  function onSubmit(values: FormValues) {
    console.log('profile update', values)
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold">Edit Profile</h1>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm mb-1">Full name</label>
          <input className="w-full rounded-md border bg-background px-3 py-2" {...register('name')} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Batch year</label>
            <input className="w-full rounded-md border bg-background px-3 py-2" {...register('batch')} />
          </div>
          <div>
            <label className="block text-sm mb-1">Department</label>
            <input className="w-full rounded-md border bg-background px-3 py-2" {...register('department')} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Company</label>
            <input className="w-full rounded-md border bg-background px-3 py-2" {...register('company')} />
          </div>
          <div>
            <label className="block text-sm mb-1">Location</label>
            <input className="w-full rounded-md border bg-background px-3 py-2" {...register('location')} />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1">Bio</label>
          <textarea rows={4} className="w-full rounded-md border bg-background px-3 py-2" {...register('bio')} />
        </div>
        <div className="flex justify-end gap-2">
          <a className="rounded-md border px-3 py-2 text-sm" href="/profile/you">Cancel</a>
          <button disabled={isSubmitting} className="rounded-md border bg-primary text-primary-foreground px-3 py-2 text-sm" type="submit">Save changes</button>
        </div>
      </form>
    </div>
  )
}
