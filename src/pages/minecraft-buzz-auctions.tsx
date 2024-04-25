import { Reveal } from "@/components/Animations/Reveal";
import Layout from "@/components/Layout";
import { Link, Users } from "lucide-react";

export default function MinecraftBuzzAuctionsPage() {
    return (
        <Layout>
        <section className="py-[100px]">
            <div className="w-[90%] mx-auto max-w-[660px]">
                <Reveal>
                    <p className="mb-4 text-xl font-[200] text-gray-600">/ case</p>
                </Reveal>
                <Reveal>
                    <h1 className="text-[54px] font-[300] leading-[110%] mb-[50px]">Automated auction system for minecraft server-bidding</h1>
                </Reveal>
                <Reveal>
                    <div className="flex items-center gap-5 mb-14">
                        <div className="flex items-center gap-2">
                            <Link></Link>
                            <h3 className="font-[200] underline">auctions.minecraft.buzz</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users></Users>
                            <h3 className="font-[200]">2</h3>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                <p className="font-[200] text-[18px] text-gray-600">Tiny Rhino is a technical product agency that has been at the forefront of innovation for over 7 years. We are proud to have delivered many innovate solutions to a range of clients from a variety of industries, driven by a passion for new and innovative technology.
<br></br><br></br>
At Tiny Rhino, we focus on creating solutions that not only address hard problems but also have a positive impact on society. We thrive on tackling challenges in education and developing products that make a difference.
<br></br><br></br>
What sets us apart is our commitment to providing complete product solutions for our clients. We don&apos;t just offer development services; we also provide guidance on milestones, implementation strategies, and selecting the right platforms and service providers. We understand that success goes beyond coding - it requires a comprehensive approach.
<br></br><br></br>
Collaboration is at the core of our work. We partner closely with our clients to understand their goals and challenges, ensuring that our solutions align with their vision. Together, we leverage our technical expertise and strategic guidance to deliver exceptional outcomes.
<br></br><br></br>
Throughout our journey, we have had the privilege of working with diverse clients across various industries. From startups to established enterprises, we have consistently delivered products that exceed expectations and drive success.
<br></br><br></br>

If you are seeking a technical product agency that not only provides development solutions but also offers comprehensive guidance and a focus on societal impact, look no further than Tiny Rhino. Let&apos;s collaborate and create innovative solutions that shape the future.</p>
                </Reveal>
            </div>
        </section>
        </Layout>
    )
}