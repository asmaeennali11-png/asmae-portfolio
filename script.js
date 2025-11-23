// Scroll fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
function openModal(projectId) {
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");

  let content = "";

  if (projectId === "eclairage") {
    content =  `
      <img src="eclairage_public.jpg" alt="eclairage public" class="project-img">
      <h2>Système d’éclairage public automatique avec Arduino</h2>
      <p><strong>Objectif :</strong> Concevoir un système d’éclairage intelligent activé automatiquement selon la luminosité et la présence humaine.</p>
      <p><strong>Matériels utilisés :</strong></p> 
      <ul>
        <li>Arduino UNO</li>
        <li>Capteur de lumiére</li>
        <li>Leds</li>
        <li>Capteurs IR</li>
      </ul>
      <p><strong>Description :</strong> Le système mesure la luminosité ambiante et détecte le mouvement. Il allume les lampes uniquement en cas de faible luminosité et de présence. Ce projet vise à optimiser la consommation d’énergie dans l’espace public.</p>
    `;
  }
  if (projectId === "robotLigne") {
    content = `
      <img src="robot_ligne.jpg" alt="Robot suiveur de ligne">
      <h2>Robot suiveur de ligne</h2>
      <p><strong>Objectif :</strong> Concevoir un robot capable de suivre automatiquement une ligne tracée sur le sol grâce à des capteurs infrarouges.</p>
      <p><strong>Matériels utilisés :</strong></p>
       <ul>
        <li>Arduino UNO</li>
        <li>2 capteurs infrarouges</li>
        <li>Module L298N</li>
        <li>4 moteurs DC</li>
        <li>batterie</li>
      </ul>
      <p><strong>Description :</strong> Le robot lit en continu les signaux de ses capteurs IR pour détecter la ligne noire sur un fond blanc. En fonction de la position de la ligne, il ajuste la vitesse de ses moteurs pour corriger sa trajectoire. Ce projet introduit les principes de base de la robotique mobile et du contrôle en boucle fermée.</p>
    `;
  }

  if (projectId === "robotCouleur") {
    content = `
      <img src="robot_couleur.jpg" alt="Robot suiveur de couleur">
      <h2>Robot suiveur de couleur avec capteur TCS3200</h2>
      <p><strong>Objectif :</strong> Créer un robot autonome capable de naviguer dans un labyrinthe complexe.</p>
      <p><strong>Matériels utilisés :</strong></p> 
      <ul>
        <li>Arduino Mega</li>
        <li>Capteur de couleur TCS3200</li>
        <li>3 capteurs ultrason</li>
        <li>2 capteurs infrarouge</li>
      </ul>
      <p><strong>Description :</strong> le robot doit naviguer dans un labyrinthe bardé d'obstacles sans les toucher et il doit détecter un couleur au sol pour suivre les indications de direction (chaque couleur signifie un direction), le robot doit atteindre la sortie du labyrinthe sans intervention humaine.</p>
    `;
  }

  if (projectId === "irrigation") {
    content = `
      <img src="irrigation.jpg" alt="Système d'irrigation intelligente" class="project-img">
      <h2>Jumeau numérique pour un système d’irrigation intelligente</h2>
      <p><strong>Objectif :</strong> Simuler et contrôler à distance un système d’irrigation automatisé basé sur l’IoT.</p>
      <p><strong>Matériels et logiciels utilisés :</strong></p>
      <ul>
        <li>ESP32</li>
        <li>capteur d’humidité du sol</li>
        <li>pompe à eau</li>
        <li>vannes électriques</li>
        <li>IOT</li>
        <li>Blender</li>
        <li>Unity3D</li>
      </ul>
      <p><strong>Description :</strong> Le système surveille le taux d’humidité du sol et active automatiquement la pompe d’irrigation. Les données sont transmises via Wi-Fi pour analyse dans un tableau de bord connecté. Le modèle numérique permet de tester les performances du système avant sa mise en œuvre réelle.</p>
    `;
  }

  if (projectId === "matlab") {
    content = `
      <img src="matlab.jpg" alt="modélisation matlab" class="project-img">
      <h2>Modélisation des systèmes embarqués sous MATLAB/Simulink</h2>
      <p><strong>Objectif :</strong> Développer et simuler des modèles de systèmes embarqués pour l’analyse et la validation de performances.</p>
      <p><strong>Matériels et logiciels utilisés :</strong></p>
      <ul>
        <li>MATLAB/Simulink</li>
        <li>IOT</li>
        <li>systéme embarqué</li>
      </ul>
      <p><strong>Description :</strong> Création de blocs fonctionnels sous Simulink pour modéliser des systèmes de contrôle. Simulation du comportement dynamique, vérification de la stabilité et validation de la commande.</p>
    `;
  }

  if (projectId === "barrière") {
    content = `
      <img src="barrière.jpg" alt="barrière automatique" class="project-img">
      <h2>système de barrière automatique pour les péages</h2>
      <p><strong>Objectif :</strong> fournir une solution intelligente, sécurisée et automatisée controler à distance en temps réel.</p>
      <p><strong>Matériels et logiciels utilisés :</strong>
      <ul>
        <li>ESP32</li>
        <li>servomoteur</li>
        <li>les leds</li>
        <li>bouton poussoir</li>
        <li>Blender</li>
        <li>Digital Twins</li>
      </ul>
      <p><strong>Description :</strong> Créer un système de barrière automatique pour les péages basé sur l'ESP32 et l'IOT permet de controler et surveiller à distance l'accés aux routes à péages, ce système utilise des technologies sans fil pour automatiser l'ouverture et la fermeture de la barrière.</p>
    `;
  }

  modalBody.innerHTML = content;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Fermer la modale en cliquant à l’extérieur
window.onclick = function(event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
// Scroll fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
function openModal(projectId) {
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");

  let content = "";

  if (projectId === "eclairage") {
    content =  `
      <img src="eclairage_public.jpg" alt="eclairage public" class="project-img">
      <h2>Système d’éclairage public automatique avec Arduino</h2>
      <p><strong>Objectif :</strong> Concevoir un système d’éclairage intelligent activé automatiquement selon la luminosité et la présence humaine.</p>
      <p><strong>Matériels utilisés :</strong></p> 
      <ul>
        <li>Arduino UNO</li>
        <li>Capteur de lumiére</li>
        <li>Leds</li>
        <li>Capteurs IR</li>
      </ul>
      <p><strong>Description :</strong> Le système mesure la luminosité ambiante et détecte le mouvement. Il allume les lampes uniquement en cas de faible luminosité et de présence. Ce projet vise à optimiser la consommation d’énergie dans l’espace public.</p>
    `;
  }
  if (projectId === "robotLigne") {
    content = `
      <img src="robot_ligne.jpg" alt="Robot suiveur de ligne">
      <h2>Robot suiveur de ligne</h2>
      <p><strong>Objectif :</strong> Concevoir un robot capable de suivre automatiquement une ligne tracée sur le sol grâce à des capteurs infrarouges.</p>
      <p><strong>Matériels utilisés :</strong></p>
       <ul>
        <li>Arduino UNO</li>
        <li>2 capteurs infrarouges</li>
        <li>Module L298N</li>
        <li>4 moteurs DC</li>
        <li>batterie</li>
      </ul>
      <p><strong>Description :</strong> Le robot lit en continu les signaux de ses capteurs IR pour détecter la ligne noire sur un fond blanc. En fonction de la position de la ligne, il ajuste la vitesse de ses moteurs pour corriger sa trajectoire. Ce projet introduit les principes de base de la robotique mobile et du contrôle en boucle fermée.</p>
    `;
  }

  if (projectId === "robotCouleur") {
    content = `
      <img src="robot_couleur.jpg" alt="Robot suiveur de couleur">
      <h2>Robot suiveur de couleur avec capteur TCS3200</h2>
      <p><strong>Objectif :</strong> Créer un robot autonome capable de naviguer dans un labyrinthe complexe.</p>
      <p><strong>Matériels utilisés :</strong></p> 
      <ul>
        <li>Arduino Mega</li>
        <li>Capteur de couleur TCS3200</li>
        <li>3 capteurs ultrason</li>
        <li>2 capteurs infrarouge</li>
      </ul>
      <p><strong>Description :</strong> le robot doit naviguer dans un labyrinthe bardé d'obstacles sans les toucher et il doit détecter un couleur au sol pour suivre les indications de direction (chaque couleur signifie un direction), le robot doit atteindre la sortie du labyrinthe sans intervention humaine.</p>
    `;
  }

  if (projectId === "irrigation") {
    content = `
      <img src="irrigation.jpg" alt="Système d'irrigation intelligente" class="project-img">
      <h2>Jumeau numérique pour un système d’irrigation intelligente</h2>
      <p><strong>Objectif :</strong> Simuler et contrôler à distance un système d’irrigation automatisé basé sur l’IoT.</p>
      <p><strong>Matériels et logiciels utilisés :</strong></p>
      <ul>
        <li>ESP32</li>
        <li>capteur d’humidité du sol</li>
        <li>pompe à eau</li>
        <li>vannes électriques</li>
        <li>IOT</li>
        <li>Blender</li>
        <li>Unity3D</li>
      </ul>
      <p><strong>Description :</strong> Le système surveille le taux d’humidité du sol et active automatiquement la pompe d’irrigation. Les données sont transmises via Wi-Fi pour analyse dans un tableau de bord connecté. Le modèle numérique permet de tester les performances du système avant sa mise en œuvre réelle.</p>
    `;
  }

  if (projectId === "matlab") {
    content = `
      <img src="matlab.jpg" alt="modélisation matlab" class="project-img">
      <h2>Modélisation des systèmes embarqués sous MATLAB/Simulink</h2>
      <p><strong>Objectif :</strong> Développer et simuler des modèles de systèmes embarqués pour l’analyse et la validation de performances.</p>
      <p><strong>Matériels et logiciels utilisés :</strong></p>
      <ul>
        <li>MATLAB/Simulink</li>
        <li>IOT</li>
        <li>systéme embarqué</li>
      </ul>
      <p><strong>Description :</strong> Création de blocs fonctionnels sous Simulink pour modéliser des systèmes de contrôle. Simulation du comportement dynamique, vérification de la stabilité et validation de la commande.</p>
    `;
  }

  if (projectId === "barrière") {
    content = `
      <img src="barrière.jpg" alt="barrière automatique" class="project-img">
      <h2>système de barrière automatique pour les péages</h2>
      <p><strong>Objectif :</strong> fournir une solution intelligente, sécurisée et automatisée controler à distance en temps réel.</p>
      <p><strong>Matériels et logiciels utilisés :</strong>
      <ul>
        <li>ESP32</li>
        <li>servomoteur</li>
        <li>les leds</li>
        <li>bouton poussoir</li>
        <li>Blender</li>
        <li>Digital Twins</li>
      </ul>
      <p><strong>Description :</strong> Créer un système de barrière automatique pour les péages basé sur l'ESP32 et l'IOT permet de controler et surveiller à distance l'accés aux routes à péages, ce système utilise des technologies sans fil pour automatiser l'ouverture et la fermeture de la barrière.</p>
    `;
  }

  modalBody.innerHTML = content;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Fermer la modale en cliquant à l’extérieur
window.onclick = function(event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
