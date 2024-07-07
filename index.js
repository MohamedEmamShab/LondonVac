document.addEventListener("DOMContentLoaded", function() {
    // Create elements
    const body = document.body;
    const ul = document.createElement("ul");

    const days = [
        {
            day: "Sunday",
            links: [
                { name: "West-minster", href: "Westminster.html" },
                { name: "St. James park", href: "St. James park.html" },
                { name: "Buckingham palace", href: "Buckingham palace.html" },
                { name: "London eye", href: "London eye.html" },
                { name: "Big Ben", href: "Big Ben.html" }
            ]
        },
        {
            day: "Monday",
            links: [
                { name: "Westfield london mall", href: "Westfield London mall.html" }
            ]
        },
        {
            day: "Tuesday",
            links: [
                { name: "Soho", href: "soho.html" },
                { name: "Piccadilly square", href: "Piccadilly square.html" },
                { name: "Hyde park", href: "Hyde park.html" },
                { name: "M and M store", href: "m and m store.html" }
            ]
        },
        {
            day: "Wednesday",
            links: [
                { name: "Madame Tussaud", href: "madame Tussaud.html" },
                { name: "Covent garden", href: "covent garden.html" }
            ]
        },
        {
            day: "Thursday",
            links: [
                { name: "London zoo", href: "London zoo.html" },
                { name: "IFS cloud cable car", href: "IFS cloud cable car.html" },
                { name: "Kyoto garden", href: "Kyoto garden.html" }
            ]
        },
        { day: "Dua", links: [] },
        { day: "Home", links: [] },
        { day: "Translator", links: [] }
    ];

    days.forEach(day => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = day.day === "Dua" || day.day === "Home" || day.day === "Translator" ? day.day.toLowerCase() + ".html" : day.day + ".html";
        a.textContent = day.day;
        li.appendChild(a);

        if (day.links.length > 0) {
            const dropdown = document.createElement("ul");
            dropdown.classList.add("dropdown");
            day.links.forEach(link => {
                const subLi = document.createElement("li");
                const subA = document.createElement("a");
                subA.href = link.href;
                subA.textContent = link.name;
                subLi.appendChild(subA);
                dropdown.appendChild(subLi);
            });
            li.appendChild(dropdown);
        }

        ul.appendChild(li);
    });

    body.appendChild(ul);

    const style = document.createElement("style");
    style.textContent = `
        body {
            background-image: url(Home.jpg);
            background-repeat: no-repeat;
            background-size: cover;
        }
        font {
            color: red;
            size: 40;
        }
    `;
    body.appendChild(style);

    const title = document.createElement("font");
    title.color = "red";
    title.size = "40";
    title.textContent = "London Trip";
    body.appendChild(title);

    const subTitle = document.createElement("br");
    body.appendChild(subTitle);

    const date = document.createElement("font");
    date.color = "blue";
    date.size = "10";
    date.textContent = "13 July 2024-19 July 2024";
    body.appendChild(date);

    const paragraph = document.createElement("p");
    paragraph.innerHTML = `
        <br> <font color="yellow" size="10">Recommended to tilt your phone!</font>
        <br><br><br> <font color="brown" size="10">Press on the days and ____dropdowns will appear and select the place you want and click on it</font>
        <p><br><font color="green" size="10">This website looks better on laptops</font></p>
    `;
    body.appendChild(paragraph);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "style.css";
    document.head.appendChild(link);

    const instructions = document.createElement("br");
    body.appendChild(instructions);

    const steps = document.createElement("font");
    steps.color = "red";
    steps.size = "30";
    steps.textContent = "For phone users, to have a better view, do the following steps:";
    body.appendChild(steps);

    const img1 = document.createElement("img");
    img1.src = "WhatsApp Image 2024-07-07 at 04.22.37_63ac284b.jpg";
    img1.height = 600;
    body.appendChild(img1);

    const img2 = document.createElement("br");
    body.appendChild(img2);

    const img3 = document.createElement("img");
    img3.src = "WhatsApp Image 2024-07-07 at 04.22.37_c180bc45.jpg";
    img3.height = 600;
    img3.align = "left";
    body.appendChild(img3);
});
