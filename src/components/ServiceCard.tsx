import { Clock, Plus } from 'lucide-react';
import { Service } from '../types/service';
import { OptimizedImage } from './OptimizedImage';

interface ServiceCardProps {
  service: Service;
  onAddToCart: (service: Service) => void;
}

export function ServiceCard({ service, onAddToCart }: ServiceCardProps) {
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

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="absolute -inset-1 bg-gradient-to-br from-[#a5855a]/20 via-transparent to-[#a5855a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-lg"></div>

      <div className="relative">
        <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
          <OptimizedImage
            src={service.image_url}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            priority={false}
          />

          <div className="absolute top-3 right-3 bg-[#a5855a] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
            {formatPrice(service.price)}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#a5855a] transition-colors">
            {service.name}
          </h3>

          <p className="text-sm text-gray-600 mb-4 line-clamp-4">
            {service.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{formatDuration(service.duration_minutes)}</span>
            </div>

            <button
              onClick={() => onAddToCart(service)}
              className="group/btn bg-[#a5855a] hover:bg-[#8d6f48] text-white font-medium px-4 py-2 rounded-lg text-sm transition-all inline-flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform duration-300" />
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
