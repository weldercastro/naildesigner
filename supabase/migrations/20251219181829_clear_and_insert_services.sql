/*
  # Clear existing services and insert only the specified ones
  
  1. Delete all existing services
  2. Insert only the 6 services provided by the user
*/

DELETE FROM services;

INSERT INTO services (name, description, duration_minutes, price, image_url, display_order, is_active)
VALUES
  (
    'Cutilagem e esmaltação tradicional Pés',
    'Imersão feita em bacia de hidromassagem com sais relaxantes, cutilagem feita com alicate e finalização em esmaltes tradicionais. Não seca em cabine. 👣🔺',
    60,
    50.00,
    'https://barbertime.online/wp-content/uploads/2025/12/Captura-de-tela-2025-12-19-095703.png',
    1,
    true
  ),
  (
    'Alongamento em fibra de vidro',
    'AAlongamento de unhas feito em fibra de vidro, com todos os materiais e equipamentos registrados e selados pela Anvisa e Inmetro.  Acabamento natural, ponto de tensão baixo, estrutura resistente. Trazendo praticidade e elegância às mãos femininas💅🔺',
    120,
    0,
    'https://barbertime.online/wp-content/uploads/2025/12/Captura-de-tela-2025-12-19-095724.png',
    2,
    true
  ),
  (
    'Cutilagem e esmaltação tradicional MÃOS',
    'Cutilagem feita por imersão, com alicate e acabamento feito com esmaltes tradicionais, sem secagem na cabine.',
    45,
    35.00,
    'https://barbertime.online/wp-content/uploads/2025/12/Captura-de-tela-2025-12-19-095724.png',
    3,
    true
  ),
  (
    'SPA / Renovação dos pés',
    'Feito de forma indolor, com a tecnologia de um emoliente, o spa renova toda a parte plantar dos pés, removendo tecido morto e ressecado, rachaduras de grau 1, 2 e 3, proporcionando limpeza profunda e hidratação intensa aos pés, esfoliação e massagem fazem parte desse tratamento. É feito em sessões que variam de acordo com a necessidade. Seus benefícios são gradativos , trazendo assim a cada sessão um pé mais limpo, renovado e macio. 👣🔺',
    90,
    80.00,
    'https://barbertime.online/wp-content/uploads/2025/12/Captura-de-tela-2025-12-19-095844.png',
    4,
    true
  ),
  (
    'Esmaltação em gel',
    'Cutilagem feita a seco com brocas e alicate. Finalizando com uma esmaltação em gel, secagem em cabine UV, durando até 25 dias sem perder o brilho. Essa esmaltação proporciona unhas lindas e intactas, trazendo o conforto de não precisar refazer semanalmente. 💅🔺',
    60,
    120.00,
    'https://barbertime.online/wp-content/uploads/2025/12/Captura-de-tela-2025-12-19-095932.png',
    5,
    true
  ),
  (
    'Blindagem de diamante',
    'Feita com uma base  em gel, a blindagem consiste em prolongar a durabilidade da esmaltação e trazer mais resistência às unhas naturais, não sendo necessário alongar. Uma forma prática e eficaz de ter unhas bem feitas e duradouras. 💎💅',
    75,
    120.00,
    'https://barbertime.online/wp-content/uploads/2025/12/Captura-de-tela-2025-12-19-100007.png',
    6,
    true
  );
