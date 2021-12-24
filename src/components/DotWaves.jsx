import React from "react";
import {motion} from "framer-motion";

const loadingContainerVariants = {
    start:{
        transition:{
            staggerChildren: 0.1
        }
    },
    end:{
        transition:{
            staggerChildren: 0.1
        }
    }
}

const loadingCircleVariants = {
    start:{
        y: '0%'
    },
    end:{
        y: '100%'
    }   
}

const loadingCircleTransition = {
    duration: 0.4,
    yoyo: Infinity,
    ease: 'easeIn'
}

export default function DotWaves() {
    return <motion.div className="loadingContainer" variants={loadingContainerVariants} initial="start" animate="end">
        <motion.span className="loadingCircle" variants={loadingCircleVariants} transition={loadingCircleTransition}/>
        <motion.span className="loadingCircle" variants={loadingCircleVariants} transition={loadingCircleTransition}/>
        <motion.span className="loadingCircle" variants={loadingCircleVariants} transition={loadingCircleTransition}/>
    </motion.div>
}