export default function Home () {
  return (
    <div className="container max-w-[342px] mx-auto snap-start snap-mandatory scroll-smooth">
      <header className="pt-[44px]">
        <nav className="flex items-center justify-between">
          <span className="font-montserrat font-bold text-sm leading-[17px] tracking-[-0.02em] text-blue-gradient">VINÍCIUS RODRIGUES</span>
          <img src="/assets/menu.svg" alt="" />
        </nav>
      </header>
      <main className="mt-[232px] pb-56">
        <section className="text-white">
          <p className="text-blue-gradient font-montserrat font-bold leading-5 tracking-[-0.02em]">Hi, my name is</p>
          <h1 className="mt-4 font-sans font-extrabold text-[34px] leading-[46px]">Vinicius Rodrigues</h1>
          <h2 className="mt-4 font-sans font-bold text-2xl leading-[33px] tracking-[-0.02em] text-blue-gradient">Creating solutions with code</h2>
          <p className="mt-6 font-montserrat font-semibold text-xs leading-[14px] tracking-[-0.02em] text-gray-250">As a passionate technology enthusiast and <span className="text-blue-500">front-end</span> developer 
            student, I am dedicated to staying current with the latest 
            development trends and expanding my knowledge base through 
            continuous learning and experimentation with new technologies. 
            Currently, I am focused on <span className="text-blue-500">Next.js</span> and using my expertise to build 
            intuitive, effective code solutions.
          </p>
          <button className="button-properties py-3 px-4 mt-[78px]">
            Check out my projects
          </button>
            
          <img src="/assets/hero.png" alt="" className="mt-9 hero-image"/>
        </section>

        <section className="mt-[398px]">
          <h2 className="text-center font-montserrat font-bold text-[33px] leading-10 tracking-[-0.02em] text-blue-gradient">02. About</h2>
          <p className="mt-[152px] font-montserrat text-sm leading-[14px] tracking-[-0.02em] text-white leading-[20px]">
            Hi there! My name is Vinícius and I am passionate about creating 
            engaging web experiences. I have a background in System Analysis and Development 
            and have been studying Front End Development for the past two years. 
            My technical skills include technologies 
            such as  <span className="text-blue-500">React, Next.JS, and Typescript</span>.
          </p>
          <p className="mt-4 font-montserrat text-sm leading-[14px] tracking-[-0.02em] text-white leading-[20px]">
            I have experience working on personal projects, including:
          </p>
          <ol className="mt-4 ml-4 font-montserrat text-sm leading-[14px] tracking-[-0.02em] text-white leading-[20px] list-disc">
            <li className="mt-4">DopeShoe, a NextJS application that uses <span className="text-blue-500">Stripe, GraphQL (URQL),</span> Typescript, <span className="text-blue-500">Tailwind,</span> and <span className="text-blue-500">Hygraph</span></li>
            <li className="mt-4">Githubstats, a NextJS application that uses GraphQL <span className="text-blue-500">(Apollo Client)</span>, Typescript, and <span className="text-blue-500">ChakraUI</span> to search for and display statistics from a user's GitHub profile</li>
            <li className="mt-4">DevBlog, A ReactJS-based blog called DevBlog, using <span className="text-blue-500">firebase, Prismic CMS, and sass</span></li>
            <li className="mt-4">Monances A simple Finance App built with <span className="text-blue-500">HTML, CSS, and JavaScript</span></li>
          </ol>
          <p className="mt-4 font-montserrat text-sm leading-[14px] tracking-[-0.02em] text-white leading-[20px]">
            In addition to my web development experience, I am currently taking an 
            online course on Introduction to Computer Science (CS50). 
            I also have a basic knowledge of design tools like Figma and Photoshop 
            and programming languages like C, Python, and Java.
          </p>
          <p className="mt-4 font-montserrat text-sm leading-[14px] tracking-[-0.02em] text-white leading-[20px]">
            I am constantly learning and improving my skills in web development and am 
            dedicated to creating intuitive and user-friendly digital experiences.
          </p>

          <div className="flex justify-center">
            <img src="/assets/avatar.png" alt="Vinícius Rodrigues" className="mt-14"/>
          </div>
        </section>
      </main>
    </div>
  )
}