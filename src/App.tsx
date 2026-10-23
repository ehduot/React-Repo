
import './App.css'
import Card from './Card'
import ProfileCard from './Profil'
import Footer from './Fußberreich'

function App() {
  return (
    <>
      <h1>Willkommen!</h1>

      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
      </div>

      <h2>Profile</h2>

      <div className="profileContainer">
        <ProfileCard
          name="Susi"
          image="https://picsum.photos/200/200"
          description="Liebt kreatives Design"
        />

        <ProfileCard
          name="Max"
          image="https://picsum.photos/201/200"
          description="Interessiert sich für Technik"
        />
      </div>

      <Footer />
    </>
  )
}

export default App
