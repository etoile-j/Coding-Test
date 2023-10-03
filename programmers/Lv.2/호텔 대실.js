function solution(book_time) {
    const rooms = [];

    // book_time 정리(퇴실시간 +10, 분단위로 교체)
    book_time = book_time.map((v) => {
        const [start_h, start_m] = v[0].split(':').map((v) => Number(v));
        const [end_h, end_m] = v[1].split(':').map((v) => Number(v));
        return [start_h * 60 + start_m, end_h * 60 + end_m + 10];
    });

    book_time.sort((a, b) => a[0] - b[0]);
    rooms.push(book_time[0][1]);

    // 시작시간 작은 것부터 포문 돌리면서 rooms에 넣어줌
    for (let i = 1; i < book_time.length; i++) {
        const [start, end] = book_time[i];
        if (start < Math.min(...rooms)) {
            rooms.push(end);
        } else {
            rooms[rooms.indexOf(Math.min(...rooms))] = end;
        }
    }

    return rooms.length;
}
