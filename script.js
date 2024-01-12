let poems = [
    {
        poem:
            `<p>
            Желаю мира и добра, <br>
            Любви, душевного тепла! <br>
            Пускай вам этот Новый год <br>
            Успех и радость принесет! <br>
        </p>
        <p>
            Пусть Новый год откроет двери <br>
            В мир волшебства, заботы, веры. <br>
            И всё хорошее начнется! <br>
            Удача пусть вам улыбнется! <br>
        </p>`,
        bg: `url('img/bg1.jpg')`
    },
    {
        poem:
            `<p>
            С Новым годом от души <br>
            Вас поздравить мы спешим! <br>
            И желаем впечатлений, <br>
            Самых радостных мгновений! <br>
        </p>
        <p>
            Пусть исполнятся мечты, <br>
            Счастья в жизни, доброты, <br>
            Чуда, сказки, волшебства <br>
            И душевного тепла. <br>
        </p>
        <p>
            Старый год уносит пусть <br>
            Все проблемы, беды, грусть, <br>
            Ну а новый − принесет <br> 
            В жизни новый поворот! <br>
        </p>`,
        bg: `url('img/bg2.jpg')`
    },
    {
        poem:
            `<p>
            Пусть год уходящий с собой заберет <br>
            Проблемы, недуги, ненастье, <br>
            А новый − здоровье и радость несет, <br> 
            Любовь доброту и участье! <br>
        </p>
        <p>
            Чудес новогодних, добра, волшебства, <br>
            Уюта, семейного счастья, <br>
            Улыбок, веселья, достатка, тепла, <br> 
            Не знать ни забот, ни напастей. <br>
        </p>`,
        bg: `url('img/bg3.jpg')`
    },
]

let wrapper = document.querySelector('.wrapper');
let btn = document.getElementById('btn');
let contentPoems = document.querySelector('.poem');

btn.addEventListener('click', function () {
    randomIndex = Math.floor(Math.random() * poems.length);
    contentPoems.innerHTML = '';
    contentPoems.innerHTML = poems[randomIndex].poem;
})