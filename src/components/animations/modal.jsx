import { motion, AnimatePresence } from "framer-motion";

const MessageModal = ({ text, date, isOpen, setIsOpen }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "360deg" }}
              animate={{ scale: 1, rotate: "0deg", transitionDuration: '0.6s' }}
              exit={{ scale: 0, rotate: "0deg" }}
              whileHover={{scale: 1.05, transitionDuration: '0.6s'}}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-soft to-accent_pade text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <div className="relative flex flex-col gap-6 z-10">
                <p className="text-center"> {text}
                </p>
                <p className="text-center">On {date}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Go back
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  export default MessageModal