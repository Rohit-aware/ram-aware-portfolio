import { memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Linkedin } from 'lucide-react';
import SectionWrapper from '@shared/components/SectionWrapper';
import SectionHeader from '@shared/components/SectionHeader';
import { CONTACT_ITEMS, SEEKING_ROLES, CONTACT_STATS } from './constants/contactData';

const Contact = memo(() => (
  <SectionWrapper id="contact" className="bg-surface-0">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
      <div>
        <SectionHeader
          label="Contact"
          title="Let's "
          highlight="Connect"
          description="Open to Senior Finance Operations, FinOps, AP SME, and Shared Services leadership roles."
        />

        <div className="space-y-2.5 mb-7">
          {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }, i) => (
            <motion.div
              key={label}
              className="card-glass flex items-center gap-4 p-4 hover:border-brand-500/30 transition-colors duration-150"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ x: 3 }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0 shadow-sm">
                <Icon size={16} className="text-white" />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-ink-500 text-[10px] font-bold uppercase tracking-wider">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-ink-900 font-semibold text-sm hover:text-brand-500 transition-colors flex items-center gap-1 truncate"
                  >
                    <span className="truncate">{value}</span>
                    {href.startsWith('http') && <ExternalLink size={11} className="flex-shrink-0" />}
                  </a>
                ) : (
                  <p className="text-ink-900 font-semibold text-sm">{value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="mailto:awareram@gmail.com"
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message <ArrowRight size={15} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ram-aware-423b25112"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <Linkedin size={15} /> LinkedIn Profile
          </motion.a>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        <motion.div
          className="card-glass p-6 text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-dot" />
            <span className="text-emerald-500 font-semibold text-sm">Available for New Opportunities</span>
          </div>
          <h3 className="font-bold text-ink-900 text-lg mb-2">Senior Finance & FinOps Roles</h3>
          <p className="text-ink-500 text-sm leading-relaxed mb-5">
            Actively seeking Senior Accounting Analyst, FinOps Analyst, AP SME, and Shared Services leadership positions. Open to hybrid and remote opportunities in India and globally.
          </p>
          <div className="grid grid-cols-2 gap-2">
            {SEEKING_ROLES.map((role) => (
              <div key={role} className="pill text-center justify-center py-2">{role}</div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-3">
          {CONTACT_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="card-glass p-4 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 + 0.2 }}
              whileHover={{ scale: 1.04 }}
            >
              <p className="text-2xl font-bold gradient-text leading-none">{s.value}</p>
              <p className="text-ink-500 text-xs mt-1.5">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
));

Contact.displayName = 'Contact';
export default Contact;
