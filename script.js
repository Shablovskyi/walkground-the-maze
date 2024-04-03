function exploreMaze(mazeSize) {
  let currentPosition = 1;
  console.log(`Початок лабіринту: ${currentPosition}`);
  while (currentPosition < mazeSize) {
    if ((currentPosition + 1) % 3 === 0) {
      console.log(
        `На позиції ${currentPosition + 1} є перешкода X. Ідемо в обхід..`
      );
      currentPosition += 2;
    } else {
      currentPosition++;
    }

    console.log(`Рух вперед: позиція ${currentPosition}`);
  }

  console.log(`Кінець лабіринту: позиція ${currentPosition}`);

  do {
    if (currentPosition % 3 === 0) {
      console.log(
        `На позиції ${currentPosition - 1} є перешкода X. Ідемо в обхід..`
      );
      currentPosition -= 2;
    } else {
      currentPosition--;
    }
    console.log(`Рух назад: позиція ${currentPosition}`);
  } while (currentPosition > 1);

  console.log(`Повернення до початку лабіринту: позиція ${currentPosition}`);
}

exploreMaze(25);
