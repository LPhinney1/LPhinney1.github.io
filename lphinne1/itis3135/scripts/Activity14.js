$(document).ready(function () {
    document.getElementById("toobin").addEventListener("click", async () => {
        try {
            let response = await fetch('../json/toobin.json');
            let data = await response.json();
            let speaker = data.speakers[0];

            let newMainElement = document.createElement("main");
            let newTitleElement = document.createElement("h1");
            let newMonthElement = document.createElement("h2");
            let newSpeakerElement = document.createElement("h3");
            let newImageElement = document.createElement("img");
            let newTextElement = document.createElement("p");

            newTitleElement.textContent = speaker.title;
            newMonthElement.textContent = speaker.month;
            newSpeakerElement.textContent = speaker.speaker;
            newImageElement.src = speaker.image;
            newTextElement.textContent = speaker.text;

            newMainElement.appendChild(newTitleElement);
            newMainElement.appendChild(newMonthElement);
            newMainElement.appendChild(newSpeakerElement);
            newMainElement.appendChild(newImageElement);
            newMainElement.appendChild(newTextElement);

            let oldMainElement = document.querySelector("main").parentNode;
            oldMainElement.replaceChild(newMainElement, document.querySelector("main"));
        }
        catch (error) {
            console.error('ERROR FETCHING JSON:', error);
        }
    });

    document.getElementById("sorkin").addEventListener("click", async () => {
        try {
            let response = await fetch('../json/sorkin.json');
            let data = await response.json();
            let speaker = data.speakers[0];

            let newMainElement = document.createElement("main");
            let newTitleElement = document.createElement("h1");
            let newMonthElement = document.createElement("h2");
            let newSpeakerElement = document.createElement("h3");
            let newImageElement = document.createElement("img");
            let newTextElement = document.createElement("p");

            newTitleElement.textContent = speaker.title;
            newMonthElement.textContent = speaker.month;
            newSpeakerElement.textContent = speaker.speaker;
            newImageElement.src = speaker.image;
            newTextElement.textContent = speaker.text;

            newMainElement.appendChild(newTitleElement);
            newMainElement.appendChild(newMonthElement);
            newMainElement.appendChild(newSpeakerElement);
            newMainElement.appendChild(newImageElement);
            newMainElement.appendChild(newTextElement);

            let oldMainElement = document.querySelector("main").parentNode;
            oldMainElement.replaceChild(newMainElement, document.querySelector("main"));
        }
        catch (error) {
            console.error('ERROR FETCHING JSON:', error);
        }
    });

    document.getElementById("chua").addEventListener("click", async () => {
        try {
            let response = await fetch('../json/chua.json');
            let data = await response.json();
            let speaker = data.speakers[0];

            let newMainElement = document.createElement("main");
            let newTitleElement = document.createElement("h1");
            let newMonthElement = document.createElement("h2");
            let newSpeakerElement = document.createElement("h3");
            let newImageElement = document.createElement("img");
            let newTextElement = document.createElement("p");

            newTitleElement.textContent = speaker.title;
            newMonthElement.textContent = speaker.month;
            newSpeakerElement.textContent = speaker.speaker;
            newImageElement.src = speaker.image;
            newTextElement.textContent = speaker.text;

            newMainElement.appendChild(newTitleElement);
            newMainElement.appendChild(newMonthElement);
            newMainElement.appendChild(newSpeakerElement);
            newMainElement.appendChild(newImageElement);
            newMainElement.appendChild(newTextElement);

            let oldMainElement = document.querySelector("main").parentNode;
            oldMainElement.replaceChild(newMainElement, document.querySelector("main"));
        }
        catch (error) {
            console.error('ERROR FETCHING JSON:', error);
        }
    });

    document.getElementById("sampson").addEventListener("click", async () => {
        try {
            let response = await fetch('../json/sampson.json');
            let data = await response.json();
            let speaker = data.speakers[0];

            let newMainElement = document.createElement("main");

            let newTitleElement = document.createElement("h1");
            let newMonthElement = document.createElement("h2");
            let newSpeakerElement = document.createElement("h3");
            let newImageElement = document.createElement("img");
            let newTextElement = document.createElement("p");

            newTitleElement.textContent = speaker.title;
            newMonthElement.textContent = speaker.month;
            newSpeakerElement.textContent = speaker.speaker;
            newImageElement.src = speaker.image;
            newTextElement.textContent = speaker.text;

            newMainElement.appendChild(newTitleElement);
            newMainElement.appendChild(newMonthElement);
            newMainElement.appendChild(newSpeakerElement);
            newMainElement.appendChild(newImageElement);
            newMainElement.appendChild(newTextElement);

            let oldMainElement = document.querySelector("main").parentNode;
            oldMainElement.replaceChild(newMainElement, document.querySelector("main"));
        }
        catch (error) {
            console.error('ERROR FETCHING JSON:', error);
        }
    });
});