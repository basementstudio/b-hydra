type Props = {
  label: string
  name: string
  items: {
    label: string
    value: string
    id: string
    required?: boolean
    ref?: JSX.IntrinsicElements['input']['ref']
  }[]
}

const RadioGroup = ({ label, name, items }: Props) => {
  return (
    <div>
      <p className="mb-3 text-lg font-display">{label}</p>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center">
            <input type="radio" name={name} {...item} />
            <label htmlFor={item.id} className="pl-2 text-sm font-semibold">
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RadioGroup
