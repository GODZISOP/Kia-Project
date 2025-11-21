import { useEffect, useRef } from "react";

interface PayPalButtonProps {
  id?: string;
  amount: string;
  onSuccess?: (details: any) => void;
}

export default function PayPalButton({ id, amount, onSuccess }: PayPalButtonProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRendered = useRef(false);

  useEffect(() => {
    // Reset flag when component mounts with new id
    buttonRendered.current = false;

    if (!containerRef.current) return;

    const loadPaypal = async () => {
      if (!(window as any).paypal) {
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=sb&currency=USD";
        script.async = true;
        document.body.appendChild(script);
        await new Promise<void>((resolve) => (script.onload = () => resolve()));
      }

      const paypal = (window as any).paypal;
      if (!paypal || buttonRendered.current) return;

      // Clear the container before rendering
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }

      paypal.Buttons({
        createOrder: (_data: any, actions: any) =>
          actions.order.create({ purchase_units: [{ amount: { value: amount } }] }),
        onApprove: (_data: any, actions: any) =>
          actions.order.capture().then((details: any) => onSuccess && onSuccess(details)),
        onError: (err: any) => {
          console.error(err);
          alert("Payment failed! Check console.");
        },
      }).render(containerRef.current);

      buttonRendered.current = true;
    };

    loadPaypal();

    // Cleanup on unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      buttonRendered.current = false;
    };
  }, [amount, onSuccess, id]);

  return <div id={id} ref={containerRef}></div>;
}