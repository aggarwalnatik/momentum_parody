const roasts = ["Is your drama going to an intermission soon?", "It’s a shame you can’t Photoshop your personality.",
    "Jealousy is a disease. Get well soon, bitch! ", "If I had a face like yours I’d sue my parents.", "I forgot the world revolves around you. My apologies! How silly of me.", "Hold still. I’m trying to imagine you with a personality.",
    "Don’t be ashamed of who you are. That’s your parents’ job.", "If you’re going to be two-faced, at least make one of them pretty.", "Oops, my bad. I could’ve sworn I was dealing with an adult.", "I would smack you, but I’m against animal abuse."];


var roast = document.getElementById('roasts');
roast.innerHTML = roasts[Math.floor(Math.random() * roasts.length)];
