import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          © 2026 Kethavath Shilpa. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;