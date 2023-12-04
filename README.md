# User Stories & Acceptanskriterier

- Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.
  - Användaren kan välja önskat datum för bokningen.
  - Användaren kan välja önskad tid för bokningen.
  - Användaren kan ange antal spelare för bokningen.
  - Användaren kan ange antal banor för bokningen.

- Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.
  - För varje spelare i bokningen ska användaren kunna välja önskad skostorlek.

- Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.
  - Användaren kan klicka på en "Ta bort"-knapp bredvid varje skostorleksfält.
  - När ett skostorleksfält tas bort, uppdateras bokningen och visar korrekt antal skostorleksfält.

- Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).
  - Användaren ska kunna trycka på en bokningsknapp.
  - Efter att ha skickat bokningen, ska systemet generera ett unikt bokningsnummer.
  - Systemet ska beräkna totalsumman (120 kr / person + 100 kr / bana) och visa det för användaren.
  - Användaren ska få en bekräftelse med bokningsnummer och totalsumma.

- Som användare vill jag kunna navigera mellan boknings-och bekräftelsevyn.
  - Användaren ska kunna navigera tillbaka från bekräftelsevyn till bokningsvyn.
  - Användaren ska kunna navigera från bokningsvyn till bekräftelsevyn.

- Som användare vill jag bli varnad om jag har fyllt i fälten felaktigt.
  - Om jag missat att fylla i ett fält, ska beställningen inte gå igenom och jag ska få ett felmeddelande.
  - Om antal skor inte matchar antalet personer, ska beställningen inte gå igenom och jag ska få ett felmeddelande.
