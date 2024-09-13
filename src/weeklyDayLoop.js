function getDayLoop(day) {
    const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

    // regarde si le numero est juste
    if (day < 1 || day > 7) {
        return "erreur";
    }

    // Boucle pour retrouver le jour
    for (let i = 0; i < jours.length; i++) {
        if (day === i + 1) {
            return jours[i];
        }
    }
}

console.log(getDayLoop(3));  // "mercredi"