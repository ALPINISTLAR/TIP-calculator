// document.addEventListener('DOMContentLoaded', function () {
//   // handleTipButtonClick funksiyasini o'zgartirish
//   function handleTipButtonClick(button) {
//     // Barcha btn-tips klassli tugmalardan "btn-tips-selected" klassini olib tashlash
//     document.querySelectorAll('.btn-tips').forEach(function (btn) {
//       btn.classList.remove('btn-tips-selected');
//     });

//     // Tanlangan tugmaga "btn-tips-selected" klassini qo'shish
//     button.classList.add('btn-tips-selected');

//     // Id si "bill" va "n-of-p" bo'lgan inputlar qiymatlarini olish
//     const billValue = parseFloat(document.getElementById('bill').value);
//     const numOfPeopleValue = parseFloat(document.getElementById('n-of-p').value);

//     // Tugma textContent orqali foizni aniqlash va ushbu qiymatni numOfPeopleValue ga bo'lib "per-one" id li elementga chiqarish
//     const tipPercentage = parseFloat(button.textContent.replace('%', ''));
//     const perOneValue = ((billValue * tipPercentage) / 100 / numOfPeopleValue).toFixed(2);
//     const totalOneValue = (billValue / numOfPeopleValue + perOneValue / 10).toFixed(2);

//     // "per-one" id li elementga qiymatni joylash
//     document.getElementById('per-one').innerText = `$${perOneValue}`;
//     document.getElementById('total-one').innerText = `$${totalOneValue}`;
//   }

//   // Barcha btn-tips klassli tugmalarni tanlov qilish
//   document.querySelectorAll('.btn-tips').forEach(function (button) {
//     button.addEventListener('click', function () {
//       handleTipButtonClick(button);
//     });
//   });

//   // "btn-reset" tugmasi bosilganda sahifani yangilash
//   document.querySelector('.btn-reset').addEventListener('click', function () {
//     // Inputlarni tozalash
//     document.getElementById('bill').value = '';
//     document.getElementById('n-of-p').value = '';

//     // Barcha btn-tips klassli tugmalardan "btn-tips-selected" klassini olib tashlash
//     document.querySelectorAll('.btn-tips').forEach(function (btn) {
//       btn.classList.remove('btn-tips-selected');
//     });

//     // "per-one" id li elementni qiymatini tozalash
//     document.getElementById('per-one').innerText = '$0.00';
//     document.getElementById('total-one').innerText = '$0.00';
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  // handleTipButtonClick funksiyasini o'zgartirish
  function handleTipButtonClick(button) {
    // Barcha btn-tips klassli tugmalardan "btn-tips-selected" klassini olib tashlash
    document.querySelectorAll('.btn-tips').forEach(function (btn) {
      btn.classList.remove('btn-tips-selected');
    });

    // Tanlangan tugmaga "btn-tips-selected" klassini qo'shish
    button.classList.add('btn-tips-selected');

    // Id si "bill" va "n-of-p" bo'lgan inputlar qiymatlarini olish
    const billValue = parseFloat(document.getElementById('bill').value);
    const numOfPeopleInput = document.getElementById('n-of-p');
    const numOfPeopleValue = parseFloat(numOfPeopleInput.value);

    // "error" classli elementni topish
    const errorElement = document.querySelector('.error');

    // "n-of-p" qiymati 0 bo'lsa
    if (numOfPeopleValue === 0) {
      // "error" classli elementni ko'rsatish
      errorElement.style.opacity = 1;
      return; // funksiyani to'xtatish
    }

    // "error" classli elementni yashirish
    errorElement.style.opacity = 0;

    // Tugma textContent orqali foizni aniqlash va ushbu qiymatni numOfPeopleValue ga bo'lib "per-one" id li elementga chiqarish
    const tipPercentage = parseFloat(button.textContent.replace('%', ''));
    const perOneValue = ((billValue * tipPercentage) / 100 / numOfPeopleValue).toFixed(2);
    const totalOneValue = (billValue / numOfPeopleValue + perOneValue / 10).toFixed(2);

    // "per-one" id li elementga qiymatni joylash
    document.getElementById('per-one').innerText = `$${perOneValue}`;
    document.getElementById('total-one').innerText = `$${totalOneValue}`;
  }

  // Barcha btn-tips klassli tugmalarni tanlov qilish
  document.querySelectorAll('.btn-tips').forEach(function (button) {
    button.addEventListener('click', function () {
      handleTipButtonClick(button);
    });
  });

  // "btn-reset" tugmasi bosilganda sahifani yangilash
  document.querySelector('.btn-reset').addEventListener('click', function () {
    // Inputlarni tozalash
    document.getElementById('bill').value = '';
    document.getElementById('n-of-p').value = '';

    // Barcha btn-tips klassli tugmalardan "btn-tips-selected" klassini olib tashlash
    document.querySelectorAll('.btn-tips').forEach(function (btn) {
      btn.classList.remove('btn-tips-selected');
    });

    // "per-one" id li elementni qiymatini tozalash
    document.getElementById('per-one').innerText = '$0.00';
    document.getElementById('total-one').innerText = '$0.00';
  });
});
