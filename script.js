@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top, #0f0, #000);
  font-family: 'Poppins', sans-serif;
  color: white;
  overflow: hidden;
}

.player-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.player-card {
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #0f0;
  border-radius: 20px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 0 30px #0f0;
}

.thumbnail {
  width: 100%;
  height: 250px;
  border-radius: 15px;
  object-fit: cover;
  border: 2px solid #0f0;
}

h2 {
  font-size: 18px;
  margin: 10px 0;
  color: #0f0;
}

.controls {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.ctrl-btn {
  background: transparent;
  border: 2px solid #0f0;
  color: #0f0;
  padding: 10px 14px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ctrl-btn:hover {
  background: #0f0;
  color: #000;
  box-shadow: 0 0 15px #0f0;
}

.timeline {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

#timeline {
  flex-grow: 1;
  accent-color: #0f0;
}

span {
  font-size: 12px;
  color: #0f0;
}
