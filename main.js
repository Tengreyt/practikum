document.addEventListener('DOMContentLoaded', function() {
    const phrases = [
      "почитать книгу",
      "посмотреть фильм",
      "погулять на улице",
      "сделать зарядку",
      "приготовить что-нибудь вкусное",
      "поиграть в видеоигры",
      "написать дневниковую запись",
      "пообщаться с друзьями",
      "выучить что-то новое",
      "сделать уборку"
    ];
  
    const button = document.querySelector('.button');
    const phraseElement = document.querySelector('.phrase');
  
    button.addEventListener('click', function() {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      const randomPhrase = phrases[randomIndex];
      
      // Плавное исчезновение текста
      phraseElement.classList.remove('fade-in');
      phraseElement.classList.add('fade-out');
  
      // Обновляем текст после завершения анимации исчезновения
      setTimeout(() => {
        phraseElement.textContent = randomPhrase;
        phraseElement.classList.remove('fade-out');
        phraseElement.classList.add('fade-in');
      }, 500); // Время должно совпадать с transition в CSS
    });
  });
  