# Віджет відгуків для кав'ярні Sip Happens Café

Завдання: створити застосунок для збору відгуків про кав'ярню **Sip Happens Café**. Цей застосунок повинен відображати кількість зібраних відгуків для кожної категорії: **good**, **neutral**, **bad**, а також зберігати статистику відгуків між оновленням сторінки.

### Компоненти:

1. **App**
   - Відповідає за зберігання стану відгуків.
   - Передає пропси компонентам **Feedback** та **Options**.

2. **Feedback**
   - Відображає статистику зібраних відгуків (після того, як є хоча б один відгук).

3. **Options**
   - Відображає кнопки для вибору відгуку (Good, Neutral, Bad).
   - Має кнопку для скидання відгуків.

4. **Notification**
   - Відображає повідомлення про відсутність відгуків.

## Крок 1

Створи стан для зберігання типів відгуків в компоненті **App**:

```js
const [feedback, setFeedback] = useState({
  good: 0,
  neutral: 0,
  bad: 0
});
```

Оголоси компоненти Feedback та Options і використовуй їх в App для відображення опцій та фідбека. Для цього передай необхідні значення їм через пропси.

Після цього кроку інтерфейс застосунку буде виглядати наступним чином. Зверни увагу, що в компонентів не вистачає деяких елементів, ти додаси їх наступних кроках.

## Крок 2

Додай обробник стану, щоб при кліках по кнопках в компоненті Options змінювався стан компонента App.

Оголоси функцію updateFeedback(feedbackType), яка приймає один параметр - тип фідбеку, тобто ім'я властивості зі стану, рядки “good”, “bad” або “neutral”.


```jsx
const updateFeedback = feedbackType => {
 // Тут використовуй сеттер, щоб оновити стан
}
```

Передай функцію updateFeedback як пропс в компонент Options і викликай її при кліках по кнопках, передаючи тип фідбеку (рядки “good”, “bad” або “neutral”) як аргумент.

Після цього кроку при кліках по кнопках в компоненті Options буде оновлюватися інтерфейс.

## Крок 3

Зроби так, щоб компонент Feedback рендерився тільки після того, як було зібрано хоча б один відгук. Загальна кількість відгуків - це просто сума станів:

```js
const totalFeedback = good + neutral + bad;
```

Оскільки стан зберігається в компоненті App, то і обчислення totalFeedback буде правильно виконувати в цьому компоненті, і передавати вже обчислене значення пропсами іншим компонентам, а також використовувати в App для умовного рендерингу.

Повідомлення про відсутність статистики перенеси в компонент Notification і відобрази його в App. Для цього використовуй умовний рендеринг в компоненті App.

## Крок 4

Додай кнопку Reset для скидання зібраних відгуків у компонент Options. При кліку на неї стан, що відповідає за відгуки, повинен обнулитися. Кнопка Reset видима тільки в разі наявності хоча б одного відгуку, так само, як і компонент Feedback.

Для умовного рендерингу використовуй попередньо обчислене значення totalFeedback з компонента App і передавай його як пропс в Options.

## Крок 5

Розшир функціонал застосунку таким чином, щоб в інтерфейсі відображалося більше статистики про зібрані відгуки. Додай відображення загальної кількості зібраних відгуків з усіх категорій та відсоток позитивних відгуків. Це всі обчислювані значення, які не потрібно зберігати в стані. Передай ці значення через пропси в відповідні компоненти.

Загальна кількість відгуків - це просто сума станів:

```js
totalFeedback = good + neutral + bad
```

Для підрахунку відсотка позитивних відгуків можна використовувати наступну формулу:

```js
Math.round((good / totalFeedback) * 100)
```

Зверни увагу, що для значень totalFeedback і positiveFeedback не потрібно створювати окремі властивості в стані, оскільки це дані, що легко обчислюються на основі існуючого стану. Це не тільки оптимізує використання пам'яті та ресурсів, але й зменшує ризик виникнення помилок, пов'язаних із не синхронізованим станом даних.
