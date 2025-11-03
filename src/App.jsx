import React, { useEffect } from 'react'
import ProfilePic from '../Assets/profilepic.jpg'

function useInitTheme() {
    useEffect(() => {
        const htmlEl = document.documentElement
        const saved = localStorage.getItem('theme')
        if (saved === 'light') {
            htmlEl.classList.remove('dark')
        } else {
            htmlEl.classList.add('dark')
        }
    }, [])
}

function useDynamicBits() {
    useEffect(() => {
        const yearEl = document.getElementById('year')
        if (yearEl) {
            yearEl.textContent = String(new Date().getFullYear())
        }

        const githubUsername = 'kaustavxg'
        const ghUser = document.getElementById('ghUser')
        if (ghUser) { ghUser.textContent = githubUsername }
        const ghUserTitle = document.getElementById('ghUserTitle')
        if (ghUserTitle) { ghUserTitle.textContent = githubUsername }

        const ghChart = document.getElementById('ghChart')
        if (ghChart) {
            ghChart.src = `https://ghchart.rshah.org/22c55e/${githubUsername}?t=${Date.now()}`
            ghChart.onerror = () => {
                ghChart.src = `https://github-contributions-api.deno.dev/${githubUsername}.svg?no-total=true&format=svg&scheme=green`
            }
        }
    }, [])
}

