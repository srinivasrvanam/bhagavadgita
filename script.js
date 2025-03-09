function showConsoleLog(message){
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('debug') === 'true') {
        console.log("SV: " + message);
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    // Your JavaScript code here
    // console.log("DOM fully loaded and parsed");

    const path = window.location.pathname;
    showConsoleLog('test');
    // console.log("Path:", path);
    showConsoleLog("Path: " + path);
    
    const pathArray = path.split('/');
    showConsoleLog("Path Array: " + pathArray);
    const filename = pathArray.pop();
    // console.log("Filename:", filename);

    if(filename)
    if (filename.includes('sloka')) {
        // Do something
        // console.log("Filename contains 'sloka'");
        showConsoleLog("Filename contains 'sloka'");

        const foldername = pathArray[pathArray.length - 1];

        const sloka_current = filename.replace('sloka', '').replace('.html', '');
        // console.log("Sloka #:", sloka_current);
        showConsoleLog("Sloka #: " + sloka_current);

        const chapter_current = foldername.charAt(foldername.length - 1);
        // console.log("Chapter #:", chapter_current);
        showConsoleLog("Chapter #: " + chapter_current);

        const slokaNumber = parseInt(sloka_current, 10);
        // console.log("Sloka Number:", slokaNumber);
        showConsoleLog("Sloka Number: " + slokaNumber);

        const chapterNumber = parseInt(chapter_current, 10);
        // console.log("Chapter Number:", chapterNumber);
        showConsoleLog("Chapter Number: " + chapterNumber);

        // Indicates the starting sloka of each chapter
        const slokasStart = {
            1: 1,
            2: 11, /*1*/
            3: 1,
            4: 1,
            5: 1,
            6: 1,
            7: 1,
            8: 1,
            9: 1,
            10: 1,
            11: 1,
            12: 1,
            13: 1,
            14: 1,
            15: 1,
            16: 1,
            17: 1,
            18: 1
        };

        // Indicates th ending sloka of each chapter
        const slokasPerChapter = {
            1: 47,
            2: 19, /*72*/
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

        if(prevSloka >= slokasStart[chapterNumber]) {
            // console.log("Previous Sloka:", prevSloka);
            showConsoleLog("Previous Sloka: " + prevSloka);
            document.getElementsByClassName("prev")[0].href = `./sloka${prevSloka}.html`;
        }
        else{
            document.getElementsByClassName("prev")[0].style.display = "none";
        }

        if(nextSloka <= slokasPerChapter[chapterNumber]) {
            // console.log("Next Sloka:", nextSloka);
            showConsoleLog("Next Sloka: " + nextSloka);
            document.getElementsByClassName("next")[0].href = `./sloka${nextSloka}.html`;
        }
        else{
            document.getElementsByClassName("next")[0].style.display = "none";
        }

        document.getElementsByClassName("main-heading")[0].innerHTML = `भगवद्गीता - ${chapterNumber}.${slokaNumber}`;
        document.getElementsByTagName("title")[0].innerHTML = `Gita - ${chapterNumber}.${slokaNumber}`;
    }
    
});