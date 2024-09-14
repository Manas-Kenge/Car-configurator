import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineThunderbolt, AiFillCamera, AiOutlineArrowLeft, AiOutlineHighlight } from 'react-icons/ai';
import { useSnapshot } from 'valtio';
import { state } from '../utils/store';
import { useControls } from 'leva';


export const Overlay = () => {
    const snap: { intro: boolean; color: string } = useSnapshot(state);
    const transition: { type: string; duration: number } = { type: 'spring', duration: 0.8 };
    const config: { initial: object; animate: object; exit: object } = {
        initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
        animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
        exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
    };

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
                <AiOutlineThunderbolt size="3em" />
            </motion.header>
            <AnimatePresence>
                {snap.intro ? (
                    <motion.section key="main" {...config}>
                        <div className="section--container">
                            <motion.div
                                key="title"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: 'spring', damping: 5, stiffness: 40, restDelta: 0.001, duration: 0.3 }}>
                                <h1>LET'S DO IT.</h1>
                            </motion.div>
                            <div className="support--content">
                                <motion.div
                                    key="p"
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        type: 'spring',
                                        damping: 7,
                                        stiffness: 30,
                                        restDelta: 0.001,
                                        duration: 0.6,
                                        delay: 0.2,
                                        delayChildren: 0.2
                                    }}>
                                    <button style={{ background: snap.color }} onClick={() => (state.intro = false)}>
                                        CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
                                    </button>
                                </motion.div>
                            </div>
                            <p className=''>
                                Customize Your Dream car. <strong>Unleash your imagination</strong> and define your
                                own style.
                            </p>
                        </div>
                    </motion.section>
                ) : (
                    <motion.section key="custom" {...config}>
                        <Customizer />
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
};

const Customizer = () => {
    const snap = useSnapshot(state);
    //@ts-ignore
    const { color }: { color: string } = useControls('Car', {
        color: { value: snap.color, onChange: (v) => (state.color = v) },
    });
    
    return (
        <div className="customizer">
            <div className="color-options">
                <div className={`circle`} style={{ background: color }}></div>
            </div>
            <button
                className="share"
                style={{ background: snap.color }}
                onClick={() => {
                    const link: HTMLAnchorElement = document.createElement('a');
                    link.setAttribute('download', 'canvas.png');
                    const canvas = document.querySelector('canvas');
                    if (canvas) {
                        link.setAttribute('href', canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
                    }
                    link.click();
                }}
            >
                DOWNLOAD
                <AiFillCamera size="1.3em" />
            </button>
            <button className="exit" style={{ background: snap.color }} onClick={() => (state.intro = true)}>
                GO BACK
                <AiOutlineArrowLeft size="1.3em" />
            </button>
        </div>
    );
};