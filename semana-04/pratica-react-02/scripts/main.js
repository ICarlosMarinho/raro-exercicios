const contacts = [
  { name: "Tom James", occupation: "Programmer", imgSrc: "https://i.pravatar.cc/300" },
  { name: "Alessa Smith", occupation: "Manager", imgSrc: "https://i.pravatar.cc/300" },
  { name: "Kate Minard", occupation: "Web Designer", imgSrc: "https://i.pravatar.cc/300" },
  { name: "John Tudor", occupation: "Database Admin", imgSrc: "https://i.pravatar.cc/300" }
];

const SearchButton = () => (
  <button className="search-button">Search</button>
);

const Info = ({ imgSrc, name, occupation }) => (
  <section className="info">
    <img src={imgSrc} className="avatar" />
    <div>
      <h2>{name}</h2>
      <h3>{occupation}</h3>
    </div>
  </section>
);

const Actions = () => (
  <section className="actions">
    <button className="actions-button">Call</button>
    <button className="actions-button">Send e-mail</button>
  </section>
);

const Contact = ({ name, occupation, imgSrc }) => (
  <section className="contact">
    <Info imgSrc={imgSrc} name={name} occupation={occupation} />
    <Actions />
  </section>
);

const Header = () => (
  <header className="page-header">
    <h1 className="title">Contacts</h1>
    <SearchButton />
  </header>
);

const ContactList = () => (
  <main className="contact-list">
    {
      contacts.map((info, index) => {
        return <Contact key={index} {...info} />
      })
    }
  </main>
);

const Footer = () => (
  <footer>
    <span className="contact-count">{`We found ${contacts.length} contacts`}</span>
  </footer>
);

const App = () => (
  <>
    <Header />
    <ContactList />
    <Footer />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));