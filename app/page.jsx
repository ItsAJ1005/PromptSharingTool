import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover, Reuse & Share
        <br className="max-md:hidden"/>
        <span className="green_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">Get Your Prompts is an open-source AI prompting tool for modern world to discover, create and share useful prompts</p>

      <Feed />
    </section>
  )
}

export default Home
