import Logo from 'components/logo'
import RadioGroup from 'components/radio-group'
import Submit from 'components/submit'
import { FormId, formData } from 'lib/form-data'
import Image from 'next/image'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type Form = Record<FormId, string>

const HomePage = () => {
  const { register, handleSubmit, formState } = useForm<Form>()

  const onSubmit = useCallback(async (data: Form) => {
    async function submit() {
      const res = await fetch('/api/create-repo', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (res.status !== 200) {
        throw new Error()
      }
    }
    await toast.promise(submit(), {
      loading: 'Getting everything ready...',
      success: 'Your repo has been created!',
      error: 'There has been an error.'
    })
  }, [])

  return (
    <section className="flex items-stretch bg-black">
      <main className="h-screen pb-8 mx-auto overflow-auto text-black transition-colors bg-white lg:min-w-form lg:max-w-form dark:bg-gray-900 dark:text-white">
        <header className="sticky top-0 px-8 py-8 mb-4 space-y-8 bg-white dark:bg-gray-900">
          <Logo />
          <p className="max-w-xs text-lg font-display">
            A dynamic template for kickstarting your Next.js project.
          </p>
          <div className="absolute w-full h-5 pointer-events-none bg-gradient-to-b from-white dark:from-gray-900 to-transparent -bottom-5" />
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="px-8 space-y-8">
          {formData.map((d) => (
            <RadioGroup
              key={d.id}
              label={d.label}
              name={d.id}
              items={d.items.map(({ label, value }) => ({
                label,
                value,
                ref: register,
                required: true,
                id: value
              }))}
            />
          ))}
          <Submit disabled={formState.isSubmitting} />
        </form>
      </main>
      <aside className="items-center justify-center flex-grow hidden h-screen p-8 bg-black lg:flex">
        <Image
          src="/hydra.png"
          loading="eager"
          width={711}
          height={502}
          alt="Hydra"
        />
      </aside>
    </section>
  )
}

export default HomePage
