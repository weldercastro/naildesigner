import { Minus, Plus, Trash2, Clock } from 'lucide-react';
import { CartItem as CartItemType } from '../types/service';
import { OptimizedImage } from './OptimizedImage';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (serviceId: string, quantity: number) => void;
  onRemove: (serviceId: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
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

  const totalPrice = item.service.price * item.quantity;
  const totalDuration = item.service.duration_minutes * item.quantity;

  return (
    <div className="group relative bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
          <OptimizedImage
            src={item.service.image_url}
            alt={item.service.name}
            className="w-full h-full object-cover"
            priority={false}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-semibold text-gray-900 text-sm leading-tight">
              {item.service.name}
            </h4>
            <button
              onClick={() => onRemove(item.service.id)}
              className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
              title="Remover"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{formatDuration(item.service.duration_minutes)}</span>
            </div>
            <span className="font-semibold text-[#a5855a]">
              {formatPrice(item.service.price)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
              <button
                onClick={() => onUpdateQuantity(item.service.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="w-7 h-7 flex items-center justify-center rounded bg-white hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                <Minus className="w-3 h-3 text-gray-700" />
              </button>
              <span className="text-sm font-semibold text-gray-900 w-6 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => onUpdateQuantity(item.service.id, item.quantity + 1)}
                className="w-7 h-7 flex items-center justify-center rounded bg-white hover:bg-gray-100 transition-colors shadow-sm"
              >
                <Plus className="w-3 h-3 text-gray-700" />
              </button>
            </div>

            <div className="text-right">
              <div className="text-xs text-gray-500">Total</div>
              <div className="font-bold text-[#a5855a]">
                {formatPrice(totalPrice)}
              </div>
              {item.quantity > 1 && (
                <div className="text-xs text-gray-500">
                  {formatDuration(totalDuration)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
