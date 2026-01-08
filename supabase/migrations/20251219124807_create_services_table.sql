/*
  # Criar tabela de serviços

  1. Nova Tabela
    - `services` - Armazena todos os serviços oferecidos pela profissional
      - `id` (uuid, chave primária) - Identificador único do serviço
      - `name` (text) - Nome do serviço
      - `description` (text) - Descrição detalhada do serviço
      - `duration_minutes` (integer) - Duração média em minutos
      - `price` (numeric) - Preço do serviço
      - `image_url` (text) - URL da imagem de exemplo do serviço
      - `display_order` (integer) - Ordem de exibição no modal
      - `is_active` (boolean) - Se o serviço está disponível para agendamento
      - `created_at` (timestamptz) - Data de criação do registro

  2. Segurança
    - Habilitar RLS na tabela `services`
    - Adicionar política para permitir leitura pública dos serviços ativos
    - Somente serviços com `is_active = true` serão visíveis

  3. Notas Importantes
    - Os preços são armazenados como numeric para precisão decimal
    - A duração é armazenada em minutos para facilitar cálculos
    - A tabela é preparada para expansão futura com campos adicionais
*/

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  duration_minutes integer NOT NULL DEFAULT 60,
  price numeric(10, 2) NOT NULL DEFAULT 0,
  image_url text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir leitura pública de serviços ativos"
  ON services
  FOR SELECT
  USING (is_active = true);

CREATE INDEX IF NOT EXISTS idx_services_display_order ON services(display_order);
CREATE INDEX IF NOT EXISTS idx_services_is_active ON services(is_active);