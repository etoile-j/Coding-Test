function solution(files) {
    return files
        .map((v) => v.match(/(\D{1,})(\d{1,5})/))
        .sort((a, b) => {
            if (a[1].toLowerCase() !== b[1].toLowerCase()) {
                return a[1].toLowerCase() > b[1].toLowerCase() ? 1 : -1;
            } else return parseInt(a[2]) - parseInt(b[2]);
        })
        .map((v) => v.input);
}
