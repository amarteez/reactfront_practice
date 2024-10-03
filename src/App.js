import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './App.css';  // Estilos globales
import ContactForm from './Components/ContactForm';  // Componente ContactForm

function App() {
    return (
        <div className="App">
            <ContactForm />
        </div>
    );
}

export default App;
