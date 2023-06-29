import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (<div class="mx-auto flex flex-auto justify-between max-w-5xl p-8 pt-section-spacing py-about h-content">
        <Link href='https://anilist.co/user/CalciumThePenguin/' class='text-link'>
            <Image src="/static/images/pfp.jpg" class='rounded-lg hover:saturate-50 transition delay-150 ease-in-out pointer-events-auto' width={400} height={400} />
        </Link>
        <div class='flex flex-col px-about align-baseline'>
        <h1 class='text-about font-extrabold text-heading2'>
            Hi, I'm Calcium
        </h1>
        <p class='py-navbar'>
        17, hungry for knowledge, with an interest in many fields ranging from cooking, computers, 3d modelling and much more.
        </p>
        <p>
            If you couldn’t tell already, I also watch a lot of <span>
                <Link href='https://anilist.co/user/CalciumThePenguin/' class='text-link cursor-pointer'>
                    anime
                </Link>
            </span>.  

        </p>
        </div>
    </div>
    )
  }