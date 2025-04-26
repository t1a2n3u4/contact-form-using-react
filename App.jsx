import Navigation from "./components/navigation/nav";
import ContactHeader from "./components/contactheader/contactheader";
import Contactform from "./components/contactform/contactform";
import "./app.css";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <ContactHeader /> {/* Keep this only once */}
        <main className="main_container">
          <Contactform /> {/* Only one ContactForm here */}
        </main>
      </div>
    </>
  );
}

export default App;
