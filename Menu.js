const menu = {
    'Option 1': () => {
      console.log('1. Calcular el área de un triángulo.');
    },
    'Option 2': () => {
      console.log('2.Ingresar dos números por teclado y sumarlos.');
    },
    'Option 3': () => {
      console.log('3. Ingresar un número y visualizar el número elevado al cuadrado.');
    },
    'Quit': () => {
      console.log('Goodbye!');
      process.exit(0);
    }
  };

  const prompt = () => {
    console.log('\nSelect an option:');
    for (const [key, value] of Object.entries(menu)) {
      console.log(`${key}: ${value.name}`);
    }
    console.log('Quit: q');
  };
  
  const select = (option) => {
    if (menu[option]) {
      menu[option]();
    } else if (option === 'q' || option === 'Quit') {
      console.log('Goodbye!');
      process.exit(0);
    } else {
      console.log('Invalid option, please try again.');
    }
    prompt();
  };
  
  prompt();
  
  process.stdin.on('data', (input) => {
    const option = input.toString().trim().toLowerCase();
    select(option);
  });