const jsonurl = "../JSON/popular_movies.json"
var request = new XMLHttpRequest();
request.open("GET", jsonurl, false);
request.send(null);

window.onload = function () {
    // 解析json
    let data = JSON.parse(request.responseText);
    console.log(data);
    request = null;

    let img = document.getElementById('one_by_one_img'); // 图片
    let left_box = document.getElementById('show-box-left'); // 左盒子
    let left_btn = document.getElementById('switch-left-btn'); // 左边按钮
    let right_btn = document.getElementById('switch-right-btn'); // 右边按钮
    imgurls = [];
    for (let i = 0; i < data.length; i++) {
        imgurls.push(data[i].imgurl);
    }

    let index = 0; // 索引
    let timer = null; // 定时器

    // 播放第一张图片
    img.src = data[0].imgurl;
    left_box.innerHTML = `
        <div><span>电影名称：</span>${data[0].电影名称}</div>
        <div><span>标签：</span>${data[0].标签}</div>
        <div><span>上映日期：</span>${data[0].上映日期}</div>
        <div><span>简介：</span>${data[0].简介}</div>
        <div><span>演员：</span>${data[0].演员}</div>
        <div><span>导演：</span>${data[0].导演}</div>
        <div><span>编剧：</span>${data[0].编剧}</div>
        `;

    // 自动播放
    autoPlay();

    // 鼠标移入暂停
    img.onmouseover = function () {
        clearInterval(timer);
    }
    img.onmouseout = function () {
        autoPlay();
    }
    left_box.onmouseover = function () {
        clearInterval(timer);
    }
    left_box.onmouseout = function () {
        autoPlay();
    }
    left_btn.onmouseover = function () {
        clearInterval(timer);
    }
    left_btn.onmouseout = function () {
        autoPlay();
    }
    right_btn.onmouseover = function () {
        clearInterval(timer);
    }
    right_btn.onmouseout = function () {
        autoPlay();
    }

    // 点击左右按钮切换图片
    left_btn.onclick = function () {
        clearInterval(timer);
        index == 0 ? index = data.length - 1 : index--;
        play();
    }
    right_btn.onclick = function () {
        clearInterval(timer);
        index == data.length - 1 ? index = 0 : index++;
        play();
    }

    // 自动播放方法
    function autoPlay() {
        timer = setInterval(
            function () {
                index == data.length - 1 ? index = 0 : index++;
                play();
            }
            , 2000);
    }

    // 切换内容方法
    function play() {
        img.src = data[index].imgurl;
        left_box.innerHTML = `
        <div><span>电影名称：</span>${data[index].电影名称}</div>
        <div><span>标签：</span>${data[index].标签}</div>
        <div><span>上映日期：</span>${data[index].上映日期}</div>
        <div><span>简介：</span>${data[index].简介}</div>
        <div><span>演员：</span>${data[index].演员}</div>
        <div><span>导演：</span>${data[index].导演}</div>
        <div><span>编剧：</span>${data[index].编剧}</div>
        `;
    }
};