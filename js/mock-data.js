/**
 * Возвращает моковые данные.
 * NAMES — имена.
 * PHOTO_DESCRIPTIONS — описания фотографий.
 * COMMENT_MESSAGES — сообщения комментариев.
 * @returns {Array} Объект массивов с моковыми данными.
 */
const getMockData = () => {
  const NAMES = [
    'Анна',
    'Михаил',
    'Екатерина',
    'Дмитрий',
    'Ольга',
    'Иван',
    'Светлана',
    'Алексей',
    'Наталья',
    'Кирилл',
    'Мария',
    'Сергей',
    'Татьяна',
    'Андрей',
    'Юлия',
    'Владимир',
    'Алина',
    'Павел',
    'Елена',
    'Николай'
  ];

  const PHOTO_DESCRIPTIONS = [
    'Уютное кафе на берегу с видом на закатное море и людьми, наслаждающимися напитками.',
    'Счастливая семья с двумя детьми в осеннем парке, окруженном разноцветной листвой.',
    'Горы под снежным покровом в ясный зимний день, с ледяной рекой внизу.',
    'Портрет улыбающегося щенка на зеленой траве, с забавными ушами.',
    'Узкая средневековая улочка с домами, украшенными цветами в горшках на окнах.',
    'Вечерний городской пейзаж с огнями, отражающимися в воде, и современными зданиями.',
    'Пара на лодке на спокойном озере среди высоких сосен и голубого неба.',
    'Детская площадка в парке с детьми, катающимися на качелях и горках.',
    'Десерт с красными ягодами и мятой на фоне деревянного стола.',
    'Маленькая старинная церковь на холме, окруженная густым туманом.',
    'Большая группа друзей, смеющихся и обедающих за длинным столом на открытой террасе.',
    'Пышный тропический лес с густыми деревьями и солнечными лучами, пробивающимися через листву.',
    'Торжественное здание университета в неоклассическом стиле с колоннами и статуями.',
    'Рыбак на берегу моря на фоне заката, готовящий свои сети.',
    'Песчаный пляж с белым песком и чистыми голубыми волнами.',
    'Пожилая пара держится за руки на фоне заснеженного зимнего пейзажа.',
    'Озеро в окружении гор, отражающих в воде яркие осенние деревья.',
    'Маленький городок с красными крышами домов, окруженный зелеными холмами.',
    'Закуски и напитки на столе на фоне летнего пикника.',
    'Современная кухня в минималистичном стиле с белыми шкафами и деревянным столом.',
    'Цветочная клумба с яркими тюльпанами на фоне солнечного весеннего дня.',
    'Группа людей на вечерней прогулке по набережной, украшенной огнями.',
    'Детские игрушки, разбросанные на ковре в комнате с яркими обоями.',
    'Старый деревянный пирс, ведущий к тихому озеру с гладкой поверхностью воды.',
    'Городская улица с прохожими в ярких пальто на фоне старых зданий.'
  ];

  const COMMENT_MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  return {
    NAMES,
    PHOTO_DESCRIPTIONS,
    COMMENT_MESSAGES
  };
};

export { getMockData };
