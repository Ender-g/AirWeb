const jsonurl = "../JSON/popular_movies.json"
var request = new XMLHttpRequest();
request.open("GET", jsonurl, false);
request.send(null);

window.onload = function () {
    // 解析json
    let data = JSON.parse(request.responseText);
    console.log(data);
    request = null;

    let img = document.getElementById('one_by_one_img');
    // 获取id为show-box-right的所有元素
    let right = document.getElementById('show-box-right');

    let index = 1; // 索引
    console.log(img);

    // 播放第一张图片
    img.src = data[0].imgurl;
    right.innerHTML = `
        <div><span>电影名称：</span>${data[0].电影名称}</div>
        <div><span>标签：</span>${data[0].标签}</div>
        <div><span>上映日期：</span>${data[0].上映日期}</div>
        <div><span>简介：</span>${data[0].简介}</div>
        <div><span>演员：</span>${data[0].演员}</div>
        <div><span>导演：</span>${data[0].导演}</div>
        <div><span>编剧：</span>${data[0].编剧}</div>
        `;
    setInterval(play, 3000);
    function play() {
        img.src = data[index].imgurl;
        right.innerHTML = `
        <div><span>电影名称：</span>${data[index].电影名称}</div>
        <div><span>标签：</span>${data[index].标签}</div>
        <div><span>上映日期：</span>${data[index].上映日期}</div>
        <div><span>简介：</span>${data[index].简介}</div>
        <div><span>演员：</span>${data[index].演员}</div>
        <div><span>导演：</span>${data[index].导演}</div>
        <div><span>编剧：</span>${data[index].编剧}</div>
        `;
        index = (index + 1) % data.length;
        console.log(index);
        console.log(img.src);
    }

};