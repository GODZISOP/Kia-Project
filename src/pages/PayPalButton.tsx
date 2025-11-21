import { useEffect, useRef } from "react";

interface PayPalButtonProps {
  id: string;
  amount: string;
  onSuccess?: (details: any) => void;
}

export default function PayPalButton({ id, amount, onSuccess }: PayPalButtonProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRendered = useRef(false);

  useEffect(() => {
    if (buttonRendered.current) return; // render only once
    if (!containerRef.current) return;

    const loadPaypal = async () => {
      if (!(window as any).paypal) {
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=sb&currency=USD";
        script.async = true;
        document.body.appendChild(script);
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      const paypal = (window as any).paypal;
      if (!paypal) return;

      paypal.Buttons({
        createOrder: (_data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        },
        onApprove: (_data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            if (onSuccess) onSuccess(details);
          });
        },
        onError: (err: any) => {
          console.error(err);
          alert("Payment failed! Check console.");
        },
      }).render(containerRef.current);

      buttonRendered.current = true;
    };

    loadPaypal();
  }, [amount, onSuccess]);

  return <div ref={containerRef}></div>;
}
