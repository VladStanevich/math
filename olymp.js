document.addEventListener('DOMContentLoaded', function() {
    const classHeaders = document.querySelectorAll('.class-header');
    
    classHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Находим родительский элемент класса и переключаем класс active
            const classItem = this.parentElement;
            classItem.classList.toggle('active');
            
            // Закрываем другие открытые аккордеоны
            // if (classItem.classList.contains('active')) {
            //     document.querySelectorAll('.class-item').forEach(item => {
            //         if (item !== classItem && item.classList.contains('active')) {
            //             item.classList.remove('active');
            //         }
            //     });
            // }
        });
    });
    
    // По умолчанию открываем первый класс
    // if (classHeaders.length > 0) {
    //     classHeaders[0].parentElement.classList.add('active');
    // }
});