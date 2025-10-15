type Feedback = {
  readonly rating: number;
  readonly content: string;
  readonly author: {
    name: string;
    position: string;
    image: string | null;
  };
};

export const FEEDBACKS: Array<Feedback> = [
  {
    rating: 5,
    content:
      'Fleetstorm полностью изменил наш подход к управлению автопарком. Автоматизация процессов позволила сократить расходы на 35% и увеличить выручку на 50%.',
    author: {
      name: 'Андрей Соколов',
      position: 'Директор, RentCar Plus',
      image: null,
    },
  },
  {
    rating: 5,
    content:
      'Интуитивный интерфейс и мощная аналитика. Наши менеджеры освоили систему за один день. Особенно нравится модуль GPS-отслеживания.',
    author: {
      name: 'Мария Петрова',
      position: 'Владелец, DriveTime',
      image: null,
    },
  },
  {
    rating: 5,
    content:
      'Лучшее решение на рынке для управления автопрокатом. Поддержка отвечает моментально, все запросы реализуются быстро. Рекомендую всем коллегам!',
    author: {
      name: 'Дмитрий Кузнецов',
      position: 'EO, AutoRent Pro',
      image: null,
    },
  },
];
