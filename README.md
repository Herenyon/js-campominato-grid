divido in due il foglio js, una parte sopra per le funzioni e l'altra per le operazioni

nella parte funzioni, anche basandomi su quello fatto in classe stamattina comincio col fare l funzion che mi permetterà di aggiungere all'html il div con la classe preparata nel foglio di stile per poter crerare un quadrato

all'interno della stessa creo un evento che quando clicco sul quadrato cambia colore aggiungendo una classe apposita preparata in precedenza 

creo un'altra funzione che effettivamente va a inserirmi il div con la classe 

in ultimo creo un'altra funzione con in ingresso la variabile cellNumber con all'interno un for che andrà a ripetere la funzione precedente in base al valore di cellNumber 

nella secoda parte del foglio mi creo la variabile playButton che tramite l'id prenderà l'input del click del bottone inserito nell'html

creo una variabile containerBoard per dire poi alle funzioni sopra in quale contenitore stampare i div

creo un let buttonValue con il valore di false per poi utilizzarlo di seguito

creo un let cellNumber con un valore di 100 per avere la griglia 10 per 10

creo un evento click su playButton con dentro un if (buttonValue) con dentro il comando location.reload per poter ricaricare la pagina e quindi resettare le funzioni susseguito da buttonValue = false

creo un else con dentro la funzione createGrid(cellNumber) così, al click del bottone play, immettere nell'html tutti i div che permette il ciclo for al suo interno 
seguito poi da buttonValue = true in modo che la seconda volta in cui si clicca il bottone la pagina verrà ricaricata in modo di resettare le funzioni

infine faccio un document.getElementById con l'id del bottone.value così da poterne modificare il nome finché non verrà ricaricata la pagina