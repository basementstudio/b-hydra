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
        <header className="sticky top-0 px-8 py-8 mb-2 bg-white dark:bg-gray-900">
          <Logo />
          <div className="absolute w-full h-4 pointer-events-none bg-gradient-to-b from-white dark:from-gray-900 to-transparent -bottom-4" />
        </header>
        <div className="px-8">
          <p className="max-w-xs mb-12 text-lg font-display">
            A dynamic template for kickstarting your Next.js project.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
                  id: `${d.id}-${value}`
                }))}
              />
            ))}
            <div>
              <p className="mb-3 text-lg font-display">Repository</p>
              <div className="space-y-2">
                <button
                  className="flex items-center h-10 px-3 space-x-1 bg-gray-700 rounded-md"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>Continue with GitHub</span>
                </button>
              </div>
            </div>
            <Submit disabled={formState.isSubmitting} />
          </form>
        </div>
      </main>
      <aside className="items-center justify-center flex-grow hidden h-screen p-8 bg-black lg:flex">
        <Image
          src="/hydra.svg"
          loading="eager"
          width={500}
          height={500}
          alt="Hydra"
        />
      </aside>
    </section>
  )
}

export default HomePage
