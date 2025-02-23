document.addEventListener('DOMContentLoaded', function() {
    
    // Your JavaScript code here
    // console.log("DOM fully loaded and parsed");

    const path = window.location.pathname;
    // console.log("Path:", path);
    
    const filename = path.split('/').pop();
    // console.log("Filename:", filename);

    if(filename)
    if (filename.includes('sloka')) {
        // Do something
        // console.log("Filename contains 'sloka'");

        const foldername = path.split('/')[1];

        const sloka_current = filename.replace('sloka', '').replace('.html', '');
        // console.log("Sloka #:", sloka_current);

        const chapter_current = foldername.charAt(foldername.length - 1);
        // console.log("Chapter #:", chapter_current);

        const slokaNumber = parseInt(sloka_current, 10);
        // console.log("Sloka Number:", slokaNumber);

        const chapterNumber = parseInt(chapter_current, 10);
        // console.log("Chapter Number:", chapterNumber);

        const slokasPerChapter = {
            1: 47,
            2: 72,
            3: 43,
            4: 42,
            5: 29,
            6: 47,
            7: 30,
            8: 28,
            9: 34,
            10: 42,
            11: 55,
            12: 20,
            13: 35,
            14: 27,
            15: 20,
            16: 24,
            17: 28,
            18: 78
        };

        // console.log("Slokas in Chapter:", slokasPerChapter[chapterNumber]);

        const prevSloka = slokaNumber - 1;
        const nextSloka = slokaNumber + 1;

        if(prevSloka > 0) {
            // console.log("Previous Sloka:", prevSloka);
            document.getElementsByClassName("prev")[0].href = `./sloka${prevSloka}.html`;
        }
        else{
            document.getElementsByClassName("prev")[0].style.display = "none";
        }

        if(nextSloka <= slokasPerChapter[chapterNumber]) {
            // console.log("Next Sloka:", nextSloka);
            document.getElementsByClassName("next")[0].href = `./sloka${nextSloka}.html`;
        }
        else{
            document.getElementsByClassName("next")[0].style.display = "none";
        }

        document.getElementsByClassName("main-heading")[0].innerHTML = `भगवद्गीता - ${chapterNumber}.${slokaNumber}`;
        document.getElementsByTagName("title")[0].innerHTML = `Gita - ${chapterNumber}.${slokaNumber}`;
    }
    
});