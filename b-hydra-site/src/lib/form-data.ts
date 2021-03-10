export type FormId = 'language' | 'styling' | 'animations' | 'cms'

export type FormItem = {
  label: string
  id: FormId
  items: { label: string; value: string }[]
}

const formData: FormItem[] = [
  {
    id: 'language',
    label: 'Language',
    items: [
      { label: 'TypeScript', value: 'ts' },
      { label: 'JavaScript', value: 'js' }
    ]
  },
  {
    id: 'styling',
    label: 'Styling',
    items: [
      { label: 'Tailwindcss', value: 'tailwindcss' },
      { label: 'styled-components', value: 'styled-components' },
      { label: 'None 🤔', value: 'none' }
    ]
  },
  {
    id: 'animations',
    label: 'Animations',
    items: [
      { label: 'Gsap', value: 'gsap' },
      { label: 'react-spring', value: 'react-spring' },
      { label: 'framer-motion', value: 'framer-motion' },
      { label: 'None 😭', value: 'none' }
    ]
  },
  {
    id: 'cms',
    label: 'CMS',
    items: [
      { label: 'Contentful', value: 'contentful' },
      { label: 'DatoCMS', value: 'dato' },
      { label: 'None', value: 'none' }
    ]
  }
]

export { formData }
