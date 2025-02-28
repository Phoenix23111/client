import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AddToCartModal = ({ isOpen, onClose, item }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed hover:cursor-pointer inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="flex flex-col  justify-center items-center gap-5 bg-white p-6 rounded-2xl shadow-lg max-w-md  w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="w-16 h-16 flex items-center justify-center bg-main rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="white"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
        <h2 className="text-lg font-semibold">Added to Cart</h2>
        <p className="text-gray-600">Added To Cart Successfully.</p>

        <div className="mt-4 flex justify-between space-x-8">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => {
              navigate("/products/cart");
            }}
            className="px-4 py-2 bg-main text-white rounded-lg hover:bg-blue-700"
          >
            View Cart
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AddToCartModal;
