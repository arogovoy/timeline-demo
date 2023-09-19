export const productionSiteData = [
  {
    text: "Гільотина",
    id: 1
  },
  {
    text: "Дільниця лазерного різання",
    id: 2
  },
  {
    text: "Згинальний",
    id: 3
  },
  {
    text: "Зварювальний",
    id: 4
  },
  {
    text: "Складання рами лебідки",
    id: 5
  },
  {
    text: "Зона 1",
    id: 6
  },
  {
    text: "Зона 2",
    id: 7
  },
  {
    text: "Зона 3",
    id: 8
  },
  {
    text: "Зона 4",
    id: 9
  },
  {
    text: "Зона 5",
    id: 10
  },
  {
    text: "Зона 6",
    id: 11
  },
  {
    text: "Зона 7",
    id: 12
  },
  {
    text: "Зона 8",
    id: 13
  },
  {
    text: "Зона 9",
    id: 14
  },
  {
    text: "Зона 10",
    id: 15
  },
  {
    text: "Зона 11",
    id: 16
  },
  {
    text: "Зона 12",
    id: 17
  },
  {
    text: "Зона 13",
    id: 18
  },
  {
    text: "Зона 14",
    id: 19
  },
  {
    text: "Зона 15",
    id: 20
  },
  {
    text: "Зона 16",
    id: 21
  }
];

export const productionSiteData2 = [
  {
    text: "Гільотина",
    id: 1
  },
  {
    text: "Дільниця лазерного різання",
    id: 2
  },
  {
    text: "Згинальний",
    id: 3
  },
  {
    text: "Зварювальний",
    id: 4
  },
  {
    text: "Складання рами лебідки",
    id: 5
  }
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDate() {
  const year = 2021; // Рік можна змінити на потрібний
  // const month = getRandomInt(1, 12);
  const month = 2;
  // const day = getRandomInt(1, 28); // Припускаємо, що максимум 28 днів у місяці
  const day = 2;
  const hours = getRandomInt(8, 19);
  const minutes = getRandomInt(0, 59);

  return new Date(year, month - 1, day, hours, minutes);
}

const generateData = (count) => {
  const data = [];

  for (let i = 0; i < count; i++) {
    const text = `Деталь ${i + 1}`;
    const startDate = generateRandomDate();
    const endDate = new Date(startDate.getTime() + 45 * 60000); // 45 хвилин в мілісекундах
    // const productionSite = getRandomInt(1, 5);
    const productionSite = getRandomInt(1, 21);

    const detail = {
      text,
      startDate,
      endDate,
      productionSite
    };

    data.push(detail);
  }
  return data;
};

export const data = generateData(130);

export const dinnerTime = { from: 12, to: 13 };

export const holidays = [new Date(2021, 3, 29), new Date(2021, 5, 6)];
