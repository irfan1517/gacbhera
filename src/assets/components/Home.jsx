import AboutUs from "./AboutUs.jsx";
import QuickLinks from "./QuickLinks.jsx";
const Home = () => {
    return (
        <>
        <div className="h-full">
            <header className="h-[90vh] hero">
                <div className="hero-content">
                    <h1 className="">Govt. Associate College Bhera(Sargodha)</h1>
                    <h2> Excellence in Education</h2>
                    <p>Shaping the future with quality education and innovation.</p>
                    <button className="cta-btn">Get Started</button>
                </div>
            </header>
        </div>
        <AboutUs />
        <QuickLinks />
        </>
    )
}
export default Home