
window.onload = function () {
  //  top102025数据
  axios.get("../JSON/top10_2025.json").then(function (response) {
    data_top10_list = response.data;

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
            <div>${data[i].电影名称}</div>
          </div>
        </div>
        `;
      }
      return html;
    }
  });
}
