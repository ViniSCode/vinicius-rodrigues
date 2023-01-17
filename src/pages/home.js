export default function Home () {
  return (
    <div className="container snap-start snap-mandatory scroll-smooth mx-auto">
      <div className="menu-bg-blue-gradient fixed top-0 left-0 right-0 shadow-sm z-[20]">
        <header className="pt-[22px] pb-[22px] w-full max-w-[358px] px-4 mx-auto">
          <nav className="flex items-center justify-between">
            <span className="font-montserrat font-bold text-sm leading-[17px] tracking-[-0.02em] text-blue-gradient">VINÍCIUS RODRIGUES</span>
            <img src="/assets/menu.svg" alt="" />
          </nav>
        </header>
      </div>

      <main className="mt-[132px] pb-56 max-w-[358px] px-4 mx-auto">
        <section className="text-white">
          <p className="text-blue-gradient font-montserrat font-bold leading-5 tracking-[-0.02em] text-xs">Hi, my name is</p>
          <h1 className="mt-4 font-sans font-extrabold text-[32px] leading-[46px]">Vinicius Rodrigues</h1>
          <h2 className="mt-4 font-sans font-bold text-[20px] leading-[33px] tracking-[-0.02em] text-blue-gradient">Creating solutions with code</h2>
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
          <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient">02. About</h2>
          <p className="mt-[92px] font-montserrat text-sm leading-[14px] tracking-[-0.02em] text-white leading-[20px]">
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

        <section className="mt-[398px]">
          <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient">03. TECHNOLOGIES</h2>
          <div className="mt-[92px] flex flex-col items-center">

            <div className="max-w-[214px]">
              <div className="flex items-center justify-center">
                <img src="/assets/react.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">React.JS</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>
            
            <div className="max-w-[214px] mt-8">
              <div className="flex items-center justify-center">
                <img src="/assets/react.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">React.JS</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>
            
            <div className="max-w-[214px] mt-8">
              <div className="flex items-center justify-center">
                <img src="/assets/react.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">React.JS</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>
            
            <div className="max-w-[214px] mt-8">
              <div className="flex items-center justify-center">
                <img src="/assets/react.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">React.JS</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>

            <div className="max-w-[214px]">
              <div className="flex items-center justify-center">
                <img src="/assets/react.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">React.JS</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>
            
            <div className="max-w-[214px] mt-8">
              <div className="flex items-center justify-center">
                <img src="/assets/react.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">React.JS</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>
            
            <div className="max-w-[214px] mt-8">
              <div className="flex items-center justify-center">
                <img src="/assets/react.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">React.JS</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>
            
            <div className="max-w-[214px] mt-8">
              <div className="flex items-center justify-center">
                <img src="/assets/react.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">React.JS</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>

          </div>
        </section>

        <section className="mt-[398px]">
          <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient">04. PROJECTS</h2>
          <div className="mt-[92px] flex flex-col gap-28">

            <div>
              <img src="/assets/dopeshoe.png" alt="" className="shadow-sm"/>
              <span className="block mt-11">Personal Project</span>
              <span className="mt-2 block font-roboto font-normal text-[22px] text-blue-gradient">Dopeshoe</span>
              <p className="text-sm mt-4">
                DopeShoe is an e-commerce website built using NextJS, Stripe, 
                Hygraph, Graphql(URQL), Typescript and styled with 
                Tailwindcss. It allows users to buy shoes, view their shopping 
                cart, and see past orders. It includes features like responsive 
                layout and search bar with filters.
              </p>
              <div className="mt-4">
                <span className="text-sm text-gray-600 font-medium">NextJS, Stripe, Hygraph, Graphql(URQL), Typescript, Tailwindcss.</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img src="/assets/github.svg" alt="" className="cursor-pointer"/>
                <img src="/assets/link.svg" alt="" className="cursor-pointer" />
              </div>
            </div>

            <div>
              <img src="/assets/githubstats.png" alt="" className="shadow-sm"/>
              <span className="block mt-11">Personal Project</span>
              <span className="mt-2 block font-roboto font-normal text-[22px] text-blue-gradient">GithubStats</span>
              <p className="text-sm mt-4">
                Githubstats is a web app that allows users to search for Github users and organizations, and access their profile information such as repositories, starred repositories, followers and members of an organization. It is designed to provide a simple and efficient way to view a user's Github data.
              </p>
              <div className="mt-4">
                <span className="text-sm text-gray-600 font-medium">NextJS, Typescript, Chakra UI, GraphQL(Apollo Client), Codegen.</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img src="/assets/github.svg" alt="" className="cursor-pointer"/>
                <img src="/assets/link.svg" alt="" className="cursor-pointer" />
              </div>
            </div>

            <div>
              <img src="/assets/devblog.png" alt="" className="shadow-sm"/>
              <span className="block mt-11">Personal Project</span>
              <span className="mt-2 block font-roboto font-normal text-[22px] text-blue-gradient">DevBlog</span>
              <p className="text-sm mt-4">
                DEVBLOG is a web application that allows users to browse and engage with blog posts, while also providing an administrative capability for the management of content on the Prismic CMS platform. Additionally, the application provides user authentication capabilities through Firebase Auth.
              </p>
              <div className="mt-4">
                <span className="text-sm text-gray-600 font-medium">ReactJS, Firebase, Prismic CMS, Sass.</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img src="/assets/github.svg" alt="" className="cursor-pointer"/>
                <img src="/assets/link.svg" alt="" className="cursor-pointer" />
              </div>
            </div>

            <div>
              <img src="/assets/dopeshoe.png" alt="" className="shadow-sm"/>
              <span className="block mt-11">Personal Project</span>
              <span className="mt-2 block font-roboto font-normal text-[22px] text-blue-gradient">Dopeshoe</span>
              <p className="text-sm mt-4">
                DopeShoe is an e-commerce website built using NextJS, Stripe, 
                Hygraph, Graphql(URQL), Typescript and styled with 
                Tailwindcss. It allows users to buy shoes, view their shopping 
                cart, and see past orders. It includes features like responsive 
                layout and search bar with filters.
              </p>
              <div className="mt-4">
                <span className="text-sm text-gray-600 font-medium">NextJS, Stripe, Hygraph, Graphql(URQL), Typescript, Tailwindcss.</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img src="/assets/github.svg" alt="" className="cursor-pointer"/>
                <img src="/assets/link.svg" alt="" className="cursor-pointer" />
              </div>
            </div>


          </div>
        </section>
      </main>
    </div>
  )
}