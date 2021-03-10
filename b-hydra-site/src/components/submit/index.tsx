import clsx from 'clsx'
import s from './submit.module.css'

const Submit = ({ disabled = false }) => {
  return (
    <span
      className={clsx(
        'inline-block bg-black rounded-lg dark:bg-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black dark:ring-offset-black dark:focus-within:ring-white',
        { 'opacity-50': disabled }
      )}
    >
      <button
        type="submit"
        disabled={disabled}
        className={clsx(
          'h-12 px-4 disabled:cursor-wait transition-transform focus:outline-none font-bold text-white bg-gray-800 rounded-lg dark:bg-opacity-100 dark:text-black dark:bg-white',
          s.button
        )}
      >
        Create Repo 🚀
      </button>
    </span>
  )
}

export default Submit
