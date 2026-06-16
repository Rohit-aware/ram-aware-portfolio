import { memo } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = memo(() => (
  <footer className="bg-surface-0 border-t border-surface-200">
    <div className="wrap py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-btn">
            <span className="text-white font-bold text-xs">RA</span>
          </div>
          <div>
            <p className="font-bold text-ink-900 text-sm">Ram Aware</p>
            <p className="text-ink-500 text-xs flex items-center gap-1 mt-0.5">
              <MapPin size={10} /> Pune, India
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {[
            { href: 'mailto:awareram@gmail.com', icon: Mail, label: 'Email' },
            { href: 'https://www.linkedin.com/in/ram-aware-423b25112', icon: Linkedin, label: 'LinkedIn' },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="tap flex items-center justify-center w-9 h-9 rounded-lg border border-surface-200 text-ink-500 hover:text-brand-500 hover:border-brand-500 hover:bg-brand-50 transition-all duration-150"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={15} />
            </motion.a>
          ))}
        </div>

        <p className="text-ink-300 text-xs">© {new Date().getFullYear()} Ram Aware</p>
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
