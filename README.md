# 🎨 Projet ChangeColor

Un mini projet **HTML / CSS / JavaScript** qui permet de changer la couleur d’une boîte grâce à un champ texte et un bouton.  
Une animation rend le changement plus fluide, et une **barre de chargement** s’affiche automatiquement au démarrage de la page.

---

## 📂 Structure du projet

/mon-projet
├── index.html # Page principale
├── style.css # Styles (boîte, input, barre de chargement, etc.)
└── changeColor.js # Logique JavaScript

yaml
Copier le code

---

## ⚡ Fonctionnalités

- Entrer une couleur (nom, code hexadécimal, rgb, etc.) dans un input.
- Cliquer sur un bouton pour appliquer la couleur à la boîte.
- Animation visuelle (zoom de la boîte lors du changement).
- Barre de chargement qui se lance automatiquement au chargement de la page.

---

## 🚀 Utilisation

1. Ouvrir le fichier **index.html** dans ton navigateur.
2. Attendre la fin de la barre de chargement.
3. Entrer une couleur (exemple : `red`, `#00ffcc`, `rgb(100,150,200)`).
4. Cliquer sur le bouton → la boîte change de couleur avec animation.

---

## 🛠️ Technologies utilisées

- **HTML5** → structure de la page
- **CSS3** → styles + animations + barre de chargement
- **JavaScript (ES6)** → gestion des événements & logique du changement de couleur

---

## ✨ Améliorations possibles

- Vérifier si la couleur entrée est valide et afficher un message d’erreur si besoin.
- Ajouter un bouton "Couleur aléatoire".
- Sauvegarder la dernière couleur choisie avec `localStorage`.
- Améliorer la barre de chargement pour simuler un vrai "preloader".
