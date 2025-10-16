import { Calendar, Car, LayoutDashboard, LocationEditIcon } from 'lucide-react';

export const FEATURES = [
  {
    title: 'Управление автопарком',
    image: 'https://images.unsplash.com/photo-1514836876796-56c8ba8b2e3c',
    icon: <Car />,
    description:
      'Полный контроль над вашим автопарком в режиме реального времени. Отслеживайте состояние каждого автомобиля, планируйте ТО и оптимизируйте использование.',
  },
  {
    title: 'Автоматизация бронирования',
    image: 'https://images.unsplash.com/photo-1759489239510-d0401888d9b0',
    icon: <Calendar />,
    description:
      'Умная система бронирования с моментальным подтверждением. Исключите двойные бронирования и автоматизируйте весь процесс от заявки до возврата.',
  },
  {
    title: 'GPS в реальном времени',
    image: 'https://images.unsplash.com/photo-1562993610-121a6b465200',
    icon: <LocationEditIcon />,
    description:
      'Отслеживайте местоположение всех автомобилей вашего парка в режиме онлайн. Контроль маршрутов, геозоны и история передвижений.',
  },
  {
    title: 'Аналитика и отчёты',
    icon: <LayoutDashboard />,
    image: 'https://images.unsplash.com/photo-1707902665498-a202981fb5ac',
    description:
      'Комплексная аналитика бизнеса с наглядными графиками и отчётами. Принимайте решения на основе данных и увеличивайте прибыль.',
  },
];
