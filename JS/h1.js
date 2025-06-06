let jsonurl; // json文件路径


// 请求热门电影轮播图json文件
axios.get("../JSON/popular_movies.json").then(function (response) {
    data_popular_movies = response.data;
    console.log(data_popular_movies);
});

// 请求top10电影列表json文件
axios.get("../JSON/top10.json").then(function (response) {
    data_top10_list = response.data;
    console.log(data_top10_list);
});

window.onload = function () {
    // top10电影列表
    let top10_half_1 = document.getElementById('top10-half-1');
    let top10_half_2 = document.getElementById('top10-half-2');
    console.log(top10_half_1, top10_half_2);

    top10_half_1.innerHTML = generateTop10HTML(data_top10_list, 0, 5);
    top10_half_2.innerHTML = generateTop10HTML(data_top10_list, 5, 10);

    function generateTop10HTML(data, startIndex, endIndex) {
        let html = '';
        for (let i = startIndex; i < endIndex && i < data.length; i++) {
            html += `
        <div class="about-top10 card-2">
          <div class="title">Top${i + 1}</div>
          <div class="card-1 img-box">
            <img src="${data[i].imgurl}" alt="" />
          </div>
          <div class="text-box">
            <div><span>电影名称：</span>${data[i].电影名称}</div>
            <div><span>标签：</span>${data[i].标签}</div>
            <div><span>上映日期：</span>${data[i].上映时间}</div>
          </div>
        </div>
        `;
        }
        return html;
    }

    // 轮播图
    let popular_movies_img = document.getElementById('one_by_one_img'); // 图片
    let popular_movies_left_box = document.getElementById('show-box-left'); // 左盒子
    let popular_movies_left_btn = document.getElementById('switch-left-btn'); // 左边按钮
    let popular_movies_right_btn = document.getElementById('switch-right-btn'); // 右边按钮

    let index = 0; // 索引
    let timer = null; // 定时器

    // 播放第一张图片
    popular_movies_img.src = data_popular_movies[0].imgurl;
    popular_movies_left_box.innerHTML = `
        <div><span>电影名称：</span>${data_popular_movies[0].电影名称}</div>
        <div><span>标签：</span>${data_popular_movies[0].标签}</div>
        <div><span>上映日期：</span>${data_popular_movies[0].上映日期}</div>
        <div><span>简介：</span>${data_popular_movies[0].简介}</div>
        <div><span>演员：</span>${data_popular_movies[0].演员}</div>
        <div><span>导演：</span>${data_popular_movies[0].导演}</div>
        <div><span>编剧：</span>${data_popular_movies[0].编剧}</div>
        `;

    // 自动播放
    autoPlay();

    // 鼠标移入按钮暂停
    popular_movies_left_btn.onmouseover = function () {
        clearInterval(timer);
    }
    popular_movies_left_btn.onmouseout = function () {
        autoPlay();
    }
    popular_movies_right_btn.onmouseover = function () {
        clearInterval(timer);
    }
    popular_movies_right_btn.onmouseout = function () {
        autoPlay();
    }

    // 点击左右按钮切换图片
    popular_movies_left_btn.onclick = function () {
        clearInterval(timer);
        index == 0 ? index = data_popular_movies.length - 1 : index--;
        play();
    }
    popular_movies_right_btn.onclick = function () {
        clearInterval(timer);
        index == data_popular_movies.length - 1 ? index = 0 : index++;
        play();
    }

    // 自动播放方法
    function autoPlay() {
        timer = setInterval(
            function () {
                index == data_popular_movies.length - 1 ? index = 0 : index++;
                play();
            }, 2000);
    }

    // 切换内容方法
    function play() {
        popular_movies_img.src = data_popular_movies[index].imgurl;
        popular_movies_left_box.innerHTML = `
        <div><span>电影名称：</span>${data_popular_movies[index].电影名称}</div>
        <div><span>标签：</span>${data_popular_movies[index].标签}</div>
        <div><span>上映日期：</span>${data_popular_movies[index].上映日期}</div>
        <div><span>简介：</span>${data_popular_movies[index].简介}</div>
        <div><span>演员：</span>${data_popular_movies[index].演员}</div>
        <div><span>导演：</span>${data_popular_movies[index].导演}</div>
        <div><span>编剧：</span>${data_popular_movies[index].编剧}</div>
        `;
    }
};