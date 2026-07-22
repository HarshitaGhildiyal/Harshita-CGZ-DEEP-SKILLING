import './App.css';

function App() {
  const office = {
    name: 'DBS',
    rent: 50000,
    address: 'Chennai',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  };

  const officeSpaces = [
    {
      name: 'DBS',
      rent: 50000,
      address: 'Chennai',
    },
    {
      name: 'Regus',
      rent: 65000,
      address: 'Bangalore',
    },
    {
      name: 'WeWork',
      rent: 85000,
      address: 'Hyderabad',
    },
    {
      name: 'Smartworks',
      rent: 45000,
      address: 'Pune',
    },
  ];

  return (
    <div className="App">
      <h1>Office Space Rental App</h1>
      <img className="office-image" src={office.image} alt="Office Space" />

      <section className="office-card">
        <h2>{office.name}</h2>
        <p>
          <strong>Rent:</strong>{' '}
          <span className={office.rent < 60000 ? 'rent-low' : 'rent-high'}>
            Rs. {office.rent}
          </span>
        </p>
        <p>
          <strong>Address:</strong> {office.address}
        </p>
      </section>

      <section className="office-list">
        <h2>Available Office Spaces</h2>
        {officeSpaces.map((item) => (
          <div className="office-card" key={`${item.name}-${item.address}`}>
            <h3>{item.name}</h3>
            <p>
              <strong>Rent:</strong>{' '}
              <span className={item.rent < 60000 ? 'rent-low' : 'rent-high'}>
                Rs. {item.rent}
              </span>
            </p>
            <p>
              <strong>Address:</strong> {item.address}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;