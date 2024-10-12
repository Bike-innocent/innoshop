import React from 'react'

function AboutTab() {
    return (
        <>

            <div className="grid grid-cols-1">
                <div>
                    <img src="assets/images/about/about5.png" className='mx-auto sm:max-w-[450px] md:max-w-[500px] lg:max-w-[500px] xl:max-w-[600px]' alt="about me" />
                </div>


                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">Based in Ilorin</h4>
                <p className="paragraph mb-7">Chibuike Innocent, <span className="text-black-800">Full-Stack Web Developer</span>, based in Ilorin.
                    I specialize in crafting efficient, responsive websites that align with your business goals.
                    From concept to completion, I provide solutions that deliver real impact.
                </p>
                <p className="paragraph mb-14">Focused on creating seamless user experiences, I’m committed to turning ideas into interactive and visually appealing platforms that engage users and drive results.</p>


                <ul className="flex-col gap-3 inline-flex">
                    <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg  font-normal leading-none">
                            Name</span>
                        <span className="text-black-800 text-xl md:text-2xl font-bold font-Syne leading-8">
                            Chibuike Innocent</span>
                    </li>
                    <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                            Nationality</span>
                        <span className="text-black-800  text-xl md:text-2xl font-bold font-Syne leading-8">
                            Nigeria</span>
                    </li>
                    <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                            Phone</span>
                        <span className="text-black-800  text-xl md:text-2xl font-bold font-Syne leading-8">
                            +234 808 887 9523</span>
                    </li>
                    <li className="gap-10 inline-flex items-center">

                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                            <a href="mailto:hello@chibuikeinnocent.tech" > Email</a></span>
                        <span className="text-black-800 text-lg sm:text-xl md:text-2xl font-bold font-Syne leading-8">
                            <a href="mailto:hello@chibuikeinnocent.tech" >hello@chibuikeinnocent.tech</a></span>

                    </li>
                    <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                            Experience</span>
                        <span className="text-black-800  text-xl md:text-2xl font-bold font-Syne leading-8">
                            3+ years</span>
                    </li>
                    <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                            Freelance</span>
                        <span className="text-black-800  text-xl md:text-2xl font-bold font-Syne leading-8">
                            Available</span>
                    </li>

                    <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                            Language</span>
                        <span className="text-black-800  text-xl md:text-2xl font-bold font-Syne leading-8">
                            English</span>
                    </li>
                </ul>

            </div>

        </>
    )
}

export default AboutTab
