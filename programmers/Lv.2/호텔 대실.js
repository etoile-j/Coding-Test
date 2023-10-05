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

// 하루 시간 분 단위만큼의 0이 든 배열 만들고,
// 각 객실 이용 시간에 포함되는 분을 모두 +1, 배열의 가장 큰 값 리턴하는 방법
function makeMinStamp(time) {
    const [hour, min] = time.split(':').map((v) => Number(v));
    return hour * 60 + min;
}

function solution(book_time) {
    const timeArr = Array.from({ length: makeMinStamp('23:59') + 10 }, () => 0);

    book_time.forEach((time) => {
        const [s, e] = time;
        let start = makeMinStamp(s);
        const end = makeMinStamp(e) + 9;

        for (start; start <= end; start++) {
            timeArr[start]++;
        }
    });

    return Math.max(...timeArr);
}
