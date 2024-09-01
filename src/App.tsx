import "./App.css";
import Card from "./assets/component/Card";
import { testiData } from "./assets/utils/data";

function App() {
  return (
    <main>
      <h1 aria-hidden='true' aria-label='My text for screen readers'></h1>
      <section id='testimonials' className='testimonials-container'>
        {testiData.map((testi) => {
          return (
            <Card
              key={testi.fullname}
              avatar={testi.avatar}
              fullname={testi.fullname}
              verficationStat={testi.verificationStat}
              subject={testi.subject}
              para={testi.para}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
