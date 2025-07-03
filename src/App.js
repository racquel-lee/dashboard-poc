import './App.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Familiar', responses: 383, target: 300 },
  { name: 'Unfamiliar', responses: 75, target: 450 }
];

function App() {
  return (
    <div className="App">
      <header style={{ padding: '20px', backgroundColor: '#643335', color: 'white' }}>
        <h1>LHNH Community Voices Survey Dashboard</h1>
        <p>Real-time Progress Tracking</p>
      </header>
      
      <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '30px' }}>
          <h2>Response Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="responses" fill="#ef3340" name="Current" />
              <Bar dataKey="target" fill="#e1d8d5" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '20px',
          marginTop: '30px'
        }}>
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#f8f9fa', 
            borderLeft: '4px solid #ef3340',
            borderRadius: '4px'
          }}>
            <h3>Total Responses</h3>
            <p style={{ fontSize: '2em', margin: '0', color: '#643335' }}>458</p>
          </div>
          
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#f8f9fa', 
            borderLeft: '4px solid #ef3340',
            borderRadius: '4px'
          }}>
            <h3>Completion Rate</h3>
            <p style={{ fontSize: '2em', margin: '0', color: '#643335' }}>61%</p>
          </div>
        </div>
        
        <footer style={{ 
          marginTop: '40px', 
          padding: '20px', 
          backgroundColor: '#f8f9fa',
          textAlign: 'center',
          fontSize: '0.9em',
          color: '#666'
        }}>
          <p>Last updated: {new Date().toLocaleString()}</p>
          <p>Lenox Hill Neighborhood House | Community Awareness Study</p>
        </footer>
      </main>
    </div>
  );
}

export default App;