const sw = document.getElementById('switch'), KEY = 'darkMode';

if (localStorage.getItem(KEY) === 'true') {
    document.body.classList.add('dark');
    sw.checked = true;
}
sw.addEventListener('change', () => {
    document.body.classList.toggle('dark', sw.checked);
    localStorage.setItem(KEY, sw.checked);
});

// 木曜日(4)ならメッセージを表示
if (new Date().getDay() === 4) {
    document.getElementById('message').textContent = '今日は文春の発売日！';
}
