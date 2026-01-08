import { ShoppingCart, Clock, MessageCircle } from 'lucide-react';
import { CartItem as CartItemType } from '../types/service';
import { CartItem } from './CartItem';

interface CartProps {
  items: CartItemType[];
  onUpdateQuantity: (serviceId: string, quantity: number) => void;
  onRemoveItem: (serviceId: string) => void;
  onCheckout: () => void;
}

export function Cart({ items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const formatPrice = (price: number) => {
    if (price === 0) {
      return 'Sob Orçamento';
    }
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
  };

  const totalPrice = items.reduce((sum, item) => sum + (item.service.price * item.quantity), 0);
  const totalDuration = items.reduce((sum, item) => sum + (item.service.duration_minutes * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const hasBudgetItems = items.some((item) => item.service.price === 0);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <ShoppingCart className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Seu carrinho está vazio
        </h3>
        <p className="text-sm text-gray-500">
          Adicione serviços para começar a montar seu agendamento
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full max-h-full">
      <div className="flex-1 overflow-y-auto space-y-3 mb-4 min-h-0">
        {items.map((item) => (
          <CartItem
            key={item.service.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemoveItem}
          />
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4 space-y-3 flex-shrink-0">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Serviços ({totalItems})</span>
            <span className="font-semibold text-gray-900">{formatPrice(totalPrice)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Duração total</span>
            </div>
            <span className="font-semibold text-gray-900">{formatDuration(totalDuration)}</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#a5855a]/10 to-[#a5855a]/5 rounded-lg p-4 border border-[#a5855a]/20">
          <div className="flex items-center justify-between mb-1">
            <span className="text-base font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-[#a5855a]">
              {hasBudgetItems && totalPrice === 0 ? 'A Consultar' :
               hasBudgetItems ? `${formatPrice(totalPrice)}*` :
               formatPrice(totalPrice)}
            </span>
          </div>
          <p className="text-xs text-gray-600">
            Tempo estimado: {formatDuration(totalDuration)}
          </p>
          {hasBudgetItems && (
            <p className="text-xs text-[#a5855a] mt-2 font-medium">
              * Inclui serviços sob orçamento
            </p>
          )}
        </div>

        <button
          onClick={onCheckout}
          className="group w-full bg-[#a5855a] hover:bg-[#8d6f48] text-white font-semibold px-6 py-4 rounded-lg text-sm transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl uppercase tracking-wide"
        >
          <MessageCircle className="w-5 h-5" />
          Finalizar Agendamento
          <span className="bg-white/20 rounded p-1 group-hover:translate-x-1 transition-transform">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
