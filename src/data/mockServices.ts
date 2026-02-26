import { Service } from '../types/service';

export const mockServices: Service[] = [
  {
    id: '5',
    name: 'Esmaltação em gel',
    description: 'Cutilagem feita a seco com brocas e alicate. Finalizando com uma esmaltação em gel, secagem em cabine UV, durando até 25 dias sem perder o brilho. Essa esmaltação proporciona unhas lindas e intactas, trazendo o conforto de não precisar refazer semanalmente. 💅🔺',
    duration_minutes: 90,
    price: 120.00,
    image_url: 'https://barbertime.online/wp-content/uploads/2025/12/Captura-de-tela-2025-12-19-175928.png',
    display_order: 1,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Alongamento em fibra de vidro',
    description: 'AAlongamento de unhas feito em fibra de vidro, com todos os materiais e equipamentos registrados e selados pela Anvisa e Inmetro.  Acabamento natural, ponto de tensão baixo, estrutura resistente. Trazendo praticidade e elegância às mãos femininas💅🔺',
    duration_minutes: 150,
    price: 0,
    image_url: 'https://barbertime.online/wp-content/uploads/2025/12/Captura-de-tela-2025-12-19-175853.png',
    display_order: 2,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'SPA / Renovação dos pés',
    description: 'Feito de forma indolor, com a tecnologia de um emoliente, o spa renova toda a parte plantar dos pés, removendo tecido morto e ressecado, rachaduras de grau 1, 2 e 3, proporcionando limpeza profunda e hidratação intensa aos pés, esfoliação e massagem fazem parte desse tratamento. É feito em sessões que variam de acordo com a necessidade. Seus benefícios são gradativos , trazendo assim a cada sessão um pé mais limpo, renovado e macio. 👣🔺',
    duration_minutes: 60,
    price: 80.00,
    image_url: 'https://barbertime.online/wp-content/uploads/2025/12/Captura-de-tela-2025-12-19-095844-1.png',
    display_order: 3,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: '1',
    name: 'Cutilagem e esmaltação tradicional Pés',
    description: 'Imersão feita em bacia de hidromassagem com sais relaxantes, cutilagem feita com alicate e finalização em esmaltes tradicionais. Não seca em cabine. 👣🔺',
    duration_minutes: 60,
    price: 50.00,
    image_url: 'https://barbertime.online/wp-content/uploads/2025/12/Captura-de-tela-2025-12-19-175843.png',
    display_order: 4,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Cutilagem e esmaltação tradicional MÃOS',
    description: 'Cutilagem feita por imersão, com alicate e acabamento feito com esmaltes tradicionais, sem secagem na cabine.',
    duration_minutes: 60,
    price: 40.00,
    image_url: 'https://barbertime.online/wp-content/uploads/2025/12/Captura-de-tela-2025-12-19-175907.png',
    display_order: 5,
    is_active: true,
    created_at: new Date().toISOString()
  }
]; 
