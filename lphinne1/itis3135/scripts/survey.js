//ON SUBMIT BUTTON LISTENER
document.getElementById("main-form").addEventListener("submit", function(_afterSubmit) 
{
    event.preventDefault();

    //TITLE / MASCOT
    let name = document.getElementById("name").value;
    let mascot = document.getElementById("mascot").value;
    var title = document.createElement('h1');
    title.textContent = name +"'s "+ mascot;
    document.getElementById('main-form').appendChild(title);
    var introText = document.createElement("h2");
    introText.textContent = "Introduction";
    document.getElementById('main-form').appendChild(introText);


    //IMAGE / FIGURE
    var figureImage = document.createElement('figure');
    figureImage.id = "figureImage"
    document.getElementById('main-form').appendChild(figureImage);

    let image = document.getElementById("imageUp");
    var imageFile = image.files[0];
    if (imageFile) 
    {
        var imageResult = document.createElement('img');
        imageResult.src = URL.createObjectURL(imageFile);
        imageResult.className = "image-intro";
        document.getElementById('figureImage').appendChild(imageResult);
        URL.revokeObjectURL(imageResult);
    }

    //IMAGE CAPTION
    let caption = document.getElementById("caption").value;
    var captionText = document.createElement('figcaption');
    captionText.textContent = caption;
    document.getElementById('figureImage').appendChild(captionText);

    //LIST / UL ELEMENT
    var mainList = document.createElement('ul');
    mainList.id = "main-list"
    document.getElementById('main-form').appendChild(mainList);


    //PERSONAL BG
    let personal_background = document.getElementById("personal_background").value;
    var personal_backgroundText = document.createElement('li');
    personal_backgroundText.textContent = 'Personal Background: '+personal_background;
    document.getElementById('main-list').appendChild(personal_backgroundText);

    //PROFESSIONAL BG
    let professional_background = document.getElementById("professional_background").value;
    var professional_backgroundText = document.createElement('li');
    professional_backgroundText.textContent = 'Professional Background: '+professional_background;
    document.getElementById('main-list').appendChild(professional_backgroundText);

    //ACADEMIC BG
    let academic_background = document.getElementById("academic_background").value;
    var academic_backgroundText = document.createElement('li');
    academic_backgroundText.textContent = 'Academic Background: '+academic_background;
    document.getElementById('main-list').appendChild(academic_backgroundText);

    //WEB DEV BG
    let web_dev_background = document.getElementById("web_dev_background").value;
    var web_dev_backgroundText = document.createElement('li');
    web_dev_backgroundText.textContent = 'Background in this Subject: '+web_dev_background;
    document.getElementById('main-list').appendChild( web_dev_backgroundText);

    //PLATFORM
    let platform = document.getElementById("platform").value;
    var platformText = document.createElement('li');
    platformText.textContent = 'Primary Computer Platform: ' + platform;
    document.getElementById('main-list').appendChild(platformText);

    //CLASSES
    var dividerUL = document.createElement('ul');    
    dividerUL.textContent = "Classes I'm Taking: ";    
    document.getElementById('main-list').appendChild(dividerUL);
    var classesText = document.createElement('ul');
    classesText.id = 'classesList';
    document.getElementById('main-list').appendChild(classesText);

    var classesInputs = document.querySelectorAll('input#classesText');
    classesInputs.forEach((input) => {
        let classes = input.value;
        var classesText2 = document.createElement('li');
        classesText2.textContent = classes;
        classesText.appendChild(classesText2);
        document.getElementById('classesList').appendChild(classesText2);
    });

    //OPTIONAL
    if (document.getElementById("funny").value !== '')
    {
        let funny = document.getElementById("funny").value;
        var funnyText = document.createElement('li');
        funnyText.textContent = funny;
        document.getElementById('main-list').appendChild(funnyText);
    }

    if (document.getElementById("additional").value !== '')
    {
        let additional = document.getElementById("additional").value;
        var additionalText = document.createElement('li');
        additionalText.textContent = "I'd also like to Share: "+additional;
        document.getElementById('main-list').appendChild(additionalText);
    }
});

//ON RESET BUTTON LISTENER
document.getElementById("main-form").addEventListener("reset", function(_afterReset) 
{
    window.location.reload();
});

//ADD TEXT BOX
function addTextEntry()
{
    var newLabel = document.createElement('label');
    newLabel.id = 'classes';
    newLabel.htmlFor = 'classesText'
    newLabel.textContent = '(Class ID#) + | + (Course Description) | ';
    
    var newText = document.createElement('input');    
    newText.type = 'text';
    newText.id = 'classesText';
    newText.name = 'classesText';
    newText.required = true;

    newLabel.appendChild(newText);
    document.getElementById('classesTextEntry').appendChild(newLabel);
}

//REMOVE TEXT BOX
function deleteTextEntry()
{
    document.getElementById("classes").remove();        
    if(document.getElementById("classes") === null)
    {
        alert("You have to add at least one class.");
        addTextEntry();
    }
}