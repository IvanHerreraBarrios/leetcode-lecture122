var mostCommonWord = function(paragraph, banned){
    paragraph = paragraph.toLowerCase()
    const freqs = {};
    words = paragraph.split(/\W+/);
    banned.push("");
    console.log(words);

    for (let w of words) {
        if(!banned.includes(w)){
            if (freqs[w]) {
                freqs[w]++;
            } else {
                freqs[w] = 1;
            }
        }
       
    }

    console.log(freqs)

    let max = 0;
    let maxWord = "";

    for (let w in freqs) {
        if (freqs[w] > max) {
            max = freqs[w];
            maxWord = w;
        }
    }
    return maxWord;
};