import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const updateMousePosition = (ev) => {
  // Gunakan pageX dan pageY untuk akurasi penuh
  const { pageX, pageY } = ev;

  // Hitung persentase posisi mouse di layar
  const percentX = (pageX / window.innerWidth) * 100;
  const percentY = (pageY / window.innerHeight) * 100;

  // Set properti CSS dengan persentase
  document.body.style.setProperty('--mouse-x', `${percentX}%`);
  document.body.style.setProperty('--mouse-y', `${percentY}%`);
}

// Tambahkan event listener saat komponen dimuat
document.addEventListener('mousemove', updateMousePosition);

// Hapus event listener saat komponen di-unmount (opsional)
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
