import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['ru'] = {
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ],
  monthNamesShort: [
    'Янв.',
    'Февр.',
    'Март',
    'Апр.',
    'Май',
    'Июнь',
    'Июль',
    'Авг.',
    'Сент.',
    'Окт.',
    'Нояб.',
    'Дек.'
  ],
  dayNames: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  today: 'Сегодня'
};

LocaleConfig.defaultLocale = "ru";

export const textButton = {
  letsGo: "Поехали?",
  next: "Далее",
  back: "Назад",
}

export const courseName = {
  fist: "ФИСТ",
  fisp: "ФИСП"
}

export const groupFistName = {
  mid: "МИД",
  kmd: "КМД",
  is: "ИС",
  asu: "АСУ",
  ias: "ИАС"
}

export const groupFispName = {
  pi: "ПИ",
  ki: "КИ",
  pmki: "ПМКИ",
}

export const onboardingText = {
  startTextOne: 'Привет, первокурсник! 👋',
  startTextTwo: '  Мы поможем тебе адаптироваться в университете: разберемся с расписанием, найдем друзей и подскажем, как пережить сессию без стресса!',
  startTextButton: textButton.letsGo,
  courseTextOne: '  Выбери свой факультет — так мы подберем для тебя актуальную информацию!',
  groupTextOne: '  Теперь укажи свою группу. Это нужно, чтобы показывать твое расписание!',
  finishTextOne: 'Готово! 🎉 Теперь ты получишь:',
  finishTextTwo: '✔ Персональное расписание \n✔ Доступ к чату группы \n✔ Советы по адаптации',
}

export const mainText = {
  myUniver: 'Мой универ',
  proStudy: 'PRO учебу',
  beYourself: 'Будь своим',
  antistress: 'Антистресс',
}

export const menuText = {
  schedule: 'Моё расписание',
  contacts: 'Полезные контакты',
  buildingAddresses: 'Адреса корпусов',
  planning: 'Планирование',
  neural: 'Нейросети',
  whereToGo: 'Куда идём?',
  letsBeFriends: 'Давай дружить!',
}

