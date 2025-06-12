document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.stage-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Снимаем активность со всех вкладок
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Скрываем все блоки с олимпиадами
            contents.forEach(content => {
                content.classList.remove('active');
            });

            // Показываем выбранный этап
            const stageId = tab.dataset.stage;
            document.getElementById(stageId).classList.add('active');
        });
    });
});