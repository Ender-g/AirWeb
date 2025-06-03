window.onload = function () {
    updateTime();
    setInterval(updateTime, 1000);
};

function updateTime() {

    const now = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('zh-CN', options);
    document.getElementById('current-time').textContent = now.toLocaleTimeString('zh-CN', { hour12: false });
}