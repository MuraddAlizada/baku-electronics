import { useRouter } from "next/router";
import { FiCheckCircle } from "react-icons/fi";

interface OrderSuccessModalProps {
  show: boolean;
  onClose: () => void;
  orderNumber?: string;
}

export default function OrderSuccessModal({ show, onClose, orderNumber }: OrderSuccessModalProps) {
  const router = useRouter();

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl p-8 max-w-md w-full shadow-xl">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <FiCheckCircle className="text-6xl text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-brandGrayText mb-2">
            Sifariş verildi!
          </h2>
          {orderNumber && (
            <p className="text-brandGrayText opacity-70 mb-4">
              Sifariş nömrəsi: <span className="font-semibold">{orderNumber}</span>
            </p>
          )}
          <p className="text-brandGrayText opacity-70 mb-6">
            Sifarişiniz tezliklə emal olunacaq və sizə bildiriş göndəriləcək.
          </p>
          <button
            onClick={() => {
              onClose();
              router.push("/");
            }}
            className="w-full bg-brandBtn text-white py-3 rounded-xl font-semibold hover:brightness-110 transition"
          >
            Ana səhifəyə qayıt
          </button>
        </div>
      </div>
    </div>
  );
}

