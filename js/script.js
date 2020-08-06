window.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // !Получаем все нужные нам элементы на странице
   let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

   function hideTabContent(a) {
      for (let i = a; i < tabContent.length; i++) {
         tabContent[i].classList.remove('show');
         tabContent[i].classList.add('hide');
      }
   }

   hideTabContent(1);


   function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) {
         tabContent[b].classList.remove('hide');
         tabContent[b].classList.add('show');
      }
   }


   info.addEventListener('click', function (event) {
      let target = event.target;
      if (target && target.classList.contains('info-header-tab')) {
         for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
               hideTabContent(0);
               showTabContent(i);
               break;

            }
         }
      }
   });

   //! timer

   // let deadline = '2020-08-07';
   const deadline = new Date(Date.parse(new Date()) + 20 * 60 * 60 * 1000);





   function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date()),
         seconds = Math.floor((t / 1000) % 60),
         minutes = Math.floor((t / 1000 / 60) % 60),
         hours = Math.floor((t / (1000 * 60 * 60)));

      return {
         'total': t,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };

   }

   function setClock(id, endtime) {
      let timer = document.getElementById(id),
         hoursSpan = timer.querySelector('.hours'),
         minutesSpan = timer.querySelector('.minutes'),
         secondsSpan = timer.querySelector('.seconds'),
         timeInterval = setInterval(updateClock, 1000);



      function updateClock() {
         let t = getTimeRemaining(endtime);
         hoursSpan.textContent = ('0' + t.hours).slice(-2);
         minutesSpan.textContent = ('0' + t.minutes).slice(-2);
         secondsSpan.textContent = ('0' + t.seconds).slice(-2);

         if (t.total <= 0) {
            clearInterval(timeInterval);
         }

      }
   }
   setClock('timer', deadline);
   // setClock('timer', deadline);

});