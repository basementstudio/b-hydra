import Logo from 'components/logo'
import Image from 'next/image'

const HomePage = () => (
  <section className="flex items-stretch">
    <main className="min-h-screen p-8 mx-auto text-black transition-colors bg-white lg:min-w-form max-w-form dark:bg-black dark:bg-opacity-90 dark:text-white">
      <header>
        <Logo />
        <p>A dynamic templatefor kickstarting your Next.js project.</p>
      </header>
      <form>
        <h3>Language</h3>
        <div>
          <div>
            <input type="radio" />
            <label>TypeScript</label>
          </div>
          <div>
            <input type="radio" />
            <label>JavaScript</label>
          </div>
        </div>
      </form>
    </main>
    <aside className="items-center justify-center flex-grow hidden p-8 bg-black lg:flex">
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

export default HomePage
