import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: { searchParams: Promise<{ query?: string }> }) {

    const query = (await searchParams).query;

    const posts = [
        {
            _createdAt: new Date(),
            views: 55,
            author: {_id: 1, name: "Nikola"},
            _id: 1,
            description: "This is a description",
            image: "https://alpha.creativecirclecdn.com/environment/original/20241013-122911-7e5-Tesla%27s%20Robotaxi.jpg",
            category: "Robots",
            title: "We, Robots",
        }
    ]

    return (
        <>
            {/*hero section*/}
            <section className="pink_container">
                <h1 className="heading">
                    Pitch your startup, <br/> Connect with entrepreneurs
                </h1>
                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions
                </p>

                <SearchForm query={query}/>
            </section>

            {/*all startups section*/}
            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query}` : "All Startups"}
                </p>

                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupCardType, index: number) => (
                            <StartupCard key={post._id} post={post}/>
                        ))
                    ) : (
                        <p className="no-results">No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
}
