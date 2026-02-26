import { X, Sparkles, ShoppingCart, ChevronUp, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Service, CartItem as CartItemType } from '../types/service';
import { mockServices } from '../data/mockServices';
import { ServiceCard } from './ServiceCard';
import { Cart } from './Cart';
import { Toast } from './Toast';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCartMobile, setShowCartMobile] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadServices();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const loadServices = async () => {
    try {
      setIsLoading(true);
      setError(null);

      await new Promise((resolve) => setTimeout(resolve, 300));

      const activeServices = mockServices.filter((service) => service.is_active);
      setServices(activeServices);
    } catch (err) {
      console.error('Erro ao carregar serviços:', err);
      setError('Não foi possível carregar os serviços. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = (service: Service) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.service.id === service.id);

      if (existingItem) {
        setToastMessage(`${service.name} adicionado novamente ao carrinho!`);
        return prev.map((item) =>
          item.service.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      setToastMessage(`${service.name} adicionado ao carrinho!`);
      return [...prev, { service, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (serviceId: string, quantity: number) => {
    if (quantity < 1) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.service.id === serviceId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (serviceId: string) => {
    setCartItems((prev) => prev.filter((item) => item.service.id !== serviceId));
  };

  const handleCheckout = () => {
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.service.price * item.quantity), 0);
    const totalDuration = cartItems.reduce((sum, item) => sum + (item.service.duration_minutes * item.quantity), 0);
    const hasBudgetItems = cartItems.some((item) => item.service.price === 0);

    const servicesList = cartItems
      .map((item) => {
        if (item.service.price === 0) {
          return `${item.quantity}x ${item.service.name} (Sob Orçamento)`;
        }
        return `${item.quantity}x ${item.service.name}`;
      })
      .join('\n');

    const formatPrice = (price: number) => {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price);
    };

    const formatDuration = (minutes: number) => {
      if (minutes < 60) {
        return `${minutes} minutos`;
      }
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
    };

    let totalText = '';
    if (hasBudgetItems && totalPrice === 0) {
      totalText = 'A Consultar';
    } else if (hasBudgetItems) {
      totalText = `${formatPrice(totalPrice)} + Serviços sob orçamento`;
    } else {
      totalText = formatPrice(totalPrice);
    }

    const message = `Olá! Gostaria de agendar os seguintes serviços:\n\n${servicesList}\n\n*Total:* ${totalText}\n*Duração estimada:* ${formatDuration(totalDuration)}`;

    const whatsappNumber = '5589998879155';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleDirectContact = () => {
    const message = `Olá! Gostaria de entrar em contato para conhecer melhor os serviços e tirar minhas dúvidas.`;
    const whatsappNumber = '5589998879155';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.service.price * item.quantity), 0);

  const formatPrice = (price: number) => {
    if (price === 0) {
      return 'A Consultar';
    }
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center animate-fade-in">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        <div className="relative w-full h-full md:h-auto md:max-w-6xl md:max-h-[90vh] bg-white md:rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#a5855a]/30 via-transparent to-[#a5855a]/20 opacity-50 blur-2xl"></div>

          <div className="relative bg-white md:rounded-2xl flex flex-col h-full md:h-auto md:max-h-[90vh]">
            <div className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4 flex-shrink-0">
              <div className="flex items-center justify-between mb-3 md:mb-0">
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#a5855a] to-[#8d6f48] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-base md:text-xl font-bold text-gray-900">
                      Monte Seu Agendamento
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 hidden sm:block">
                      Escolha os serviços e crie sua experiência personalizada
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                </button>
              </div>
              <button
                onClick={handleDirectContact}
                className="w-full md:w-auto px-4 py-2 bg-[#a5855a] hover:bg-[#8d6f48] text-white font-medium rounded-lg transition-colors text-sm md:text-base"
              >
                Entrar em Contato
              </button>
            </div>

            <div className="flex-1 overflow-y-auto min-h-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6 pb-32 lg:pb-6">
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                      Nossos Serviços
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      Selecione os serviços que deseja realizar
                    </p>
                  </div>

                  {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="bg-gray-100 rounded-xl h-72 md:h-80 animate-pulse"
                        ></div>
                      ))}
                    </div>
                  ) : error ? (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 md:p-6 text-center">
                      <p className="text-sm md:text-base text-red-600 mb-3 md:mb-4">{error}</p>
                      <button
                        onClick={loadServices}
                        className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm md:text-base"
                      >
                        Tentar Novamente
                      </button>
                    </div>
                  ) : services.length === 0 ? (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 text-center">
                      <p className="text-sm md:text-base text-gray-600">
                        Nenhum serviço disponível no momento.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {services.map((service) => (
                        <ServiceCard
                          key={service.id}
                          service={service}
                          onAddToCart={handleAddToCart}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="hidden lg:block lg:col-span-1">
                  <div className="sticky top-4 max-h-[calc(90vh-120px)] overflow-y-auto">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-[#a5855a] flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {totalItems}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Meu Carrinho
                        </h3>
                      </div>

                      <Cart
                        items={cartItems}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemoveItem={handleRemoveItem}
                        onCheckout={handleCheckout}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 shadow-2xl max-h-screen flex flex-col">
              <button
                onClick={() => setShowCartMobile(!showCartMobile)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors flex-shrink-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#a5855a] flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-gray-900">
                      {totalItems === 0 ? 'Carrinho vazio' : `${totalItems} ${totalItems === 1 ? 'serviço' : 'serviços'}`}
                    </div>
                    {totalItems > 0 && (
                      <div className="text-xs text-[#a5855a] font-bold">
                        {formatPrice(totalPrice)}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {totalItems > 0 && (
                    <div className="w-6 h-6 rounded-full bg-[#a5855a] flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{totalItems}</span>
                    </div>
                  )}
                  {showCartMobile ? (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>

              {showCartMobile && (
                <div className="border-t border-gray-200 bg-white overflow-y-auto flex-1 min-h-0">
                  <div className="p-4">
                    <Cart
                      items={cartItems}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemoveItem={handleRemoveItem}
                      onCheckout={handleCheckout}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </>
  );
}
