import Layout from "@/components/Layout";
import Members from "@/components/members";
import SecondHero from "@/components/reused/SecondHero";

export default function People() {
    return (
        <Layout>
            <SecondHero heading="People behind Gazella Team" description="We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment to sustainability drives us to integrate environmental considerations into every aspect of our business." />
            <Members />
        </Layout>
    )
}