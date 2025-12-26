import './App.css'
import Header from "./components/Header.tsx";
import Section from "./components/Section.tsx";
import InfoCard from "./components/InfoCard.tsx";

function App() {

  return (
    <>
        <Header visible={true} />
        <main className="main-container">
            <Section>
                <InfoCard title={"About Me"} text={"Projects bla bla bla bla bla bla bla bla bla bla aaaaaaaaaaaaaaaassssssssss"} />
            </Section>
        </main>
    </>
  )
}

export default App;
