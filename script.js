body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #0b0b0f;
  color: white;
  overflow-x: hidden;
}

section {
  min-height: 100vh;
  padding: 60px 20px;
  text-align: center;
}

/* INTRO */
#intro {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.book {
  text-align: center;
}

/* HERO */
.hero {
  background: linear-gradient(180deg, #111, #1a1a2e);
}

/* CARDS */
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.card {
  width: 120px;
  height: 120px;
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

/* SEASONS */
#spring { background: #2b1b2f; }
#summer { background: #2f2a12; }
#autumn { background: #2a1c12; }
#winter { background: #101a2a; }

/* MUSIC BUTTON */
#musicControl {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: white;
  color: black;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  z-index: 9999;
}