export default function App() {
    useInitTheme()
    useDynamicBits()

    return (
        <main id="home" className="relative">
            <section id="resume" className="py-16">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <img 
                                className="h-20 w-20 rounded-full ring-2 ring-accent/50 object-cover" 
                                src={ProfilePic} 
                                alt="Avatar" 
                            />
                            <div>
                                <h2 className="text-2xl font-bold">Kaustav Gupta</h2>
                                <p className="text-zinc-400">Software Engineer</p>
                            </div>
                        </div>
                        <a href="https://drive.google.com/file/d/115fLxCrWlW4xZhuaKRJ1ZWhl_zFwOmgA/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 hover:border-accent hover:text-accent transition"><i className="fa-regular fa-file-lines"></i> Resume</a>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-lg font-semibold">Experiences</h3>
                        <ul className="mt-4 space-y-4">
                            <li className="rounded-xl border border-zinc-800 bg-base-800 p-4">
                                <div className="flex items-center justify-between">
                                    <p className="font-medium text-zinc-200">Tech Range</p>
                                    <div className="flex flex-col items-end space-y-1">
                                        <span className="text-xs text-amber-400 font-medium">Backend Developer Intern</span>
                                        <span className="text-xs text-zinc-400">Aug 2025 – Oct 2025</span>
                                    </div>
                                </div>
                                <p className="mt-2 text-sm text-zinc-400">Stack: Node.js, Express.js, MongoDB, RESTful APIs</p>
                                <p className="mt-2 text-sm text-zinc-300">Built and optimized APIs, integrated third-party services, and collaborated on performance improvements.</p>
                            </li>

                            <li className="rounded-xl border border-zinc-800 bg-base-800 p-4">
                                <div className="flex items-center justify-between">
                                    <p className="font-medium text-zinc-200">Freelance</p>
                                    <span className="text-xs text-zinc-400">June 2025 – Present</span>
                                </div>
                                <p className="mt-2 text-sm text-zinc-400">Stack: MongoDB, Express.js, React.js, Node.js</p>
                                <p className="mt-2 text-sm text-zinc-300">Handled freelance MERN projects from design to deployment, integrating APIs and maintaining clean, scalable code.</p>
                            </li>

                            <li className="rounded-xl border border-zinc-800 bg-base-800 p-4">
                                <div className="flex items-center justify-between">
                                    <p className="font-medium text-zinc-200">N.C.E.R.T</p>
                                    <div className="flex flex-col items-end space-y-1">
                                        <span className="text-xs text-amber-400 font-medium">Full Stack Developer Intern</span>
                                        <span className="text-xs text-zinc-400">July 2024 - Oct 2024</span>
                                    </div>
                                </div>
                                <p className="mt-2 text-sm text-zinc-400">Stack: MongoDB, Express.js, React.js, Node.js</p>
                                <p className="mt-2 text-sm text-zinc-300">Built interactive, curriculum-aligned web games with React.js and Node.js, delivering engaging learning experiences with real-time scoring.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <div className="mt-4 space-y-4">
                            <article className="rounded-xl border border-zinc-800 bg-base-800 p-5">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold">Full-Stack To-Do App</h4>
                                    <div className="flex gap-3 text-sm">
                                        <a href="https://full-stack-todo-app-plum.vercel.app/" target="_blank" className="inline-flex items-center gap-1 text-accent hover:text-accent-hover"><i className="fa-solid fa-arrow-up-right-from-square"></i> Visit</a>
                                        <a href="#" className="inline-flex items-center gap-1 text-accent hover:text-accent-hover"><i className="fa-brands fa-github"></i> Code</a>
                                    </div>
                                </div>
                                <p className="mt-2 text-zinc-400">Full-stack task manager with real-time CRUD operations.</p>
                                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-accent">HTML</span>
                                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-accent">CSS</span>
                                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-accent">JavaScript</span>
                                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-accent">Express</span>
                                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-accent">MongoDB</span>
                                </div>
                            </article>

                            <article className="rounded-xl border border-zinc-800 bg-base-800 p-5">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold">Guess the Number Game</h4>
                                    <div className="flex gap-3 text-sm">
                                        <a href="https://guess-the-number-ruby-theta.vercel.app/" target="_blank" className="inline-flex items-center gap-1 text-accent hover:text-accent-hover"><i className="fa-solid fa-arrow-up-right-from-square"></i> Visit</a>
                                        <a href="#" className="inline-flex items-center gap-1 text-accent hover:text-accent-hover"><i className="fa-brands fa-github"></i> Code</a>
                                    </div>
                                </div>
                                <p className="mt-2 text-zinc-400">Simple interactive number-guessing game with scoring, dynamic feedback, and clean UI.</p>
                                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-accent">HTML</span>
                                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-accent">CSS</span>
                                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-accent">JavaScript</span>
                                </div>
                            </article>

                            <article className="rounded-xl border border-zinc-800 bg-base-800 p-5">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold">Pokémon Card Generator</h4>
                                    <div className="flex gap-3 text-sm">
                                        <a href="https://pokemon-cardgenerator.netlify.app/" target="_blank" className="inline-flex items-center gap-1 text-accent hover:text-accent-hover"><i className="fa-solid fa-arrow-up-right-from-square"></i> Visit</a>
                                        <a href="#" className="inline-flex items-center gap-1 text-accent hover:text-accent-hover"><i className="fa-brands fa-github"></i> Code</a>
                                    </div>
                                </div>
                                <p className="mt-2 text-zinc-400">Dynamic Pokémon card generator using public API, enabling users to fetch Pokémon data and customize cards.</p>
                                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-accent">HTML</span>
                                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-accent">CSS</span>
                                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-accent">JavaScript</span>
                                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-accent">PokéAPI</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section id="tech-stack" className="pt-3 pb-12">
                <div className="mx-auto max-w-5xl px-6">
                    <h3 className="text-lg font-semibold">Tech Stack</h3>
                    <div className="mt-6 flex flex-wrap gap-3 text-sm">
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-python text-accent"></i> Python</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-solid fa-c text-accent"></i> C</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-solid fa-code text-accent"></i> C++</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-js text-accent"></i> JavaScript</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-html5 text-accent"></i> HTML</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-css3 text-accent"></i> CSS</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-react text-accent"></i> React</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-solid fa-wand-magic-sparkles text-accent"></i> Tailwind</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-node-js text-accent"></i> Node.js</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-solid fa-server text-accent"></i> Express</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-solid fa-leaf text-accent"></i> MongoDB</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-solid fa-database text-accent"></i> SQL</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-git-alt text-accent"></i> Git</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-github text-accent"></i> GitHub</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-regular fa-paper-plane text-accent"></i> Postman</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-windows text-accent"></i> VS Code</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-linux text-accent"></i> Linux</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-solid fa-bolt text-accent"></i> Vite</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-aws text-accent"></i> AWS</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-cloud text-accent"></i> Vercel</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-solid fa-cloud text-accent"></i> Render</span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-base-800 px-3 py-1.5"><i className="fa-brands fa-figma text-accent"></i> Figma</span>
                    </div>

                    <div className="mt-16">
                        <h3 className="text-lg font-semibold text-zinc-100">Education</h3>
                        <ul className="mt-6 space-y-5">
                            <li className="rounded-2xl border border-zinc-800 bg-base-800/80 hover:bg-base-800 transition-colors p-5 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-zinc-200 text-base">University of Delhi</p>
                                    <span className="text-xs text-amber-400 font-medium">2022 – 2026</span>
                                </div>
                                <p className="mt-2 text-sm text-zinc-400 italic">B.Sc. (Hons.) Computer Science</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="github" className="pt-4 pb-6">
                <div className="mx-auto max-w-5xl px-6">
                    <h3 className="text-lg font-semibold text-center">GitHub Activity</h3>
                    <p className="mt-1 text-sm text-zinc-400 text-center"><span id="ghUserTitle" className="text-zinc-300">kaustavxg</span>'s Contribution Graph</p>
                    <div className="mt-6 rounded-2xl border border-zinc-800 bg-base-800 p-6">
                        <div className="flex justify-center">
                            <img id="ghChart" className="w-full max-w-3xl rounded-lg filter brightness-90 contrast-110" alt="GitHub contribution graph" />
                        </div>
                        <p className="mt-3 text-center text-zinc-400 text-sm">Username: <a href="https://github.com/kaustavxg" target="_blank" id="ghUser" className="text-accent hover:underline">kaustavxg</a>
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact" className="pt-6 pb-16">
                <div className="mx-auto max-w-5xl px-6">
                    <h3 className="text-lg font-semibold">Connect</h3>
                    <div className="mt-6 divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-base-800">
                        <div className="grid grid-cols-3 items-center gap-4 px-5 py-4">
                            <span className="col-span-1 text-zinc-300">Linkedin</span>
                            <a className="col-span-2 inline-flex items-center gap-2 text-accent hover:text-accent-hover" href="https://www.linkedin.com/in/kaustav-gupta23/" target="_blank" rel="noreferrer">
                                @kaustav-gupta23
                                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                            </a>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4 px-5 py-4">
                            <span className="col-span-1 text-zinc-300">Github</span>
                            <a className="col-span-2 inline-flex items-center gap-2 text-accent hover:text-accent-hover" href="https://github.com/kaustavxg" target="_blank" rel="noreferrer">
                                @kaustavxg
                                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                            </a>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4 px-5 py-4">
                            <span className="col-span-1 text-zinc-300">X</span>
                            <a className="col-span-2 inline-flex items-center gap-2 text-accent hover:text-accent-hover" href="https://twitter.com/kaustavxg" target="_blank" rel="noreferrer">
                                @kaustavxg
                                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-zinc-800 py-8">
                <div className="mx-auto max-w-6xl px-6 text-center text-zinc-400">
                    <p>© <span id="year"></span> Kaustav Gupta. All rights reserved.</p>
                </div>
            </footer>
        </main>
    )
}


