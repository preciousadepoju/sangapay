import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimationProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
}

// Fade In Animation (Best for Sections)
export const FadeIn: React.FC<AnimationProps & { direction?: 'up' | 'down' | 'left' | 'right' }> = ({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 0.5,
    once = false
}) => {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, margin: "-10%" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Scale In Animation (Best for Cards/Buttons)
export const ScaleIn: React.FC<AnimationProps> = ({ children, className = '', delay = 0, once = false }) => (
    <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once, margin: "-10%" }}
        transition={{ duration: 0.5, delay }}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {children}
    </motion.div>
);

// Staggered Container (Best for Lists/Grids)
export const StaggerContainer: React.FC<AnimationProps & { staggerDelay?: number }> = ({
    children,
    className = '',
    staggerDelay = 0.1,
    once = false
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once, margin: "-10%" }}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: 0.2
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Item for Staggered Container
export const StaggerItem: React.FC<AnimationProps> = ({ children, className = '' }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className={className}
    >
        {children}
    </motion.div>
);
