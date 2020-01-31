window.calcRT = ev => {
    const content = document.querySelectorAll('main'); // grabs all the content in the <main> element
    const numWords = content[0].innerText.split(' ').length; //counts number of words in the content
    const wordsPerMinute = 200; // Average reading speed.
    let result; // sets up a result to inject into the page
    if(numWords > 0){ // checks to see that there is actuallt some content
        let time = numWords / wordsPerMinute;
        result = `~${time.toFixed(2)} min read (${numWords} words)`;
    }
    document.querySelector('.reading-time').innerText = result;
};