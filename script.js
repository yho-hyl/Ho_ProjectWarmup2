const storyNodes = [

{
    image: "images/entrance.jpg",
    text: "You stand inside the entrance of the abandoned house.",
    choices: [
        {text: "Walk into the hallway", next: 1},
        {text: "Go into the bedroom", next: 2}
    ]
},

{
    image: "images/hallway.jpg",
    text: "The hallway stretches into darkness.",
    choices: [
        {text: "Go stairs", next: 3},
        {text: "Return to the entrance", next: 0}
    ]
},

{
    image: "images/bedroom.jpg",
    text: "The bedroom smells like rust and dust.",
    choices: [
        {text: "Return to the entrance", next: 0}
    ]
},

{
    image: "images/stairs.jpg",
    text: "The stairs landing creaks beneath your feet.",
    choices: [
        {text: "Go back to the hallway", next: 1}
    ]
}

];

function displayNode(index) {

    const node = storyNodes[index];

    const imageElement = document.getElementById("scene-image");
    const textElement = document.getElementById("scene-text");
    const choicesContainer = document.getElementById("choices-container");

    imageElement.src = node.image;
    textElement.textContent = node.text;

    choicesContainer.innerHTML = "";

    if (node.choices.length === 0) {

        const message = document.createElement("p");
        message.textContent = "There is no way forward.";
        choicesContainer.appendChild(message);

    } else {

        node.choices.forEach(choice => {

            const button = document.createElement("button");
            button.textContent = choice.text;

            button.onclick = function () {
                displayNode(choice.next);
            };

            choicesContainer.appendChild(button);

        });

    }
}

displayNode(0);
